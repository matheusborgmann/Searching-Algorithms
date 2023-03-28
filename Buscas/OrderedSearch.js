const orderedSearch = (array, x) => {
  for (let i in array) {
    if (array[i] === x) return i;
  }

  return -1;
};

module.exports = orderedSearch;
