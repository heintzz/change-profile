const [image, back, crop] = [
  document.querySelector('#result'),
  document.querySelector('#back'),
  document.querySelector('#crop'),
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
  localStorage.removeItem('url')
  window.location.href = 'change.html'
})

crop.addEventListener('click', () => {
  const croppedImage = cropper.getCroppedCanvas().toDataURL('image/png')
  localStorage.setItem('url', croppedImage)
  setTimeout(() => {
    window.location.href = 'change.html'
  }, 500)
})
