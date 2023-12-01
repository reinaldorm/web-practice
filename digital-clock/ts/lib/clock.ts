const hourLeft = document.querySelector('.time-line.hourLeft') as HTMLDivElement;
const hourRight = document.querySelector('.time-line.hourRight') as HTMLDivElement;
const minuteLeft = document.querySelector('.time-line.minuteLeft') as HTMLDivElement;
const minuteRight = document.querySelector('.time-line.minuteRight') as HTMLDivElement;
const secondLeft = document.querySelector('.time-line.secondLeft') as HTMLDivElement;
const secondRight = document.querySelector('.time-line.secondRight') as HTMLDivElement;

const updateLine = (line: HTMLDivElement, index: number) => {
  const numbers = [...line.children];
  numbers.forEach((el) => el.classList.remove('active'));

  const number = line.children[index] as HTMLElement;
  line.style.translate = `0px -${number.offsetTop}px 0px`;
  number.classList.add('active');
};

export const updateClock = () => {
  const time = new Date().toTimeString();

  updateLine(hourLeft, Number(time.charAt(0)));
  updateLine(hourRight, Number(time.charAt(1)));
  updateLine(minuteLeft, Number(time.charAt(3)));
  updateLine(minuteRight, Number(time.charAt(4)));
  updateLine(secondLeft, Number(time.charAt(6)));
  updateLine(secondRight, Number(time.charAt(7)));
};
