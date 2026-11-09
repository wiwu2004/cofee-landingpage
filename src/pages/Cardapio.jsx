import ItemCardapio from '../components/ItemCardapio'
import produtos from '../data/produtos'
import FiltrosCardapio from '../components/FiltrosCardapio'
import './Cardapio.css'
import categorias from '../data/categoria'
import { Link } from 'react-router'
import { useEffect, useRef, useState } from 'react'


function normalizarTexto(texto) {
    return texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
}

function Cardapio() {
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)
    const botaoCarrinho = useRef(null)
    const [pedido, setPedido] = useState(() => {
        try {
            const pedidoSalvo = localStorage.getItem('cafeteria-pedido')
            return pedidoSalvo ? JSON.parse(pedidoSalvo) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cafeteria-pedido', JSON.stringify(pedido))
    }, [pedido])
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

    const quantidadePedido = pedido.reduce((total, item) => total + item.quantidade, 0)

    const totalPedido = pedido.reduce((total, item) => {
        return total + item.preco * item.quantidade
    }, 0)

    function adicionarAoPedido(produto) {
        setPedido((pedidoAtual) => {
            const itemExistente = pedidoAtual.find((item) => item.id === produto.id)

            if (!itemExistente) {
                return [...pedidoAtual, { ...produto, quantidade: 1 }]
            }

            return pedidoAtual.map((item) => {
                if (item.id === produto.id) {
                    return { ...item, quantidade: item.quantidade + 1 }
                }

                return item
            })
        })
    }

    function removerDoPedido(id) {
        setPedido((pedidoAtual) => {
            return pedidoAtual
                .map((item) => {
                    if (item.id === id) {
                        return { ...item, quantidade: item.quantidade - 1 }
                    }

                    return item
                })
                .filter((item) => item.quantidade > 0)
        })
    }

    return (
        <main className="pagina-cardapio" style={{ backgroundImage: `url("${categoriaAtual.fundo}")` }}>

            <div className="cardapio-topo">
                <Link to="/" className="voltar-inicio">
                    ← Voltar ao início
                </Link>

                <div
                    className="carrinho-area"
                    onKeyDown={(evento) => {
                        if (evento.key === 'Escape' && carrinhoAberto) {
                            setCarrinhoAberto(false)
                            botaoCarrinho.current?.focus()
                        }
                    }}
                >
                    <button
                        ref={botaoCarrinho}
                        type="button"
                        className="carrinho-abrir"
                        aria-label={'Carrinho, ' + quantidadePedido + ' unidades'}
                        aria-expanded={carrinhoAberto}
                        aria-controls="painel-carrinho"
                        onClick={() => setCarrinhoAberto((aberto) => !aberto)}
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M2 3h3l3 12h11l3-9H6" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="18" cy="20" r="1" />
                        </svg>
                        <span aria-hidden="true">{quantidadePedido}</span>
                    </button>

                    <aside id="painel-carrinho" className="carrinho" aria-labelledby="titulo-carrinho" hidden={!carrinhoAberto}>
                        <h2 id="titulo-carrinho">Seu pedido</h2>

                        {pedido.length === 0 ? (
                            <p>Seu carrinho está vazio.</p>
                        ) : (
                            <ul className="carrinho-itens">
                                {pedido.map((item) => (
                                    <li key={item.id}>
                                        <span>{item.nome}</span>
                                        <div className="carrinho-controles">
                                            <button type="button" aria-label={'Remover uma unidade de ' + item.nome} onClick={() => removerDoPedido(item.id)}>−</button>
                                            <span>{item.quantidade}</span>
                                            <button type="button" aria-label={'Adicionar uma unidade de ' + item.nome} onClick={() => adicionarAoPedido(item)}>+</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <p className="carrinho-total">
                            <span>Total</span>
                            <strong>{totalPedido.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</strong>
                        </p>
                    </aside>
                </div>
            </div>

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
                        <ItemCardapio key={produto.id} produto={produto} onAdicionar={() => adicionarAoPedido(produto)} />
                    ))}
                </div>

            </div>
        </main>
    )
}

export default Cardapio