import React from 'react';
import HeaderNav from './HeaderNav';
import { usePlayer } from '../../context/player/context';

import styles from './styles/header.module.scss';

const Header = () => {
  const compRef = React.useRef<HTMLDivElement | null>(null);
  const { resetPlayer } = usePlayer();

  function handleResetPlayer() {
    const result = confirm('Deseja reiniciar seu progresso?');
    if (!result) return;

    resetPlayer();
  }

  return (
    <header
      ref={compRef}
      className={styles.header}>
      <button
        onClick={handleResetPlayer}
        className={styles.headerLogo + ' headerLogo'}>
        <svg
          width="59"
          height="60"
          viewBox="0 0 59 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25.6193 47.5V13.9H41.7953C44.9313 13.9 47.6353 14.412 49.9073 15.436C52.2113 16.46 53.9873 17.932 55.2353 19.852C56.4833 21.74 57.1073 23.98 57.1073 26.572C57.1073 29.164 56.4833 31.404 55.2353 33.292C53.9873 35.18 52.2113 36.652 49.9073 37.708C47.6353 38.732 44.9313 39.244 41.7953 39.244H31.9073L36.9473 34.396V47.5H25.6193ZM36.9473 35.644L31.9073 30.508H41.0753C42.6433 30.508 43.7953 30.156 44.5313 29.452C45.2993 28.748 45.6833 27.788 45.6833 26.572C45.6833 25.356 45.2993 24.396 44.5313 23.692C43.7953 22.988 42.6433 22.636 41.0753 22.636H31.9073L36.9473 17.5V35.644Z"
            fill="#FFF200"
          />
          <path
            d="M0.732699 47.5L15.7087 26.572L15.6607 34.492L1.1647 13.9H13.8847L22.3327 26.38L16.9087 26.428L25.1647 13.9H37.3567L22.8607 34.06V26.188L38.0767 47.5H25.1167L16.6687 34.444L21.9007 34.396L13.6447 47.5H0.732699Z"
            fill="#8F43EE"
          />
        </svg>
      </button>
      <HeaderNav />
    </header>
  );
};

export default Header;
