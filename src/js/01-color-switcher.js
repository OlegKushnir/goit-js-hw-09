const stopButton = document.querySelector('[data-stop]');
const btn = document.querySelectorAll('button');
stopButton.setAttribute('disabled', 'true');
let intId = null;

document.addEventListener('click', onClick);

function onClick(evt) {
 
  if (evt.target.hasAttribute('data-start')) {
    onStart();
  }
  if (evt.target.hasAttribute('data-stop')) {
    onStop();
  }
  setButtonDisabled(evt.target);
}

function onStart() {
  intId = setInterval(addBg, 1000);
}

function onStop() {
  clearInterval(intId);
}

function addBg() {
  return (document.body.style.backgroundColor = getRandomHexColor());
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setButtonDisabled() {
  btn.forEach(element => {
    if (element.hasAttribute('disabled')) {
      element.removeAttribute('disabled');
      return;
    }
    element.setAttribute('disabled', 'true');
  });
}
