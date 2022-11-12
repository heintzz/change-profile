const [boxPhoto, cam, gallery, back, upload, save] = [
  document.querySelector('.change-box'),
  document.querySelector('.camera'),
  document.querySelector('.gallery'),
  document.querySelector('#back'),
  document.querySelector('#image-input'),
  document.querySelector('#save_btn'),
]

window.addEventListener('load', () => {
  const url = localStorage.getItem('url')
  const src = localStorage.getItem('src')
  if ((url && !src) || (url === src && url && src)) {
    boxPhoto.setAttribute(
      'style',
      `background-image: url(${url}); background-position: center; background-size: contain; background-repeat: no-repeat; `
    )
  }
  if ((!url && !src) || (url === src && url && src)) {
    save.classList.add('inactive')
  }
  if (url !== src) {
    boxPhoto.setAttribute(
      'style',
      `background-image: url(${url}); background-position: center; background-size: contain; background-repeat: no-repeat; `
    )
  }
  if (!url && src) {
    boxPhoto.setAttribute(
      'style',
      `background-image: url(${src}); background-position: center; background-size: contain; background-repeat: no-repeat; `
    )
  }
})

cam.addEventListener('click', () => {
  window.location.href = 'camera.html'
})
back.addEventListener('click', () => {
  localStorage.setItem('url', localStorage.getItem('src'))
  window.location.href = '../index.html'
})
gallery.addEventListener('click', () => {
  upload.click()
})
save.addEventListener('click', () => {
  if (!save.classList.contains('inactive')) {
    const src = localStorage.getItem('url')
    localStorage.setItem('src', src)
  }
  window.location.href = '../index.html'
})
upload.addEventListener('change', () => {
  let reader = new FileReader()
  reader.readAsDataURL(upload.files[0])
  reader.onload = () => {
    localStorage.setItem('url', reader.result)
    window.location.href = 'crop.html'
  }
})
