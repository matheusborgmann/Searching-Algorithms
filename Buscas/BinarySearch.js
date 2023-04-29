function compare(a, b) {
  return a - b;
}

const binarySearch = (array, key) => {
  let low = 0;
  let rear = array.length - 1;

  while (low <= rear) {
    let middle = Math.floor((low + rear) / 2);

    if (array[middle] == key) {
      return middle;
    }

    let comparation = compare(key, array[middle]);

    if (comparation > 0) {
      low = middle + 1;
    } else if (comparation < 0) {
      rear = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

module.exports = binarySearch;







