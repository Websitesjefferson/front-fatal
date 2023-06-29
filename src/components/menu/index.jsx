import { useState } from 'react';
import { Transition } from 'react-transition-group';
import { RiCloseLine, } from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi'
import { BiSolidChevronDown, BiMenuAltLeft,BiSolidUser } from 'react-icons/bi';

import { AiOutlineExclamationCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok } from 'react-icons/bs'
import styles from './styles.module.scss';

function Container() {
  return (
    <>
      <div className={styles.containerLinks}>
        <div>
        <button className={styles.textMenu} style={{ color: '#e25352' }}>
          <span><BiSolidUser size={22}/></span>
          CADASTRE-SE GRÁTIS 
        </button>
        <p><BiSolidChevronDown size={22} color="#e25352" /></p>
        </div>
        <div>
        <button className={styles.textMenu} style={{ color: '#263238' }}>
          <span><FiLogOut size={22}/></span>
          LOGIN 
        </button>
        <p><BiSolidChevronDown size={22} color="#263238" /></p>
        </div>
      </div>
    
      <div className={styles.footer}>
        <h3>SIGA O <span style={{color: '#e25352'}}><strong>Fatal</strong>model</span></h3>

        <ul>
                        <a href=""><AiFillYoutube color="#000" size={27} /></a>
                        <a href=""><AiFillInstagram color="#000" size={27} /></a>
                        <a href=""><AiFillFacebook color="#000" size={25} /></a>
                        <a href=""><AiFillTwitterCircle color="#000" size={25} /></a>
                        <a href=""><BsSpotify color="#000" size={25} /></a>
                        <a href=""><BsTelegram color="#000" size={25} /></a>
                        <a href=""><BsTiktok color="#000" size={25} /></a>
                    </ul>
      </div>
 </>
  );
}

export function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.navMenu}>
      {toggleMenu ? (
        <RiCloseLine
          color="#263238"
          size={50}
          onClick={handleToggleMenu}
        />
      ) : (
        <BiMenuAltLeft
          color="#263238"
          size={50}
          onClick={handleToggleMenu}
        />
      )}
      <Transition in={toggleMenu} timeout={300} mountOnEnter unmountOnExit>
        {state => (
          <div
            className={styles.navMenuWrapper}
            style={{
              transform: state === 'entered' ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 300ms ease-in-out'
            }}
          >
            <Container />
          </div>
        )}
      </Transition>
    </div>
  );
}
