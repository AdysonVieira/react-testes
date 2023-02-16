import React from 'react';
import styles from './Contato.module.css';
import contatoImg from '../img/contato.jpg';

const Contato = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <img src={contatoImg} className={styles.img} alt='Imagem de Contato'></img>
        <div>
          <h1>Entre em contato.</h1>
          <ul>
            <li>adyson@codifica.digital</li>
            <li>99999 9999</li>
            <li>Rua do Cacete Armado, 999</li>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Contato
