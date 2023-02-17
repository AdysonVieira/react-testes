import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Produto.module.css';

const Produto = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const location = useLocation();
  
  React.useEffect(() => {
    setLoading(true)
    fetch(`https://ranekapi.origamid.dev/json/api${location.pathname}`)
      .then((response) => response.json())
      .then((json) => setData(json))
    setLoading(false)
  }, [location])

  if (loading) {
    return <p>Carregando...</p>
  }
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            src={data.fotos[0].src}
            className={styles.img}
            alt={data.descricao}>
          </img>
          <div className={styles.info}>
            <h3 className={styles.titulo}>{data && data.nome}</h3>
            <h4 className={styles.preco}>R$ {data.preco}</h4>
            <p className={styles.descricao}>{data.descricao}</p>
          </div>
  
        </div>
      </div>
    )
  }
}

export default Produto