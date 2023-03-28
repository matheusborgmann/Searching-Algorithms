function compare(a, b) {
  return a - b;
}

const binarySearch = (arr, x) => {
  let low = 0;
  let rear = arr.length - 1;

  while (low <= rear) {
    let mid = Math.floor((low + rear) / 2);

    if (arr[mid] == x) {
      return mid;
    }

    let cmp = compare(x, arr[mid]);

    if (cmp > 0) {
      low = mid + 1;
    } else if (cmp < 0) {
      rear = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

module.exports = binarySearch;
