function multipleOfThreeOrSeven(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 7 == 0) {
      if (i % (3 * 7) == 0) {
        arr.push('Z')
      } else {
        arr.push(i.toString())
      }
    }
  }
  console.log(arr.join(', '))
}

multipleOfThreeOrSeven(30)
