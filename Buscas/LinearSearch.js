const linearSearch = (arr, targerNumber) => {
  for (let i in arr) {
    if (arr[i] === targerNumber) return i;
  }

  return -1;
};

module.exports = linearSearch;
