import styles from "../styles/Home.module.scss";
import { Captcha } from "@/components/captcha";

import {Header} from '../components/Header'
import  SliderComponent  from "../components/Slide";
import { Section } from "../components/Section";

import Logo from '../assets/Logo.png'

import Image from "next/image";

export default function Home() {
  return (
    <>
     <Header />

     <div className={styles.container}>
        
        <div className={styles.form}></div>
        


        <form action="">
          <h1>Faça seu login</h1>
          <input type="text" placeholder='Digite seu e-mail' />

          <input type="text" placeholder='Digite sua senha' />
        </form>

          <a className={styles.link} href="#">Esqueci minha senha</a>


          <div className={styles.check}>
          
           <div>
           <input type="checkbox" />
           <p>Mantenha-me conectado</p>
           </div>
           <Captcha />
           
           </div>
           <button className={styles.button}>Entrar</button>

           <p className={styles.p}>Quero me cadastrar</p>


         <SliderComponent />

           <hr style={{ margin: "100px 0px 80px 0" }}/>
           
          <Section />

          <main>CNPJ: 37.181.811/0001-46</main>

        
          
     </div>
     
       <footer className={styles.footerContainer}>
               
               <Image className={styles.Logo} src={Logo} alt="Logo"/>
                <p>Copyright 2023 © Fatal Model.</p>
                
      </footer>
        
    </>
  )
}
