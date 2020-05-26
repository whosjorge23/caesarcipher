let input = prompt('Type your text UPPERCASE:')
const resultText = document.getElementById('result')

function start() {
    input = prompt('Type your text UPPERCASE:')
    let result = rot13(input)
    resultText.innerHTML = result
}

function rot13(str) {
    let decodedResult = ''
    let alphabetStart = 'ABCDEFGHIJKLM'
    let alphabetEnd = 'NOPQRSTUVWXYZ'


str.split("").forEach(function(letterToDecode, index) {
  let alphabetStartIndex = alphabetStart.indexOf(letterToDecode)
  let alphabetEndIndex = alphabetEnd.indexOf(letterToDecode)
  
  if (alphabetStartIndex >= 0) {
      decodedResult += alphabetEnd[alphabetStartIndex]
  }else if (alphabetEndIndex >=0) {
    decodedResult += alphabetStart[alphabetEndIndex]
  }else {
      decodedResult += letterToDecode
  }
});

return decodedResult

}

let result = rot13(input)
resultText.innerHTML = result