import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const delay = document.querySelector('input[name="delay"]');
const promiseStateSelector = document.querySelectorAll('input[name="state"]');

console.log(form);

function getPromiseState(promiseStateSelector) {
  for (let i = 0; i < promiseStateSelector.length; i++) {
    if (promiseStateSelector[i].checked) {
      // return promiseStateSelector[i].value;
    }
  }
}

function createPromise(delay, promiseStatus) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  getPromiseState(promiseStateSelector);
  // console.log(promiseState);
  // if (promiseState) {
  //   createPromise(delay.value, promiseState.value);
  // }
});
