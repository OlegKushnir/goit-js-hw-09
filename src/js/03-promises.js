import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnRef = document.querySelector('.js-promise-btn');
const formRef = document.querySelector('.form');

btnRef.addEventListener('click', onCreatePromise);

function onCreatePromise(evt) {
evt.preventDefault();
const formData = new FormData(formRef);
const delay = formData.get("delay");
const step = formData.get("step");
const amount = formData.get("amount");
let count = 0;
setTimeout(()=>{
  intervalId = setInterval((position, delay)=>{
  
    if (count < amount)
    {
      count += 1;
      createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
  
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      return;
    }
    clearInterval(intervalId);
  
  },step)
}

, delay)


}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject)=> {
    if (shouldResolve) {
      resolve({position, delay});
      // Fulfill
    } else {
      reject({position, delay});
      // Reject
    }
  })
  
}

