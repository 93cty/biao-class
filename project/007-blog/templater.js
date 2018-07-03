/**
 * 通过`.`分割的键名来获取多级对象
 * get_obj({a: {b: 1}}, 'a.b') => 1
 *
 * @param {object} data 如：{a: {b: 1}}
 * @param key 如：'a.b'
 * @return {*} 如：1
 */
function get_obj (data, key) {
  // 将对象拷一份，方便后续的处理，
  // 否则有可能污染外部的对象（因为对象是引用类型，也就是"借"值的）
  let result = Object.assign({}, data);

  // 将键通过点分割为数组
  // 'a.b' => ['a', 'b']
  let layers = key.split('.');

  for (let i = 0; i < layers.length; i++) {
    let key = layers[ i ];
    if (!result)
      return;
    // 当前对象覆盖前一级的对象
    result = result[ key ];
    // ^当前    ^上一级
  }

  // 返回最后取到的值
  return result;
}

/**
 * 解析模板
 * @param {string} tpl 需要解析的模板，如："我叫{{user.name}}，我今年{{user.age}}岁了"
 * @param {object} data 需要插入的数据，如：{user: {name: '王花花', age: 18}}
 * @return {string} "我叫王花花，我今年18岁了"
 */
function parse (tpl, data) {
  //

  // 定义正则，要求：
  // - 必须匹配双花括号中的内容
  // - 双括号与内容之间可以包含空格
  const re = /{{([^}]+)}}/g; // const re   = /{{\s*([^}\s]+)\s*}}/g; 通过正则抓取除去空格的键名

  // 声明match，方便下方的循环暂存过程值，也就是[0: "{{user.name}}", 1: "user.name" ...]
  // 这个值每次循环都不一样，如果找不到匹配就会为null
  // 一旦出现null循环就会终止
  let match;

  // 将模板拷一份，方便后续处理（防止因为替换导致的字符串长度不一致的问题）
  let result = tpl;

  // exec() 方法用于匹配字符串，但是其特点是一拨一转
  // 叫他一次，他才会匹配下一条，直到再也找不到匹配结果（返回null）
  while (match = re.exec(tpl)) {
    // 就是花括号，如："{{ user.name }}"
    let variable = match[ 0 ];

    // 获取键名，如：" user.name "
    let key = match[ 1 ].trim();

    // 获取键背后的数据，如："王花花"
    let replacement = get_obj(data, key);

    if (replacement === undefined)
      continue;

    // 将模板中的变量（花括号）替换成数据
    result = result.replace(variable, replacement);
  }

  return result;
}

window.parse = parse;

// let tpl = '我叫{{ user.name }}，我今年{{user.age}}岁了。我娃叫{{user.child.name}}';
//
// let data = {
//   user :
//     {
//       name  : '王花花',
//       age   : 18,
//       child : {
//         name : '赵可爽',
//       },
//     },
// };



