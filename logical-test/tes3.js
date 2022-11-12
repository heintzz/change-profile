function passwordChecker(pass) {
  if (pass.length < 8) {
    console.log('Kata sandi minimal 8 karakter')
  } else if (pass.length > 32) {
    console.log('Kata sandi minimal 32 karakter')
  } else {
    charChecker(pass)
  }

  function charChecker(pass) {
    if (
      pass[0] === pass[0].toLowerCase() &&
      pass[0] === pass[0].toUpperCase()
    ) {
      console.log('Karakter awal tidak boleh angka')

    } else if (pass === pass.toLowerCase() || pass === pass.toUpperCase()) {
      console.log('Karakter harus memiliki huruf kapital dan huruf kecil')
    } else {
      for (let i = 0; i < pass.length; i++) {
        if (
          pass[i] === pass[i].toLowerCase() &&
          pass[i] === pass[i].toUpperCase()
        ) {
          console.log('Kata sandi valid')
          break
        } else {
          console.log('Kata sandi harus memuat angka')
          break
        }
      }
    }
  }
}

const pass = 'u878ra'
passwordChecker(pass)
