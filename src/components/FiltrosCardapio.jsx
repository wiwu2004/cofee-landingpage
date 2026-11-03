function FiltrosCardapio({ categoriaSelecionada, onSelecionar }) {
  return (
    <div className="filtros">
      <button
        className={categoriaSelecionada === 'todos' ? 'ativo' : ''}
        onClick={() => onSelecionar('todos')}
      >
        Todos
      </button>

      <button
        className={categoriaSelecionada === 'bebidas' ? 'ativo' : ''}
        onClick={() => onSelecionar('bebidas')}
      >
        Bebidas
      </button>

      <button
        className={categoriaSelecionada === 'doces' ? 'ativo' : ''}
        onClick={() => onSelecionar('doces')}
      >
        Doces
      </button>

      <button
        className={categoriaSelecionada === 'salgados' ? 'ativo' : ''}
        onClick={() => onSelecionar('salgados')}
      >
        Salgados
      </button>
    </div>
  )
}

export default FiltrosCardapio