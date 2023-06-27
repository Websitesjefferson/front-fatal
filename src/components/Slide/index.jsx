import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.scss";
import {AiOutlineStar, AiOutlineThunderbolt} from 'react-icons/ai'
import {MdSecurity} from 'react-icons/md'



const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: (index) => {
      const dotStyles = `${styles.customDot} ${index === currentSlide ? styles.activeDot : ''}`;
      return <div className={dotStyles}></div>;
    },
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <div className={styles.container}>
    <Slider {...settings}>
      <div className={styles.card}>
        <div>
          <span><MdSecurity  size={30}/></span>
        <h2> Segurança</h2>
        </div>
         <p>
         Não entramos em contato por nenhum meio de comunicação. Sua privacidade
         será sempre preservada.
       </p>
      </div>
      <div className={styles.card}>
        <div>
          <span><AiOutlineThunderbolt  size={30}/></span>
        <h2> Rápido</h2>
        </div>
         <p>
         
      Cadastre-se de forma rápida e simplificada, sem burocracias.
   
       </p>
      </div>
      <div className={styles.card}>
        <div>
        <span><AiOutlineStar  size={30}/></span>
        <h2 >Conteúdo exclusivo</h2>
        </div>
        <p >
      Conteúdos únicos apenas para perfis cadastrados no Fatal Model!
    </p>
      </div>
    </Slider>
   </div>
  );
};

export default SliderComponent;
