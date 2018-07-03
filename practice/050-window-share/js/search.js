;(function () {
  'use strict';

  window.search = {
    search_user: search_user,
    search_repo: search_repo,
  };

  function search_user(kwd) {
    get.get('https://api.github.com/search/users?q=' + kwd,
      function (data) {
        console.log(data);
      });
  }

  function search_repo(kwd) {
    get.get('https://api.github.com/search/repositories?q=' + kwd,
      function (data) {
        console.log(data);
      });
  }

})();
