let url
const [preview, output, capture, result, back] = [
  document.getElementById('preview'),
  document.getElementById('output'),
  document.getElementById('capture'),
  document.getElementById('result'),
  document.getElementById('back'),
]

navigator.mediaDevices
  .getUserMedia({
    audio: false,
    video: {
      width: 343,
      height: 580,
    },
  })
  .then((stream) => {
    preview.srcObject = stream
    preview.play()
  })
  .catch((error) => {
    console.log(error)
  })

capture.addEventListener('click', () => {
  const context = output.getContext('2d')

  output.width = 343
  output.height = 580

  context.drawImage(preview, 0, 0, output.width, output.height)
  output.classList.add('hidden')
  url = output.toDataURL()

  localStorage.setItem('url', url)

  window.location.href = 'crop.html'
})

back.addEventListener('click', () => {
  window.location.href = '../index.html'
})
