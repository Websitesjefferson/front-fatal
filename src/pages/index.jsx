import styles from "../styles/Home.module.scss";
import { Captcha } from "@/components/captcha";

import {Header} from '../components/Header'
import  SliderComponent  from "../components/Slide";
import { Section } from "../components/Section";
import { Menu } from "@/components/menu";
import Logo from '../assets/Logo.png'
import Image from "next/image";
import Form from "@/components/Input";

export default function Home() {
  return (
    <>
     <Header />

     <div className={styles.container}>
       
        
        
          <Form />

    <a className={styles.link} href="#">Esqueci minha senha</a>


          <div className={styles.check}>
          
           <div>
           <input style={{marginRight: 10}} type="checkbox" />
           <p>Mantenha-me conectado</p> 
           
           </div>
           
           <Captcha />
           
           </div>
           <button className={styles.button}>Entrar</button>

           <a href="#" className={styles.p}>Quero me cadastrar</a>


         <SliderComponent />

           <hr style={{ margin: "100px 0px 80px 0" }}/>
           
          <Section />

          <main className={styles.content}><span>CNPJ: 37.181.811/0001-46</span> </main>

        
          
     </div>
     
       <footer className={styles.footerContainer}>
             <div className={styles.divContainer}>  
               <Image className={styles.Logo} src={Logo} alt="Logo"/>
                <p>Copyright 2023 © Fatal Model.</p>
              </div>
      </footer>
        
    </>
  )
}
