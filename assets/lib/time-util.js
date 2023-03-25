export function debounce(func, timeout){
  // Based on https://stackoverflow.com/a/24004942/what-is-the-debounce-function-in-javascript by Malk, 2014-06-02
  // See also https://www.freecodecamp.org/news/javascript-debounce-example/
  // See also http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
  let timer;
  return function(event){
      if(timer) clearTimeout(timer);
      timer = setTimeout(func, timeout, event);
  };
}
