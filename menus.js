const bubbleSort = require("./Sort/BubbleSort.js");
const binarySearch = require("./Buscas/BinarySearch.js");
const linearSearch = require("./Buscas/LinearSearch.js");
const orderedSearch = require("./Buscas/OrderedSearch.js");
const numberGenerator = require("./NumberGenerator.js");
const prompt = require("prompt-sync")();

const loadGen = () => {
    let opt, size, tempArr = []

    console.info(
        "Choose a the size of the array:\n1 - 1000 elements \n2 - 10000 elements \n3 - 50000 elements \n4 - 100000 elements \n5 - 500000 elements \n6 - 1000000 elements \n0 - Exit program.\n"
      );

    opt = prompt("Option: ");
    opt = Number(opt);

    switch (opt) {
        case 1:
          size = 1000;
          tempArr = numberGenerator(size);
          break;
        case 2:
          size = 10000;
          tempArr = numberGenerator(size);
          break;
        case 3:
          size = 50000;
          tempArr = numberGenerator(size);
          break;
        case 4:
          size = 100000;
          tempArr = numberGenerator(size);
          break;
        case 5:
          size = 500000;
          tempArr = numberGenerator(size);
          break;
        case 6:
          size = 1000000;
          tempArr = numberGenerator(size);
          break;
        case 0:
          return;
        default:
          console.log("Invalid option, please select a valid option\n");
      }
      
      return tempArr
}

const mainMenu = () => {

    let opt,
    result,
    arr = [],
    orderedArr,
    srchNum

    arr = loadGen()

    orderedArr = Array.from(arr);
    orderedArr = bubbleSort(orderedArr);

    while (opt != 0) {
        console.log("\nChoose a number to be serched:\n");
        srchNum = prompt("Number: ");
        srchNum = Number(srchNum);
    
        console.log(
          "\nChoose a searching method:\n1 - Ordered Linear Search\n2 - Linear Search\n3 - Binary Search\n4 - Create a new load\n0 - Exit program.\n"
        );
        opt = prompt("Option: ");
        opt = Number(opt);
        switch (opt) {
          case 1:
            console.time('Execution Time');
            result = orderedSearch(orderedArr, srchNum);
            console.timeEnd('Execution Time');
            console.log(`OS: The number ${srchNum} is at the index: ${result}`);
            break;
          case 2:
            console.time('Execution Time');
            result = linearSearch(arr, srchNum);
            console.timeEnd('Execution Time');
            console.log(`LS: The number ${srchNum} is at the index: ${result}`);
            break;
          case 3:
            console.time('Execution Time');
            result = binarySearch(orderedArr, srchNum);
            console.timeEnd('Execution Time');
            console.log(`BS: The number ${srchNum} is at the index: ${result}`);
            break;
            case 4:
              arr = []
              arr = loadGen()
              orderedArr = Array.from(arr);
              orderedArr = bubbleSort(orderedArr);
              break;
          case 0:
            return;
          default:
            console.log("Invalid option, please select a valid option\n");
        }
      }
}

module.exports = loadGen
module.exports = mainMenu