//get all elemennts
images = document.querySelectorAll("picture");
textBlocks = document.querySelectorAll(".change-text");
const rightButton = document.querySelector(".right");
const leftButton = document.querySelector(".left");
const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const exx = document.querySelector(".cross");
let identifier = 0;
displayContent(identifier);
buttonPress();

function buttonPress() {
  rightButton.addEventListener("click", () => {
    identifier++;
    if (identifier > 2) {
      identifier = 0;
    }

    displayContent(identifier);
  });

  leftButton.addEventListener("click", () => {
    identifier--;
    if (identifier < 0) {
      identifier = 2;
    }
    displayContent(identifier);
  });
}
function displayContent(identifier) {
  // display of images
  images.forEach((image) => {
    image.style.display = "none";
    image.classList.remove("active");
  });
  images[identifier].style.display = "block";
  images[identifier].classList.add("active");

  //   display for text blocks
  textBlocks.forEach((textBlock) => {
    textBlock.classList.add("hidden");
    textBlock.classList.remove("text-active");
  });
  textBlocks[identifier].classList.add("text-active");
}

//when burger press
//toggle navabr class
burger.addEventListener("click", () => {
  burger.style.display = "none";
  navbar.classList.add("navbar-active");
});

exx.addEventListener("click", () => {
  burger.style.display = "block";
  navbar.classList.remove("navbar-active");
});
