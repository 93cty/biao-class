var history = require('../src/history');

history.init({
  el: '#history-list',
  on_click: function (keyword, e) {
    console.log(keyword);
  },
});

// history.add('a');
// history.add('b');
// history.remove('b');
// history.clear();
