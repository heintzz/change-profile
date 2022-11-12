function lowestWholeValueOf(arr) {
  // sort an array (ascending)
  let sortedArr = arr.sort((a, b) => a - b)
  let value = []

  // if the current value and next value has difference > 1, then there's a hole
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      value.push(sortedArr[i])
    }
  }

  // get the first value that has difference > 1 with its next value
  const output = value[0] + 1
  console.log(output)
}

lowestWholeValueOf([8, 6, 7, 12])
