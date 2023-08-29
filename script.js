const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    console.log(cardOne, cardTwo);
  }

  let cardOneImg = cardOne.querySelector('img').src;
  let cardTwoImg = cardTwo.querySelector('img').src;
  
}

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
