function obj_get (obj, key) {
  let tmp = Object.assign({}, obj);
  let arr = key.split('.');

  console.log(arr);
}

let o = {
  a : {
    b : {
      c : 1,
    },
  },
};

obj_get(o, 'a.b.c'); // 1

function templator (tpl, data) {

}

export default templator;
