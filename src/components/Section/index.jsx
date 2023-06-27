import styles from "./Styles.module.scss";

import {AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from  'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok} from  'react-icons/bs'

export function Section() {

    return (
        <div className={styles.container}>

            <div>
            <h2>SOBRE O <strong>FATAL MODEL</strong> </h2>
            <div className={styles.card}>
                
                <p >
                    Lançado em 2016, o Fatal Model é a maior plataforma de
                    anúncios de acompanhantes do Brasil. A missão Fatal Model é
                    'organizar e dignificar o mercado de acompanhantes do mundo'.
                    Acompanhantes mulheres, homens e transex de todo o Brasil em mais
                    de 25 mil anúncios ativos.
                </p>

                <ul>
                    <a href=""><AiFillYoutube color="#000" size={27}/></a>
                    <a href=""><AiFillInstagram color="#000" size={27}/></a>
                    <a href=""><AiFillFacebook color="#000" size={25}/></a>
                    <a href=""><AiFillTwitterCircle color="#000" size={25} /></a>
                    <a href=""><BsSpotify color="#000" size={25}/></a>
                    <a href=""><BsTelegram color="#000" size={25}/></a>
                    <a href=""><BsTiktok color="#000" size={25}/></a>
                </ul>

                
            </div>
               
            </div>
            <div className={styles.card}>
                <li >Fatal Blog</li>
                <li href="#">Fale Conosco</li>
                <li href="#">Perguntas Frequentes</li>
                <li href="#">Planos para Anunciantes</li>
                <li href="#">Planos para Clientes</li>
                <li href="#">Termos de uso</li>
                <li href="#">Denunciar Exploração Sexual</li>
            </div>

            <div className={styles.card}>
                <li href="#">Curitiba - PR</li>
                <li href="#">Campinas - SP</li>
                <li href="#">São Paulo - SP</li>
                <li href="#">Manaus - AM</li>
                <li href="#">Belo Horizonte - MG</li>
                <li href="#">Recife - PE</li>
            </div>



        </div>

    )
}