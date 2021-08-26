const cardBlock = document.querySelector('.card-block')
const regenerateBtn = document.querySelector('#regenerate')
const cardNum = document.querySelectorAll('.card-num')

const cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

regenerateBtn.addEventListener('click', function () {
  let randomNumber = getRandomInt(4)
  let randomCardNumber = getRandomInt(13)

  cardNum.forEach(card => {
    card.innerHTML = cardNumbers[randomCardNumber]
  })

  switch (randomNumber) {
    case 0:
      cardBlock.classList.add('apple')
      cardBlock.classList.remove('banana')
      cardBlock.classList.remove('raspberry')
      cardBlock.classList.remove('grape')
      break
    case 1:
      cardBlock.classList.remove('apple')
      cardBlock.classList.add('banana')
      cardBlock.classList.remove('raspberry')
      cardBlock.classList.remove('grape')
      break
    case 2:
      cardBlock.classList.remove('apple')
      cardBlock.classList.remove('banana')
      cardBlock.classList.add('raspberry')
      cardBlock.classList.remove('grape')
      break
    case 3:
      cardBlock.classList.remove('apple')
      cardBlock.classList.remove('banana')
      cardBlock.classList.remove('raspberry')
      cardBlock.classList.add('grape')
      break
  }
})