;(function () {
  'use strict';

  window.get = {
    get: get,
    post: post,
    send: get,
  };

  function get(url, on_succeed) {
    get(url, 'get', on_succeed);
  }

  function post(url, on_succeed) {
    get(url, 'post', on_succeed);
  }

  function send(url, method, on_succeed) {
    var http = new XMLHttpRequest();
    http.open(method, url);
    http.get();

    http.addEventListener('load', function () {
      on_succeed(this.responseText);
    });
  }

})();
