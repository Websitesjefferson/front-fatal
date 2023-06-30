import { useState } from "react";
import styles from "./styles.module.scss";

import { ImLocation2 } from "react-icons/im";
import {AiOutlineArrowLeft, AiOutlineAim, AiFillMessage} from 'react-icons/ai'
import {FiX} from 'react-icons/fi'
import Logo from '../../assets/Logo.png'

import Image from "next/image";
import React from "react";
import Modal from 'react-modal';
import {Menu} from '../menu'
import { Option } from "..//registrationOption";
import { OptionLogin } from "../loginOption";

export function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const customModalStyles = {
    content: {
      width: '60%'
      , // Defina a largura desejada do Modal
      height: '380px', // Defina a altura desejada do Modal
      margin: 'auto', // Centralize o Modal horizontalmente
      background: '#fff', // Defina a cor de fundo do Modal
      borderRadius: 10
    },
    overlay: {
      background: 'rgba(0, 0, 0, 0.5)', // Defina a cor de fundo do overlay (fundo do Modal)
    },
  };
  return (
    <>
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.div}>
          <Menu />
         <Image className={styles.Logo} src={Logo} alt="logo"/>
       </div>
         <div className={styles.containerInput}>
          <span className={styles.location}><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" onClick={handleOpenModal} />
        </div>

         <Option />
        

         <OptionLogin />
      </div>
    </header>
    <div className={styles.SearchContainer} >
          <span><ImLocation2 color="#5d7a89"  size={20}/> </span> 
          <input type="text" placeholder="Selecionar cidade" />
    </div>

    <Modal 
    isOpen={isModalOpen} 
    onRequestClose={handleCloseModal} 
    style={customModalStyles}
    
    >
      <div className={styles.modal}>
        <div>
        <span onClick={handleCloseModal}><AiOutlineArrowLeft size={25}/></span>
        <span>SELECIONAR <strong>CIDADE</strong></span>
        </div>
        <button onClick={handleCloseModal}><FiX size={25}/></button>
       </div> 
       
       <div className={styles.modalInput}>
          <span><ImLocation2 color="#5d7a89"  size={25}/> </span>
          <input type="text" placeholder="Ex: São Paulo - SP" />
          
       </div>

       <div className={styles.modalLocation}>
          <button>Usa minha localização</button>
          <span><AiOutlineAim size={25} color="#5d7a89"/></span>
       </div>

        <div className={styles.modalFooter}>
          <span><AiFillMessage size={20}/></span>
         <span><a href="">Atendimento virtual</a></span>
        </div>
      </Modal>
    
   
    </>
  );
}
