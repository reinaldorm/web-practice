export default class Effect {
  constructor(word) {
    this.words = [...document.querySelector(word).innerText.toUpperCase().split('')];
    this.word = document.querySelector(word);
    this.ms = 0;
  }

  effectEvents(element) {
    this.word.addEventListener('mouseover', () => {
      this.ms = 0;
      element.classList.add('on');
      [...element.children].forEach((e) => {
        e.style.transitionDelay = `${this.ms}s`;
        this.ms += 0.10;
      });
    });
    this.word.addEventListener('mouseleave', () => {
      this.ms = 0;
      element.classList.remove('on');
      [...element.children].forEach((e) => {
        e.style.transitionDelay = `${this.ms}s`;
      });
    });
  }

  effectCreate() {
    this.wordWrapper = document.createElement('div');
    this.wordWrapper.classList.add('effect-wrapper');

    const newWords = this.words.map((e) => {
      const newWord = document.createElement('div');
      newWord.classList.add('effect-word');
      newWord.innerText = e;
      return newWord;
    });

    newWords.forEach((e) => {
      this.wordWrapper.appendChild(e);
    });

    this.effectEvents(this.wordWrapper);

    return this.wordWrapper;
  }

  init() {
    return this.effectCreate();
  }
}
