const timeNodes = [...document.querySelectorAll('[data-time]')];

const totalSeconds = timeNodes 
.map((node) => node.dataset.time)
.map((timeCode) => {
  const [mins, secs] = timeCode.split(':').map(parseFloat);
  return mins * 60 + secs;
})
.reduce((total, second) => total + second);


let seconds = totalSeconds;

const hours = Math.floor(seconds / 3600);
seconds %= 3600;


const mins = Math.floor(seconds / 60);
seconds %= 60;

console.log(hours, mins, seconds)


