const bubbleSort = require("./Sort/BubbleSort.js");
const binarySearch = require("./Buscas/BinarySearch.js");
const linearSearch = require("./Buscas/LinearSearch.js");
const orderedSearch = require("./Buscas/OrderedSearch.js");
const prompt = require("prompt-sync")();

main();

function main() {
  let opt, result;

  let arr = [1000, 10000, 50000, 100000, 500000, 1000000, 5];
  let orderedArr = Array.from(arr);

  orderedArr = bubbleSort(orderedArr);
  while (opt != 4) {
    console.log(
      "Choose a searching method\n1 - Ordered Linear Search\n2 - Linear Search\n3 - Binary Search\n4 - Exit program.\n"
    );
    opt = prompt("Option: ")
    opt = Number(opt)
    switch (opt) {
      case 1:
        result = orderedSearch(orderedArr, 5);
        console.log(`OS: O valor se encontra no index: ${result}`);
        break;
      case 2:
        result = linearSearch(arr, 5);
        console.log(`LS: O valor se encontra no index: ${result}`);
      case 3:
        result = binarySearch(orderedArr, 5);
        console.log(`BS: O valor se encontra no index: ${result}`);
        break;
      case 4:
        return;
      default:
        console.log("Invalid option, please select a valid option");
    }
  }
}
