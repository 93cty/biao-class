let o = {
  default : 'home',
  route   : {
    home    : {
      path         : '#/home/',
      template_url : './tpl/home.html',
      data         : {
        name : "王花花",
      },
      hook         : {
        after : (route) => {
          http.post('http://mock.biaoyansu.com/api/article/read', {}, (res) => {
            let list    = res.data;
            let el_list = document.getElementById('article-list');
            list.forEach(row => {
              let el_item       = document.createElement('div');
              el_item.innerHTML = `
            <a href="#/article?id=${row.id}">${row.title}</a>
            `;
              el_list.appendChild(el_item);
            });
            // route.render();
          });
        },
      },
    },
    about   : {
      path         : '/about',
      template_url : './tpl/about.html',
      data         : {
        name : '王花花',
        age  : 10,
      },
    },
    create  : {
      path         : '/create',
      template_url : './tpl/create.html',
      data         : {},
      hook         : {
        after : () => { // 当路由切换完毕时执行
          // 选中提交表单
          let form = document.getElementById('create-article');
          // 监听表单提交事件
          form.addEventListener('submit', (e) => {
            e.preventDefault();

            // 初始化数据
            let row     = {};
            row.title   = form.querySelector('[name=title]').value; // 获取标题的值
            row.content = form.querySelector('[name=content]').value; // 获取内容的值

            // 插入数据（新增一条，类似于api.add()）
            app_data.article.list.push(row);

            // 重置表单
            form.reset();
          });
        },
      },
    },
    article : {
      path         : '/article',
      template_url : './tpl/article.html',
      hook         : {
        before        : (current) => {
        },
        after         : (current) => {
          console.log('current:', current);
          http.post('http://mock.biaoyansu.com/api/article/find', { id : current.$param.id }, (res) => {
            current.data.article = res.data;
            current.render();
          });
        },
        before_render : (current) => {
          current.data.param = current.$param;
        },
      },
      data         : {},
    },
  },
  hook    : {
    before : () => {},
    after  : () => {},
  },
};


let route = new Route(o);

// 全局调用，路由的切换并不影响其状态（因为他和路由是平行的）
// counter();
//
// function counter () {
//   let count = 0;
//
//   setInterval(() => {
//     console.log(count);
//     count++;
//   }, 500);
// }
