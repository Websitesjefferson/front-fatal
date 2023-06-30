
import styles from "./styles.module.scss";
import { ImLocation2 } from "react-icons/im";
import {BiSolidChevronDown} from 'react-icons/bi'
import Logo from '../../assets/Logo.png'
import Image from "next/image";
import React from "react";
import {Menu} from '../menu'
import { Option } from "..//registrationOption";
import { OptionLogin } from "../loginOption";

export function Header() {
  return (
    <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.div}>
          <Menu />
         <Image className={styles.Logo} src={Logo} alt="logo"/>
       </div>
         <div className={styles.containerInput}>
          <span><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" />
        </div>

         <Option />
        

         <OptionLogin />
      </div>
    </header>
    <div className={styles.SearchContainer} >
          <span><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" />
    </div>

    
    </>
  );
}
