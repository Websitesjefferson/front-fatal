import { useState } from 'react';
import { Transition } from 'react-transition-group';
import { BiSolidChevronDown, BiSolidChevronUp } from 'react-icons/bi';

import { AiOutlineExclamationCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok } from 'react-icons/bs'
import styles from './styles.module.scss';



export function OptionLogin() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  function Container() {
    return (
      <>
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
      </>
    );
  }
  return (
    <div className={styles.navMenu}>
     <div>
      <button
      onClick={handleToggleMenu}
       className={styles.text} style={{color: '#263238'}}>LOGIN <p><BiSolidChevronDown size={18} color="#263238"/></p></button>
     </div>
      <Transition in={toggleMenu} timeout={1} mountOnEnter unmountOnExit>

        <div className={styles.navMenuWrapper}>
          <Container />
        </div>

      </Transition>
    </div>
  );
}
