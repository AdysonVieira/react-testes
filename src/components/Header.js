import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to='produtos' className={styles.item}>Produtos</NavLink>
        <NavLink to='contato' className={styles.item}>Contato</NavLink>
      </nav>
    </div>
  )
}

export default Header
