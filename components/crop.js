const [image, back, save] = [
  document.querySelector('#result'),
  document.querySelector('#back'),
  document.querySelector('#save_btn'),
]

let cropper

window.addEventListener('load', () => {
  let url = localStorage.getItem('url')
  image.setAttribute('src', url)

  cropper = new Cropper(image, {
    aspectRatio: 343 / 343,
    cropBoxResizable: false,
  })
})

back.addEventListener('click', () => {
  window.location.href = 'change.html'
})

save.addEventListener('click', () => {
  console.log('hi')
  const croppedImage = cropper.getCroppedCanvas().toDataURL('image/png')
  localStorage.setItem('src', croppedImage)
  setTimeout(() => {
    window.location.href = '../index.html'
  }, 1000)
})
