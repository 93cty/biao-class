var x = 1;

var shared = {
  num: x, // 此处的x是拷进来的，就相当于写死了一个1
}

x = 2; // 此处shared.num还是1，因为数字类型是拷的（按值传递的）

module.exports = shared;
