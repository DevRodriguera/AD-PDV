import React, { } from 'react'
import "./styles.css"
import Header from '../../components/Header'

const Home = () => {

  const valor = "2574.00";

  return (
    <div>
      <Header />

      <article>
        <h1 className='home-title'>Vendas</h1>
        <div className='periodo-vendas'>
          <button>Hoje</button>
          <button>7D</button>
          <button>1M</button>
          <button>1A</button>
        </div>
        <h1>R${valor}</h1>
        <h4>3521 vendas realizadas</h4>
      </article>

    </div>
  )
}

export default Home