const steve = document.querySelector('[data-steve]');
const animate = document.querySelectorAll('[data-animation]');
const { body } = document;
let rotateX = 0;
let rotateY = 0;
let resetTime;

const state = {
  rotating: 'rotating',
  restating: 'restarting',
  moving: 'moving',
};

const animations = {
  walking: 'walking',
  waving: 'waving',
  moving: 'moving',
  negating: 'negating',
  accepting: 'accepting',
};

const onRotate = ({ movementX, movementY }) => {
  rotateX += movementX / 6;
  rotateY += -movementY / 6;

  steve.style.transform = `rotateY(${rotateX}deg) rotateX(${rotateY}deg)`;
};

const initRotate = () => {
  steve.classList.remove(state.restating);
  clearTimeout(resetTime);

  body.addEventListener('mousemove', onRotate);
  body.classList.add(state.rotating);
};

const stopRotate = () => {
  body.removeEventListener('mousemove', onRotate);
  body.classList.remove(state.rotating);
};

const resetRotate = () => {
  rotateX = 0;
  rotateY = 0;

  steve.classList.add(state.restating);
  resetTime = setTimeout(() => {
    steve.classList.remove(state.restating);
  }, 3000);

  steve.style.transform = 'rotateY(0deg) rotateX(0deg)';
};

// const onMove = ({
//   pageX, pageY, movementX, movementY,
// }) => {
//   const parentWidth = body.offsetWidth / 2;
//   const parentHeight = body.offsetHeight / 2;
//   const posX = (pageX) - parentWidth;
//   const posY = (pageY) - parentHeight;

//   steve.style.left = `${posX}px`;
//   steve.style.top = `${posY}px`;
//   steve.style.transform = `
//     rotateX(${-movementY * 2}deg) rotateY(${movementX * 2}deg)  rotateZ(${movementX}deg)
//   `;
// };

// const initMove = () => {
//   body.addEventListener('mousemove', onMove);
//   body.classList.add(state.moving);
//   steve.classList.add(state.moving);
// };

// const stopMove = () => {
//   body.removeEventListener('mousemove', onMove);
//   body.classList.remove(state.moving);
//   steve.classList.remove(state.moving);
// };

// body.addEventListener('mousedown', initMove);
// body.addEventListener('mouseup', stopMove);

animate.forEach((e) => e.addEventListener('click', initAnimation));
body.addEventListener('mousedown', initRotate);
body.addEventListener('mouseup', stopRotate);
body.addEventListener('mouseleave', resetRotate);
