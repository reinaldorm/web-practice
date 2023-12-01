export default class Slider {
  constructor(mainSlider, slider, $class, control) {
    this.mainSlider = document.querySelector(mainSlider);
    this.slider = [...document.querySelectorAll(slider)];
    this.control = document.querySelector(control);
    this.class = $class;
    this.config = {
      isPaused: false,
      progress: 0,
      on: 0,
    };
  }

  createProgress() {
    this.progressWrapper = document.querySelector('[data-progressWrapper]');

    this.progressCont = this.slider.map(() => {
      const element = document.createElement('div');
      element.classList.add('progressCont');
      return element;
    });

    this.progressElement = this.progressCont.map(() => {
      const element = document.createElement('div');
      element.classList.add('progress');
      element.dataset.progress = 'progress';
      return element;
    });

    this.progressElement.forEach((e, index) => {
      this.progressCont[index].appendChild(e);
    });

    this.progressCont.forEach((e) => {
      this.progressWrapper.appendChild(e);
    });
  }

  handleSlide() {
    this.config.progress = 0;
    this.config.on += 1;
    this.config.on = this.config.on >= this.slider.length ? 0 : this.config.on;

    this.slider.forEach((e) => e.classList.remove(this.class));
    this.slider[this.config.on].classList.add(this.class);
    this.handleProgress();
  }

  handleProgress() {
    this.sliderProgress = this.progressWrapper.querySelectorAll('[data-progress]')[this.config.on];
    this.sliderTimer = setInterval(() => {
      this.config.progress += 1;

      if (this.config.progress > 100) {
        clearInterval(this.sliderTimer);
        this.handleSlide();
      } else this.sliderProgress.style.width = `${this.config.progress}%`;
    }, 25);
  }

  handleMove({ layerX: X, layerY: Y }) {
    const halfX = this.mainSlider.clientWidth / 2;
    const halfY = this.mainSlider.clientHeight / 6;
    if (X < halfX && Y > halfY) this.Move(-1, 0);
    if (X > halfX && Y > halfY) this.Move(1, 100);
  }

  Move(number, fill) {
    clearInterval(this.sliderTimer);
    this.sliderProgress.style.width = `${fill}%`;
    this.config.progress = 0;
    this.config.on += number;

    if (this.config.on >= this.slider.length) {
      this.config.on = 0;
      this.Reset();
    }

    this.config.on = this.config.on < 0 ? 0 : this.config.on;

    this.slider.forEach((e) => e.classList.remove(this.class));
    this.slider[this.config.on].classList.add(this.class);

    if (this.config.isPaused) {
      this.handleResume();
    } else this.handleProgress();
  }

  handlePause() {
    clearInterval(this.sliderTimer);
    this.control.setAttribute('src', './img/icons/icon-resume.svg');
    this.control.removeEventListener('click', this.handlePause);
    this.control.addEventListener('click', this.handleResume);
    this.config.isPaused = true;
  }

  handleResume() {
    this.handleProgress();
    this.control.setAttribute('src', './img/icons/icon-pause.svg');
    this.control.addEventListener('click', this.handlePause);
    this.control.removeEventListener('click', this.handleResume);
    this.config.isPaused = false;
  }

  handleFirst() {
    this.slider[this.config.on].classList.add(this.class);
  }

  Reset() {
    const sliderReset = this.progressWrapper.querySelectorAll('[data-progress]');

    sliderReset.forEach((e) => { e.style.width = '0%'; });
  }

  bindMeth() {
    this.handlePause = this.handlePause.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  addEvent() {
    this.control.addEventListener('click', this.handlePause);
    this.mainSlider.addEventListener('click', this.handleMove);
  }

  init() {
    this.bindMeth();
    this.addEvent();
    this.handleFirst();
    this.createProgress();
    this.handleProgress();

    return this;
  }
}
