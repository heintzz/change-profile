function makePattern(n) {
  if (n % 2 !== 0) {
    displayPattern(n)
  } else {
    console.log('Harus bilangan ganjil')
  }

  function displayPattern(n) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        // print X on every edge
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
          process.stdout.write('X')
        } else {
          // print X on the diagonal
          if (i + j === n - 1) {
            process.stdout.write('X')
          } else {
            // if it's not on the edge nor diagonal print O
            process.stdout.write('O')
          }
        }
      }
      process.stdout.write('\n')
    }
  }
}


makePattern(7)
