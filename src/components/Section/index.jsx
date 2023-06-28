import styles from "./Styles.module.scss";

import { AiOutlineExclamationCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok } from 'react-icons/bs'

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
                        <a href=""><AiFillYoutube color="#000" size={27} /></a>
                        <a href=""><AiFillInstagram color="#000" size={27} /></a>
                        <a href=""><AiFillFacebook color="#000" size={25} /></a>
                        <a href=""><AiFillTwitterCircle color="#000" size={25} /></a>
                        <a href=""><BsSpotify color="#000" size={25} /></a>
                        <a href=""><BsTelegram color="#000" size={25} /></a>
                        <a href=""><BsTiktok color="#000" size={25} /></a>
                    </ul>


                </div>

            </div>
            <div className={styles.card}>
                
                <a><span>Fatal Blog</span> </a>
                <a href="#"><span>Fale Conosco</span></a>
                <a href="#"><span>Perguntas Frequentes</span></a>
                <a href="#"><span>Planos para Anunciantes</span></a>
                <a href="#"><span>Planos para Clientes</span></a>
                <a href="#">Termos de uso</a>
                <a href="#">Denunciar Exploração Sexual <AiOutlineExclamationCircle /></a>
                <div></div>
            </div>

            <div className={styles.card}>
                <div></div>
                <a href="#"><span>Curitiba - PR</span></a>
                <a href="#"><span>Campinas  - SP</span></a>
                <a href="#"><span>São Paulo - SP </span></a>
                <a href="#"><span>Manaus - AM</span></a>
                <a href="#"><span>Belo Horizonte - MG</span></a>
                <a href="#"><span>Recife - PE</span></a>
                
            </div>




        </div>

    )
}