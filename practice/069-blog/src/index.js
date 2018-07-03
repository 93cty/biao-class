import templator from './Templator/templator';

// let tpl  = `<h1>你好，我叫{{name}}，我今年{{age}}岁了，我娃叫{{child.name}}，他今年{{child.age}}</h1>`;
// let data = {
//   name  : '王花花',
//   age   : 18,
//   child : { name : '李拴蛋', age : 54 },
// };
// let r    = templator(tpl, data);
// console.log(r);

// import article_api from './Api/article';
// import article_ui  from './Ui/article';
// import route       from './Route/route';
//
// let route_config = {
//   routes : {
//     home         : {
//       path         : '/home',
//       el           : '#home',
//       template_url : './src/template/home.html',
//     },
//     about        : {
//       path         : '/about',
//       el           : '#about',
//       template_url : './src/template/about.html',
//     },
//     article      : {
//       path         : '/article/:author/:id', // ['article', ':author', ':id']
//       el           : '#article',
//       template_url : './src/template/article.html',
//     },
//     article_list : {
//       path         : '/article-list',
//       el           : '#article-list',
//       template_url : './src/template/article-list.html',
//     },
//   },
//   hook   : {
//     before : function () {
//       return true;
//     },
//     after  : function (route) {
//       /*先通过接口拿到数据*/
//       // article_api.read(1, data => {
//       //   /*有了数据就可以渲染动态的内容了*/
//       //   article_ui.render(data);
//       // });
//     },
//   },
// };
//
// route
//   .init(route_config);
