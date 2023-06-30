import styles from "./Styles.module.scss";
import Modal from 'react-modal';
import { AiOutlineExclamationCircle, AiFillYoutube, AiFillInstagram, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai'
import { BsSpotify, BsTelegram, BsTiktok } from 'react-icons/bs'
import { useState } from "react";
export function Section() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const customModalStyles = {
        content: {
            width: '300px', 
            height: '250px', 
            margin: 'auto', 
            background: '#fff', 
            borderRadius: 10
        },
        overlay: {
            background: 'rgba(0, 0, 0, 0.5)', // Defina a cor de fundo do overlay (fundo do Modal)
        },
    };

    return (
        <>
            <div className={styles.container}>

                <div>
                    <h2>SOBRE O <strong>FATAL MODEL</strong> </h2>
                    <div className={styles.card}>

                        <p className={styles.p}>
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

                    <a >Denunciar Exploração Sexual <p onClick={handleOpenModal} className={styles.svg}><AiOutlineExclamationCircle size={20} /></p></a>

                    <div></div>
                </div>

                <div className={styles.card}>
                    <div></div>
                   <div><a href="#"><span>Curitiba - PR</span></a>
                    <a href="#"><span>Campinas  - SP</span></a>
                    <a href="#"><span>São Paulo - SP </span></a>
                  </div> 
                  <div>
                    <a href="#"><span>Manaus - AM</span></a>
                    <a href="#"><span>Belo Horizonte - MG</span></a>
                    <a href="#"><span>Recife - PE</span></a>
                    </div>

                </div>




            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                style={customModalStyles}

            >
                <div className={styles.modalDiv}>
                    <span>
                        Exploração Sexual é a condição análoga à escravidão 
                        em que uma pessoa se beneficia sexualmente de outra 
                        pessoa sendo um crime previsto pela Constituição.
                        Caso esteja em uma situação assim, ou conheça alguém que está, denuncie através do link ligando para o Disque Direitos Humanos (Disque 100).

                        O Disque Direitos Humanos é um serviço de disseminação de informações sobre direitos de grupos vulneráveis e de denúncias de violações de direitos humanos.</span>
                </div>
            </Modal>
        </>
    )
}