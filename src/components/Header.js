import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink to='produto' className={styles.item}>Produtos</NavLink>
          </li>
          <li>
            <NavLink to='contato' className={styles.item}>Contato</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
