  "use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const hiddenImages = document.querySelectorAll(".hidden-img"); // All hidden images

let noCount = 0;
const TOTAL_IMAGES = 5;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  noCount++;
  const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
  changeImage(randomIndex);
  resizeYesButton();
  updateNoButtonText();
});

function handleYesClick() {
  titleElement.innerHTML = "YAYYYY!!! v(=∩_∩=)ﾌ";
  changeImage("yes");
  
  // Show all hidden images at the same time
  hiddenImages.forEach(img => img.classList.remove("hidden"));

  // Manually reposition each image
  const firstImage = document.getElementById("secret-1");
  if (firstImage) {
    firstImage.style.position = "absolute"; // Ensure absolute positioning
    firstImage.style.top = "20%"; // Change this value to reposition it
    firstImage.style.left = "15%"; // Change this value to reposition it
  }

  const secondImage = document.getElementById("secret-2");
  if (secondImage) {
    secondImage.style.position = "absolute"; // Ensure absolute positioning
    secondImage.style.top = "60%"; // Change this value to reposition it
    secondImage.style.left = "80%"; // Change this value to reposition it
  }

  const thirdImage = document.getElementById("secret-3");
  if (thirdImage) {
    thirdImage.style.position = "absolute"; // Ensure absolute positioning
    thirdImage.style.top = "20%"; // Change this value to reposition it
    thirdImage.style.left = "70%"; // Change this value to reposition it
  }

  const fourthImage = document.getElementById("secret-4");
  if (fourthImage) {
    fourthImage.style.position = "absolute"; // Ensure absolute positioning
    fourthImage.style.top = "60%"; // Change this value to reposition it
    fourthImage.style.left = "20%"; // Change this value to reposition it
  }

  // Hide the buttons
  buttonsContainer.classList.add("hidden");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.2;

  yesButton.style.fontSize = `${newFontSize}px`;
}

let lastMessageIndex = null;
function generateMessage(noCount) {
  const messages = [
    "NNOOO",
    "ARE YOU SUREE",
    "STOPPPP",
    "NOOO STOPPP",
    ":(",
    "NOOO :(",
    "DONT PRESS",
    "NO STOPP",
    "BAD >:(",
  ];

  let messageIndex;
  do {
    messageIndex = Math.floor(Math.random() * messages.length);
  } while (messageIndex === lastMessageIndex);

  lastMessageIndex = messageIndex;
  return messages[messageIndex];
}

function changeImage(imageIndex) {
  catImg.src = `img/t${imageIndex}.gif`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

// Popup Image Logic
let lastPopupIndex = null;
const popupImg = document.querySelector(".popup-img");
const TOTAL_POPUP_IMAGES = 8;

noButton.addEventListener("click", function () {
  noCount++;
  const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
  changeImage(randomIndex);
  resizeYesButton();
  updateNoButtonText();
  showPopupImage();
});

function showPopupImage() {
  let randomPopupIndex;
  do {
    randomPopupIndex = Math.floor(Math.random() * TOTAL_POPUP_IMAGES) + 1;
  } while (randomPopupIndex === lastPopupIndex);

  lastPopupIndex = randomPopupIndex;
  popupImg.src = `img/popup-${randomPopupIndex}.jpg`;
  popupImg.classList.remove("hidden");
  setTimeout(() => {
    popupImg.classList.add("hidden");
  }, 250);
}
