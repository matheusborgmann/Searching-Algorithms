const linearSearch = (arr, x) => {
  for (let i in arr) {
    if (arr[i] === x) return i;
  }

  return -1;
};

module.exports = linearSearch;
