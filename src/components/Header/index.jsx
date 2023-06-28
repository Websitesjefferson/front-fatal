import { useContext, useState } from "react";
import styles from "./styles.module.scss";


import { ImLocation2 } from "react-icons/im";
import {BiSolidChevronDown} from 'react-icons/bi'
import Logo from '../../assets/Logo.png'

import Image from "next/image";
import React from "react";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.div}>
         <Image className={styles.Logo} src={Logo} alt="logo"/>
       </div>
         <div className={styles.containerInput}>
          <span><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" />
        </div>

         <button className={styles.text} style={{color: '#e25352'}}>CADASTRE-SE GRÁTIS <p><BiSolidChevronDown size={18} color="#e25352"/></p></button>

         <button className={styles.text} style={{color: '#263238'}}>LOGIN <p><BiSolidChevronDown size={18} color="#263238"/></p></button>
      </div>
    </header>
    <div className={styles.SearchContainer} >
          <span><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" />
    </div>

     
    </>
  );
}
