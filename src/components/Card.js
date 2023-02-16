import React from 'react';
import styles from './Card.module.css'

const Card = ({ href, src, nome, alt, handleClick }) => {
  return (
    <a 
      className={styles.card}
      href={href}
      onClick={handleClick}>
      <img
        className={styles.img}
        src={src}
        alt={alt}>
      </img>
      <h2
        className={styles.texto}>
        {nome}
      </h2>
    </a>
  )
}

export default Card
