export default class Slider {
  constructor(slider) {
    this.slider = document.querySelector(slider);
    this.elements = this.slider.querySelectorAll('[data-slider="item"]');
    this.controls = this.slider.querySelectorAll('[data-control]');
  }

  static sliderTime(element) {
    element.setAttribute('disabled', 'true');
    setTimeout(() => element.removeAttribute('disabled'), 400);
  }

  sliderBackward() {
    this.controls.forEach((control) => this.constructor.sliderTime(control));
    this.elements.forEach((element) => {
      const thisPos = +element.dataset.position;
      const newPos = thisPos - 1 < 0 ? this.elements.length - 1 : thisPos - 1;
      element.dataset.position = newPos;
    });
  }

  sliderForward() {
    this.controls.forEach((control) => this.constructor.sliderTime(control));
    this.elements.forEach((element) => {
      const thisPos = +element.dataset.position;
      const newPos = thisPos + 1 > this.elements.length - 1 ? 0 : thisPos + 1;
      element.dataset.position = newPos;
    });
  }

  sliderBinds() {
    this.sliderBackward = this.sliderBackward.bind(this);
    this.sliderForward = this.sliderForward.bind(this);
  }

  sliderEvents() {
    this.controls[0].addEventListener('click', this.sliderBackward);
    this.controls[1].addEventListener('click', this.sliderForward);
  }

  init() {
    this.sliderBinds();
    this.sliderEvents();

    return this;
  }
}
