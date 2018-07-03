/*

                       ┌─────────────────┐
                       │init(constructor)│
                       └─────────────────┘
                                │
         ┌──────────────────────┼────────────────────┐
         │                      │                    │
┌────────▼────  ───┐ ┌────────────▼    ───────┐ ┌──────────▼─────────┐
│初始化this.current │ │ 拷设置，初始化this.state  │ │       监听地址变化       │
└─────────────  ───┘ └─────────────    ───────┘ └────────────────────┘
                                                     │
                                                     │
                    ┌────────────────────────────────┤
                    │                                │
           ┌────────▼────────────┐      ┌────────────▼────────┐
           │      记录当前hash       │      │     判断当前页归哪个路由管     │
           └─────────────────────┘      └─────────────────────┘

*/
/**
 * @property {object} current 当前路由信息：{hash: '#/home'}
 * @property {object} state 保存着路由的大部分重要信息，由拷贝config得到
 */
class Route {
  /**
   * 当对象出生时立即执行
   * @param {object} config 举例：
   *    {
   *      // -----------------------
   *      // 所有的路由规则
   *      // -----------------------
   *      route: {
   *        home: { // 其中一条规则（定义了首页地址和相对应的模板）
   *          path: '/home', // 地址栏地址
   *          template_url: './template/home.html' // 模板地址
   *          el: '#home',
   *          hook: { // 局部钩子，仅会在当前路由执行
   *            before: function() {},
   *            after: function() {},
   *          }
   *        },
   *        about: { // 另一条规则
   *          ...
   *        }
   *        ...
   *      },
   *      // -----------------------
   *      // 全局钩子
   *      // -----------------------
   *      //
   *      // 访问任何一页都会经过以下几个步骤：
   *      //    before：已加载设置，地址未发生变化，但是未渲染
   *      //    after：已加载设置，地址未发生变化，已渲染
   *      // 你可以将自己的逻辑通过这些插槽（钩子）传进来，当路由执行到
   *      // 对应的位置时就会触发你的函数。
   *
   *      hook: {
   *        before: function() {},
   *        after: function() {}
   *      }
   *    }
   */
  constructor (config) {
    // 初始化this.current，确保以后this.current.xxx不报错
    this.current = {};

    // 将传进来的设置拷一份，绑到当前对象上
    this.state = Object.assign({}, config);

    this.load_config();

    this.root = document.querySelector('#root');

    // 如果用户直接访问了某个路由，默认情况下页面不会渲染，
    // 因为没有触发hashchange事件，所以就不会调用go()，更不会渲染
    this.init_page();

    // 监听浏览器地址变化
    this.detect_hash_change();
  }

  load_config () {
    let routes = this.state.route;

    for (let name in routes) {
      let item = routes[ name ];

      item.render = () => {
        this.render(item);
      };
    }
  }

  /**
   * 监听hash的变化
   *
   * 当浏览器地址发生变化是应该干什么
   */
  detect_hash_change () {
    window.addEventListener('hashchange', () => {
      // 将当前页面的原始hash记录在current中，方便后续使用
      this.current.hash = location.hash;

      // 获取当前hash对应的路由
      let route_name  = this.parse_current_hash_path();
      let route_param = this.parse_current_hash_query();

      this.go(route_name, route_param);
    });
  }

  /**
   * 切换路由
   * @param {string} route_name 路由名this.state.route.xxx
   * @param {object} param 路由传参，通常通过this.parse_hash_query()得到
   */
  go (route_name, param) {
    let route = this.state.route[ route_name ];

    if (!route)
      return;

    // HOOK:"before"
    // 如果当前路由有前置钩子，那么在切换本路由前就应该叫一下这个钩子，
    // 如果钩子返回false就停止执行（也就是不切换页面）
    if (route.hook && route.hook.before && route.hook.before(route) === false)
      return;

    // 保存上一条历史路由
    this.previous = this.current;

    // 保存当前路由
    this.current        = route;
    this.current.$param = param;

    // 删除之前的页面（之前的页面不应该继续显示）
    this.remove_previous_tpl();

    // HOOK:"before_render"
    route.hook && route.hook.before_render && route.hook.before_render(route);

    // 渲染当前页面
    this.render_current(() => {
      // HOOK:"after"
      // 如果当前路由有后置钩子，那么在切换本路由后就应该叫一下这个钩子
      route.hook && route.hook.after && route.hook.after(route);
    });
  }

  /**
   * 清空前一页
   */
  remove_previous_tpl () {
    // 清空模板床
    this.root.innerHTML = '';
  }

  init_page () {
    // if (!location.hash)
    //   return;
    let route_name  = this.parse_hash_path(location.hash);
    let route_param = this.parse_hash_query(location.hash);

    if (!route_name) {
      route_name    = this.state.default;
      location.hash = this.state.route[ route_name ].path;
    } else {
      this.go(route_name, route_param);
    }
  }

  /**
   *
   * @param {string} keys 如：'user.child.name'
   * @param {*} value 如：'whh'
   */
  set_data (route_name, keys, value) {
    let layers      = keys.split('.'); // ['user', 'child', 'name']
    let layer_count = layers.length;

    // 1. 更新数据
    // 获取当前路由的数据
    let data = this.state.route[ route_name ].data;
    if (!data)
      data = this.state.route[ route_name ].data = {};

    for (let i = 0; i < layer_count; i++) {
      let key     = layers[ i ];
      let is_last = i + 1 == layer_count;
      let nest    = data;

      if (is_last) {
        nest[ key ] = value;
      } else {
        if (!nest[ key ])
          nest[ key ] = {};
        nest = nest[ key ];
      }
    }

    // 2. 更新视图
    this.compile(this.state.route[ route_name ]);
  }

  /**
   * 渲染当前页
   */
  render_current (on_render_finish) {
    this.render(this.current, on_render_finish);
  }

  /**
   * 解析当前路由名的快捷方式（省的给parse_hash_path()专门传参）
   * @return {string} 当前地址的路由名
   */
  parse_current_hash_path () {
    return this.parse_hash_path(this.current.hash);
  }

  /**
   * 解析当前路由传参的快捷方式（省的给parse_hash_query()专门传参）
   * @return {object} 当前地址的传参
   */
  parse_current_hash_query () {
    return this.parse_hash_query(this.current.hash);
  }

  /**
   * 通过原始hash（如："#/home"）解析得到其对应的路由名
   * @param hash 原始hash #/article?a=1&b=2&c=3
   * @return {string} 路由名，对应着this.state.route.xxx
   */
  parse_hash_path (hash) {
    hash   = hash.split('?')[ 0 ];
    hash   = trim(hash, '#/');
    let re = new RegExp('^#?\/?' + hash + '\/?$');

    for (let key in this.state.route) {
      let item = this.state.route[ key ];
      if (re.test(item.path))
        return key;
    }
  }

  /**
   * 解析地址栏query传参
   * @param hash #/article?a=1&b=2&c=3
   * @return {object} e.g. {a: 1, b: 2, c: 3}
   */
  parse_hash_query (hash) {

    let param = {};
    let split = hash.split('?');
    // 因为没问号所以没法分割成两部分，所以就直接返回空对象
    if (split.length < 2)
      return param;

    // 先将原始地址通过?分割为左右两份，如"#/article?a=1&b=2&c=3"
    // 左边为："#/article"
    // 右边为："a=1&b=2&c=3"
    // 我们只在乎右边的传参部分
    hash = hash.split('?')[ 1 ];

    if (!hash)
      return param;

    // 将传参部分用"&"分割为数组，每一个元素是一个键值对
    // 从："a=1&b=2&c=3"
    // 变为：["a=1", "b=2", "c=3"]
    let arr = hash.split('&');

    // 循环每个键值对
    arr.forEach(pair => {
      // pair在这里可以是任何一个键值对，如："a=1"

      // 将每个键值对通过等号分割得到一个数组：
      // ["a", "1"]
      let pair_arr = pair.split('=');
      // 键是"a"
      let key      = pair_arr[ 0 ];
      // 值是"1"
      let value    = pair_arr[ 1 ];

      // 相当于 param["a"] = "1"
      param[ key ] = value;
    });

    // 最后返回生成的对象
    return param;
  }

  /**
   * 通过路由对象渲染页面
   * @param {object} 路由对象
   */
  render (route, on_render_finish) {
    // element.hiddent = true;

    // 如果已经缓存该模板就直接使用
    if (route.$template) {
      this.compile(route, on_render_finish);
      return;
    }

    // 因为路由对象中配置了模板地址，所以可以根据地址取到真实的模板代码（HTML代码）
    this.get_template(route.template_url, (tpl) => {
      // 取到模板后将其插到模板床中，同时将其缓存至路由对象中
      route.$template = tpl;
      this.compile(route, on_render_finish);
    });
  }

  /**
   * 通过路由对象的$template和data生成最后的视图
   * @param route 路由对象
   */
  compile (route, on_compile_finish) {
    this.root.innerHTML = parse(route.$template, route.data);
    if (on_compile_finish)
      on_compile_finish();
  }

  /**
   * 通过url获取模板代码（一般为HTML代码）
   * @param url
   * @param on_succeed
   */
  get_template (url, on_succeed) {
    // ...
    const http = new XMLHttpRequest();
    http.open('get', url);
    http.send();

    http.addEventListener('load', () => {
      on_succeed(http.responseText);
    });
  }
}


function trim (str, cap_list) {
  let arr = cap_list.split('');

  arr.forEach(function (cap) {
    if (str.startsWith(cap)) {
      str = str.substring(1);
      str = trim(str, cap);
    }

    if (str.endsWith(cap)) {
      str = str.substring(0, str.length - 1);
      str = trim(str, cap);
    }
  });

  return str;
}


