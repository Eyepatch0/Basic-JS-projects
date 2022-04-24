function random(number) {
    return Math.floor(Math.random() * number);
}
//to generate random value in the range 0 - number
const btn=document.querySelector('.normal');
const btn1=document.querySelector('.twist')
const canvas=document.querySelector('canvas');
const ctx=canvas.getContext('2d');
//const body=document.querySelector('body');
let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;
//setting the height and width of the canvas to occupy full screen
function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT); //to remove any previously drawn figures
    for (let i = 0; i < 100; i++) {
      ctx.beginPath(); 
      ctx.fillStyle = 'rgba(255,0,0,0.5)';
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI); // co-ordinates, radius   
      ctx.fill();
    }
  }
function draw1(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    for (let i = 0; i < 100; i++) {
      ctx.beginPath();
      const rac = 'rgba('+random(255)+','+random(255)+','+random(255)+','+0.5+')';
      ctx.fillStyle = rac  //generating random color using random function 
      // alternate method using hexadecimal using .toString to convert into hexadecimal number. - "#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
      ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
      ctx.fill();
    }
  }
btn1.addEventListener('click', draw1)
btn.addEventListener('click',draw);
