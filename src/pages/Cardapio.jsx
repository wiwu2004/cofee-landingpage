import ItemCardapio from '../components/ItemCardapio'
import produtos from '../data/produtos'
import { useState } from 'react'
import FiltrosCardapio from '../components/FiltrosCardapio'
import './Cardapio.css'
import categorias from '../data/categoria'
import { Link } from 'react-router'


function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function Cardapio() {
    const [busca, setBusca] = useState('')
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos')
    const categoriaAtual = categorias[categoriaSelecionada]
    const produtosFiltrados = produtos.filter((produto) => {
        const correspondeCategoria =
            categoriaSelecionada === 'todos' ||
            produto.categoria === categoriaSelecionada

        const correspondeBusca = normalizarTexto(produto.nome)
        .includes(normalizarTexto(busca))

        return correspondeCategoria && correspondeBusca
    })

    return (
        <main className="pagina-cardapio" style={{ backgroundImage: `url("${categoriaAtual.fundo}")` }}>

            <Link to="/" className="voltar-inicio">
                ← Voltar ao início
            </Link>

            <h1>{categoriaAtual.titulo}</h1>

            <FiltrosCardapio categoriaSelecionada={categoriaSelecionada} onSelecionar={setCategoriaSelecionada} />

            <label htmlFor="busca-produto" className='busca-label'>Buscar no cardápio</label>

            <input
                id="busca-produto"
                type="search"
                placeholder="Ex.: cappuccino"
                value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
                className='busca-input'
            />

            <div className="cardapio-layout">
                <div className="cardapio-lista">
                    {produtosFiltrados.length === 0 && (
                        <p role="status">
                            Nenhum produto encontrado. Tente outro nome ou categoria.
                        </p>
                    )}
                    {produtosFiltrados.map((produto) => (
                        <ItemCardapio key={produto.id} produto={produto} />
                    ))}
                </div>

            </div>
        </main>
    )
}

export default Cardapio