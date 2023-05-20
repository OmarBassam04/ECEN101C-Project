const cars = document.querySelectorAll('.car');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
let intervalId;

// set initial car positions
cars.forEach((car, index) => {
  car.style.left = `${index * 50}px`;
});

// define function to move cars in series
function moveCars() {
  cars.forEach((car, index) => {
    // move each car to the position of the previous car
    if (index > 0) {
      car.style.left = `${parseInt(cars[index - 1].style.left) + 50}px`;
    }
  });
}

startButton.addEventListener('click', () => {
  // start the animation
  intervalId = setInterval(moveCars, 1000);
});

stopButton.addEventListener('click', () => {
  // stop the animation
  clearInterval(intervalId);
});