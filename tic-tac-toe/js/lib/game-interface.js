/*eslint-disable*/
import Game from './game.js';

const game = new Game();
game.init();

export default function gameInterface() {
  const interfaceSquares = document.querySelectorAll('[data-square]');
  const interfaceConfigs = document.querySelectorAll('[data-config]')

  const handleMove = ({ target: square }) => {
    const position = square.dataset.square;
    game.gameMove(square, position);
  };

  const handleConfig = ({ target }) => {
    const { config } = target.dataset;
    game[config]();
  };

  interfaceSquares.forEach((square) => square.addEventListener('click', handleMove));
  interfaceConfigs.forEach((square) => square.addEventListener('click', handleConfig));
}
