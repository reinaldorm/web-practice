export default class Game {
  constructor() {
    this.gameSquares = document.querySelectorAll('[data-square]');
    this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    this.gameSymbols = ['Cross', 'Circle'];
    this.gamePlayer = 0;
    this.gameConfig = {
      symbol: '',
      chances: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
      ],
    };
  }

  gameTurn() {
    this.gameConfig.symbol = this.gameSymbols[this.gamePlayer];
    this.gamePlayer = this.gamePlayer === 0 ? 1 : 0;
  }

  gameCreate(square) {
    const symbolElement = document.createElement('div');
    symbolElement.classList.add(this.gameConfig.symbol);
    square.appendChild(symbolElement);
  }

  gameMove(square, position) {
    if (this.gameBoard[position] === '') {
      this.gameTurn();
      this.gameBoard[position] = this.gameConfig.symbol;
      this.gameCreate(square);
      this.gameCheck();
    }
  }

  gameCheck() {
    const drawCheck = this.gameBoard.every((pos) => pos !== '');
    const winCheck = (chance) => {
      const win = chance.every((pos) => this.gameBoard[pos] === this.gameConfig.symbol);
      return win;
    };
    this.gameWinner = this.gameConfig.chances.filter((chance) => winCheck(chance));
    if (this.gameWinner.length) this.gameOver(`The ${(this.gameConfig.symbol)} wins the match!`);
    else if (drawCheck) this.gameOver('Draw!');
  }

  gameResetSquares() {
    const handleStart = () => {
      this.gameSquares.forEach((square) => square.classList.remove('game-restarting'));
      this.gameSquares.forEach((square) => square.classList.remove('game-disabled'));
    };

    const handleReset = () => {
      this.gameSquares.forEach((square) => square.classList.remove('game-winning'));
      this.gameSquares.forEach((square) => square.classList.add('game-restarting'));
    };

    const handleDisable = () => {
      this.gameSquares.forEach((square) => square.classList.add('game-disabled'));
    };

    const handleRemove = () => this.gameSquares.forEach((square) => {
      if (square.children.length) square.children[0].remove();
    });

    setTimeout(handleStart, 6000);
    setTimeout(handleRemove, 4000);
    setTimeout(handleReset, 2000);
    handleDisable();
  }

  gameRestart() {
    this.gameBoard = ['', '', '', '', '', '', '', '', ''];
    this.gamePlayer = 0;
    this.gameResetSquares();
    this.constructor.gamePop('Restarting game!');
  }

  gameOver(message) {
    this.constructor.gamePop(message);
    this.gameRestart();

    if (this.gameWinner.length) this.gameWinner[0].forEach((square) => this.gameSquares[square].classList.add('game-winning'));
  }

  static gamePop(message) {
    const gamePopUp = document.querySelector('[data-pop]');
    const gameMessage = message || 'The match begins!';
    const gamePop = document.createElement('div');
    gamePop.classList.add('game-pop');
    gamePop.innerText = gameMessage;
    gamePopUp.appendChild(gamePop);

    const handlePopRemove = () => gamePop.remove();
    setTimeout(handlePopRemove, 4000);
  }

  init() {
    this.constructor.gamePop();

    return this;
  }
}
