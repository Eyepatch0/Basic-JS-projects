const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  //   to get browser date
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  const minuteDegrees = (minutes / 60) * 360 + 90;
  const secondDegrees = (seconds / 60) * 360 + 90;
  // converting seconds to degrees and adding 90 to counter offset of 90 degrees
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
