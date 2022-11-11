const [boxPhoto, cam, gallery, back, upload] = [
  document.querySelector('.change-box'),
  document.querySelector('.camera'),
  document.querySelector('.gallery'),
  document.querySelector('#back'),
  document.querySelector('#image-input'),
]

window.addEventListener('load', () => {
  const url = localStorage.getItem('src')
  if (url) {
    boxPhoto.setAttribute(
      'style',
      `background-image: url(${url}); background-position: center; background-size: contain; background-repeat: no-repeat; `
    )
  }
})

cam.addEventListener('click', () => {
  window.location.href = 'camera.html'
})
back.addEventListener('click', () => {
  window.location.href = '../index.html'
})
gallery.addEventListener('click', () => {
  upload.click()
})
upload.addEventListener('change', () => {
  let reader = new FileReader()
  reader.readAsDataURL(upload.files[0])
  reader.onload = () => {
    localStorage.removeItem('url')
    localStorage.setItem('url', reader.result)
    window.location.href = 'crop.html'
  }
})
