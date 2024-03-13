let apiViews = 0;

const weakMap = new WeakMap();
function queryAPI(endpoint) {
  apiViews += 1;
  if (apiViews >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, apiViews);
}

export { weakMap, queryAPI };
