
 let cardProducts = document.querySelectorAll('.card');

 function toggleImage(element, src) {
  element.setAttribute('src', src)
  element.setAttribute('srcset', src)
}

 cardProducts.forEach(card => {
  card.querySelectorAll('input').forEach(input => input.addEventListener('click', (e) => {
    e.preventDefault()
    toggleImage(card.querySelector('.media img'), input.value)
  }))
})

