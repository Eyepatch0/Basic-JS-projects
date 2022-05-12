window.addEventListener("keydown", function (e) {
  console.log(e.key);
  const audio = document.querySelector(`audio[data-key=${e.key}]`); //selecting the audio element of the key pressed using template and event object.
  const key = document.querySelector(`.keys[data-key=${e.key}]`); //selecting the key

  audio.currentTime = 0; //rewind to start
  audio.play(); //if it is already playing it wont play again until its complete so we set audio.currentTime to 0 so it can play the sound from the beginning
  key.classList.toggle("play");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return; //skipping if not transformed
  }
  this.classList.remove("play"); //if it has been transformed remove the play class style from it
}

const keys = document.querySelectorAll(".keys");//selecting all keys.
keys.forEach((key) => key.addEventListener("transitionend", removeTransition)); //looping through all keys and adding an eventlistener which checkd if they have transformed and removes the play style if they have been transformed.
