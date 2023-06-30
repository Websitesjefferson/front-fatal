import React, { useState, useRef, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';
import styles from './styles.module.scss';

export function OptionLogin() {
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
              LOGIN
              <p><BiSolidChevronUp size={18} color="#263238" /></p>
            </button>
          </li>
          <li><a href=""> Entrar como cliente</a></li>
          <li><a href=""> Entrar como anunciante</a></li>
        </ul>
      </div>
    );
  }

  return (
    <div className={styles.navMenu}>
      <div>
        <button onClick={handleToggleMenu} className={styles.text} style={{ color: '#263238' }}>
          LOGIN <p><BiSolidChevronDown size={18} color="#263238" /></p>
        </button>
      </div>
      <Transition in={toggleMenu} timeout={0} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={`${styles.navMenuWrapper} ${state}`} ref={menuRef}>
            <Container />
          </div>
        )}
      </Transition>
    </div>
  );
}
