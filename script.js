const numberToChange = document.getElementById('numberToChange');
const myImg = document.getElementById('myimg');
myImg.style.filter="blur(0px)";

let x = 100;
let y;

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
  
  const doSomething = async () => {
    for (let i = 0; i <= 100; i++) {
      await sleep(15)
      numberToChange.innerHTML = x + "%";
    myImg.style.filter = `blur(${y}px)`;
      x--;
      y = x /10;
    }
  }
  
  doSomething()


