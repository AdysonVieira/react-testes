import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

const Card = ({ to, src, nome, descricao, handleClick }) => {
  return (
    <Link to={to} className={styles.card} onClick={handleClick}>
      <img src={src} alt={descricao} className={styles.img}>
      </img>
      <h2 className={styles.titulo}>{nome}</h2>
    </Link>  
  );
};

export default Card
