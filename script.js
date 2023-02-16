const numberToChange = document.getElementById('numberToChange');
const myImg = document.getElementById('myimg');
myImg.style.filter="blur(0px)";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

let x = 100;
let y;

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  
  const doSomething = async () => {
    for (let i = 0; i <= 100; i++) {
      await sleep(25)
      numberToChange.innerHTML = x + "%";
      numberToChange.style.opacity = x / 100;
    myImg.style.filter = `blur(${y}px)`;
      x--;
      y = x /10;
    }
  }
  
  doSomething()


