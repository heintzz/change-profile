function searchKeyword(text) {
  const normalizeText = text.toLowerCase()
  const keyword = ['sang gajah', 'serigala', 'harimau']
  const results = []

  keyword.forEach((key) => {
    let startIndex = 0
    let index

    // while keyword is exists in that string -> print its value
    while ((index = normalizeText.indexOf(key, startIndex)) !== -1) {
      results.push(key)
      // change the initial index
      startIndex = index + key.length
    }
  })

  console.log(results.join(' - '))
}

const text =
  'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah'

searchKeyword(text)
