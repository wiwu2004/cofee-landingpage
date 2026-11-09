function ItemCardapio({produto, onAdicionar}) {
    return (
        <article className="item-cardapio">
            <h2>{produto.nome}</h2>

            <div className="item-cardapio-info">
                <p>{produto.detalhe}</p>

                <span className="item-cardapio-preco">
                    {produto.preco.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </span>
            </div>
            <button type="button" onClick={onAdicionar}>Adicionar ao pedido</button>

        </article>
    )
}

export default ItemCardapio