const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let isDeckDisabled = false;
let matchCount = 0;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne && !isDeckDisabled) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    isDeckDisabled = true;
    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    checkCard(cardOneImg, cardTwoImg);
  }
}

function checkCard(img1, img2) {
  if (img1 === img2) {
    matchCount++;
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    if (matchCount === 8) {
      setTimeout(()=>{
        return shuffleCard();
      }, 1000);
    }
    return (isDeckDisabled = false);
  }

  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    isDeckDisabled = false;
  }, 1200);
}

function shuffleCard() {
  matchCount = 0;
  isDeckDisabled = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
