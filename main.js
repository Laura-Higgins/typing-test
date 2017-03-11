var text = 'Modest Mouse is the best.'

  for (var i = 0; i < text.length; i++) {
    var $word = document.createElement('span')
    $word.textContent = text[i]
    document.body.appendChild($word)
  }

var firstLetter = document.querySelector('span')
firstLetter.classList.add('current')
