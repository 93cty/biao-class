window.http = {
  post,
  send,
};

window.send = send;

let config = {
  app_key : 'dc0d71536b48e49c6b64cfc750aeb925e6b11296af2f538ecd4f224bfa1b91c7',
};

function sign (key, timestamp) {
  return btoa(key + timestamp);
}

function send (url, method, data, on_succeed, on_error) {
  method = method || 'get';

  let def = {
    app_key   : config.app_key,
    timestamp : (new Date).getTime(),
  };

  def.signature = sign(def.app_key, def.timestamp);

  data = Object.assign({}, def, data);

  let http = new XMLHttpRequest();
  http.open(method, url);
  http.setRequestHeader('Content-Type', 'application/json');
  http.send(JSON.stringify(data));
  http.addEventListener('load', () => {
    let res = JSON.parse(http.responseText);
    on_succeed(res);
  });
}

function post (url, data, on_succeed, on_error) {
  send(url, 'post', data, on_succeed, on_error);
}
