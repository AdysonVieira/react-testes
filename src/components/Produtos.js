import React from 'react';
import styles from './Produtos.module.css'
import Card from './Card'
import Head from './Head'


const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((data) => setProdutos(data))
  }, [])

  return (
    <div className={`${styles.content} fadeInLeft`}>
      <Head title="Produtos" description="Página de Produtos"/>
      {produtos && produtos.map((produto) => (
        <Card 
          key={produto.id}
          to={produto.id}
          src={produto.fotos[0].src}
          nome={produto.nome}
        />  
      ))}
    </div>
  )
}

export default Produtos
