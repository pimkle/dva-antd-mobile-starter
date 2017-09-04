export function getScreenWidth() {
  return getScreenParams();
}

export function getScreenHeight() {
  return getScreenParams(true);
}

function getScreenParams(getY) {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  return getY ? y : x;
}
