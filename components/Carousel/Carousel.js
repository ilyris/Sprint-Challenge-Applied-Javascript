/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

function Carousel() {
  const sliderContainer = document.createElement("div");
  const leftButton = document.createElement("div");
  const mountainsImage = document.createElement("img");
  const computerImage = document.createElement("img");
  const treesImage = document.createElement("img");
  const turntableImage = document.createElement("img");
  const rightButton = document.createElement("div");

  sliderContainer.appendChild(leftButton);
  sliderContainer.appendChild(mountainsImage);
  sliderContainer.appendChild(computerImage);
  sliderContainer.appendChild(treesImage);
  sliderContainer.appendChild(turntableImage);
  sliderContainer.appendChild(rightButton);

  sliderContainer.classList.add("carousel");
  leftButton.classList.add("left-button"); 
  rightButton.classList.add("right-button");

  mountainsImage.src= "./assets/carousel/mountains.jpeg";
  computerImage.src= "./assets/carousel/computer.jpeg";
  treesImage.src= "./assets/carousel/trees.jpeg";
  turntableImage.src= "./assets/carousel/turntable.jpeg";

  leftButton.textContent="<";
  rightButton.textContent=">";

  return sliderContainer;
}
carouselContainer.appendChild(Carousel());



// Create slider from W3Schools.
// I'm a master of Copy and Work!

// First index number.
var slideIndex = 1;

showSlides(slideIndex);
fireEventListeners();
// Next/previous controls

function showSlides(integer) {
  const sliderImages = document.querySelectorAll(".carousel img");

  if (integer > sliderImages.length) slideIndex = 1;
  if (integer < 1) slideIndex = sliderImages.length;

  sliderImages[slideIndex - 1].style.display = "block";
}
function plusSlides(integer) {
  console.log('I ran');
  showSlides(slideIndex += integer);
  console.log(slideIndex);
}
function fireEventListeners() {
  const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
leftButton.addEventListener("click", () => plusSlides(-1));
rightButton.addEventListener("click", () => plusSlides(1));
}

