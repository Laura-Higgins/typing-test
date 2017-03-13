var text = 'Modest Mouse is the best.'
var errorCount = 0

for (var i = 0; i < text.length; i++) {
  var $word = document.createElement('span')
  $word.textContent = text[i]
  if(i === 0) {
    $word.classList.add('current')
  }
  document.body.appendChild($word)
}

document.addEventListener('keypress', function(event) {
  var $current = document.querySelector('.current')
  var currentCharacter = $current.textContent

  if (currentCharacter === event.key) {
    $current.classList.remove('current', 'incorrect')
    $current.classList.add('correct')

    if ($current.nextElementSibling != null) {
      $current.nextElementSibling.classList.add('current')
    } else {
      alert('You have missed: ' + errorCount)
    }
  }
  else {
    errorCount++
    $current.classList.add('incorrect')
  }
})
