export default class Select {
  constructor(select) {
    this.select = document.querySelector(select);
    this.elementRef = this.select.dataset.select;
    this.element = document.querySelector(`[data-slider="${this.elementRef}"]`);
    this.selectHandler = this.selectHandler.bind(this);
  }

  selectHandler() {
    const oldElements = document.querySelectorAll('body *');
    oldElements.forEach((element) => {
      if (element.className) element.classList.remove('on');
    });

    oldElements.forEach((element) => element.classList.remove('on'));
    this.select.classList.add('on');
    this.element.classList.add('on');
  }

  selectEvents() {
    this.select.addEventListener('click', this.selectHandler);
  }

  init() {
    this.selectEvents();
    console.log(this.element);

    return this;
  }
}
