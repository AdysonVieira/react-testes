import React from 'react';
import styles from './Produtos.module.css'
import Card from './Card'


const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((data) => setProdutos(data))
  }, [])

  console.log(produtos)

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {produtos && produtos.map((produto) => (
          <Card 
            key={produto.id}
            to={produto.id}
            src={produto.fotos[0].src}
            nome={produto.nome}
          />  
        ))}
      </div>
    </section>
  )
}

export default Produtos
