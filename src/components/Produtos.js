import React from 'react';
import styles from './Produtos.module.css'
import Card from './Card'


const Produtos = ({ produtos }) => {
  return (
    <section className={styles.container}>
      <div className='content'>
        {produtos.map((produto) => (
          <Card
            href={produto.href}
            produto={produto.nome}
          />
        ))}
      </div>
    </section>
  )
}

export default Produtos
