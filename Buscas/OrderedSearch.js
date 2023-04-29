const orderedSearch = (array, key) => {
   
  var low = 0
  var rear = array.length - 1

  while (low <= rear) {
    var middle = Math.floor((low + rear) / 2)

    if (array[middle] === key) {
      return middle
    }
  
    if (array[middle] < key) {
      low = middle + 1
    }

    else {
      rear = middle - 1;
    }
  }
  
    return -1
}

module.exports = orderedSearch





