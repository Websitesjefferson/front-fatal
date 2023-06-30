import React, { useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';
import styles from './styles.module.scss';

export function Option() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideMenu);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, []);

  function Container() {
    return (
      <div className={styles.containerLinks}>
        <ul>
          <li>
            <button onClick={handleToggleMenu}>
              CADASTRE-SE GRÁTIS <p><BiSolidChevronUp size={18} color="#e25352" /></p>
            </button>
          </li>
          <li><a href=""> Quero ser cliente</a></li>
          <li><a href=""> Quero anunciar</a></li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.navMenu}>
      <button onClick={handleToggleMenu} className={styles.text} style={{ color: '#e25352' }}>
        CADASTRE-SE GRÁTIS <p><BiSolidChevronDown size={18} color="#e25352" /></p>
      </button>

      <Transition in={toggleMenu} timeout={1} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={`${styles.navMenuWrapper} ${state}`} ref={menuRef}>
            <Container />
          </div>
        )}
      </Transition>
    </div>
  );
}
