const bubbleSort = require("./Sort/BubbleSort.js");
const binarySearch = require("./Buscas/BinarySearch.js");
const linearSearch = require("./Buscas/LinearSearch.js");
const orderedSearch = require("./Buscas/OrderedSearch.js");
const numberGenerator = require("./NumberGenerator.js");
const prompt = require("prompt-sync")();
const fs = require("fs");
const writeStream = fs.createWriteStream("./orderedFile.txt");
const writeStream2 = fs.createWriteStream("./file.txt");

let size;

const loadGen = () => {
  let opt,
    tempArr = [];

  console.log(
    "Choose a the size of the array:\n1 - 1000 elements \n2 - 10000 elements \n3 - 50000 elements \n4 - 100000 elements \n5 - 500000 elements \n6 - 1000000 elements \n0 - Exit program.\n"
  );

  opt = prompt("Option: ");
  opt = Number(opt);

  switch (opt) {
    case 1:
      size = 1000;
      tempArr = numberGenerator(size);
      // tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 2:
      size = 10000;
      tempArr = numberGenerator(size);
      // tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 3:
      size = 50000;
      tempArr = numberGenerator(size);
      // tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 4:
      size = 100000;
      tempArr = numberGenerator(size);
      // tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 5:
      size = 500000;
      tempArr = numberGenerator(size);
      // tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 6:
      size = 1000000;
      tempArr = numberGenerator(size);
      //tempArr.forEach(value => writeStream2.write(`${value}, `));

      break;
    case 0:
      return;
    default:
      console.log("Invalid option, please select a valid option\n");
  }

  return tempArr;
};

const mainMenu = () => {
  let opt,
    result,
    arr = [],
    orderedArr,
    srchNum;

  arr = loadGen();

  orderedArr = Array.from(arr);
  orderedArr = bubbleSort(orderedArr);

  while (opt != 0) {
    console.log("First, Second, Penultimate and Last item on the list.\n");
    console.log(
      arr[0] + "\n" + arr[1] + "\n" + arr[size - 2] + "\n" + arr[size - 1]
    );

    console.log("First, Second, Penultimate and last values of the list.\n");
    console.log(
      orderedArr[0] +
        "\n" +
        orderedArr[1] +
        "\n" +
        orderedArr[size - 2] +
        "\n" +
        orderedArr[size - 1]
    );

    console.log(
      "\nChoose an option:\n1 - Ordered, Linear and Binary searches\n2 - Create a new load\n0 - Exit program.\n"
    );
    opt = prompt("Option: ");
    opt = Number(opt);
    switch (opt) {
      case 1:
        console.log("\nChoose a number to be serched:\n");
        srchNum = prompt("Number: ");
        srchNum = Number(srchNum);

        console.time("Ordered Search");
        result = orderedSearch(orderedArr, srchNum);
        console.timeEnd("Ordered Search");
        console.log(`OS: The number ${srchNum} is at the index: ${result}\n`);

        console.time("Linear Search");
        result = linearSearch(arr, srchNum);
        console.timeEnd("Linear Search");
        console.log(`OS: The number ${srchNum} is at the index: ${result}\n`);

        console.time("Binary Search");
        result = binarySearch(orderedArr, srchNum);
        console.timeEnd("Binary Search");
        console.log(`OS: The number ${srchNum} is at the index: ${result}\n`);
        // console.log(`OS: The number ${srchNum} is at the index: ${result}`);
        break;
      case 2:
        arr = [];
        arr = loadGen();
        orderedArr = Array.from(arr);
        orderedArr = bubbleSort(orderedArr);
        break;
      case 0:
        return;
      default:
        console.log("Invalid option, please select a valid option\n");
    }
  }
};

module.exports = loadGen;
module.exports = mainMenu;
