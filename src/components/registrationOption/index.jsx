import { useState } from 'react';
import { Transition } from 'react-transition-group';
import { BiSolidChevronDown, BiSolidChevronUp} from 'react-icons/bi';

import { AiOutlineExclamationCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok } from 'react-icons/bs'
import styles from './styles.module.scss';



export function Option() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
function Container() {
  return (
    <>
      <div className={styles.containerLinks}>
           <ul>
              <li><button onClick={handleToggleMenu}> CADASTRE-SE GRÁTIS <p><BiSolidChevronUp size={18} color="#e25352"/></p></button></li>
              <li><a href=""> Quero ser cliente</a></li>
              <li><a href=""> Quero anunciar</a></li>
           </ul>
      </div>
 </>
  );
}
  return (
    <div className={styles.navMenu}>
     
        <button
         onClick={handleToggleMenu}
         className={styles.text} style={{color: '#e25352'}}> CADASTRE-SE GRÁTIS <p><BiSolidChevronDown size={18} color="#e25352"/></p></button>
      
      <Transition in={toggleMenu} timeout={1} mountOnEnter unmountOnExit>
       
          <div className={styles.navMenuWrapper}>
            <Container />
          </div>
       
      </Transition>
    </div>
  );
}
