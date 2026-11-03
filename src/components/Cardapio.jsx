import Produto from './Produto'
import produtos from '../data/produtos'
import { Link } from 'react-router'

function Cardapio() {


  const destaques = produtos.filter((produto) => [1, 2, 3, 4].includes(produto.id))
  return (
    <section id='cardapio' className='cardapio'>
      <h2>Destaques do nosso cardápio</h2>
      <p>Uma pausa cheia de sabor.</p>



      <div className='produtos'>

        {destaques.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto} />
        ))}

      </div>

      <Link to="/cardapio" className="botao botao-cardapio">
        Veja nosso cardápio completo
      </Link>
    </section>
  )
}

export default Cardapio



