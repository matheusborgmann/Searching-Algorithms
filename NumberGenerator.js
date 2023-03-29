const numberGenerator = (size) => {
    let tempArr = []
    for (let i = 0; i < size; i++){
    let randomInt = Math.floor(Math.random() * (size * 10));

    if (!tempArr.includes(randomInt)){
        tempArr.push(randomInt)
    } else {
        i--
    }
  } 
  //console.log("\nArray: \n[" + tempArr + "]") 
  return tempArr
}

module.exports = numberGenerator