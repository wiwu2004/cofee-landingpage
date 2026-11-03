import ItemCardapio from '../components/ItemCardapio'
import produtos from '../data/produtos'
import { useState } from 'react'
import FiltrosCardapio from '../components/FiltrosCardapio'
import './Cardapio.css'
import categorias from '../data/categoria'
import { Link } from 'react-router'

function Cardapio() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos')
    const categoriaAtual = categorias[categoriaSelecionada]
    const produtosFiltrados = produtos.filter((produto) => {
        return categoriaSelecionada === 'todos' || produto.categoria === categoriaSelecionada
    })
    return (
        <main className="pagina-cardapio" style={{ backgroundImage: `url("${categoriaAtual.fundo}")` }}>

            <Link to="/" className="voltar-inicio">
                ← Voltar ao início
            </Link>

            <h1>{categoriaAtual.titulo}</h1>

            <FiltrosCardapio categoriaSelecionada={categoriaSelecionada} onSelecionar={setCategoriaSelecionada} />

            <div className="cardapio-layout">
                <div className="cardapio-lista">
                    {produtosFiltrados.map((produto) => (
                        <ItemCardapio key={produto.id} produto={produto} />
                    ))}
                </div>

            </div>
        </main>
    )
}

export default Cardapio