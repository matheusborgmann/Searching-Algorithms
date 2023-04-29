const linearSearch = (array, key) => {
  
  for (let iterable in array) {
    if (array[iterable] === key) return iterable;
  }

  return -1;
};

module.exports = linearSearch;


