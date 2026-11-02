function Produto({produto}){
    return(
        <article>
            <img src={produto.imagem} alt={produto.descricao} className={produto.classeImagem} />
            <h3>{produto.nome}</h3>
            <p>{produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</p>
        </article>
    )
}

export default Produto