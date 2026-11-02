import './App.css'

function App() {
  return (
    <>
  <header>
    <a href="/" className="logo">cofee cofee</a>
    <nav>
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#cardapio">Cardápio</a>
    </nav>
  </header>

    <main id = "inicio">
      <section className='hero'>
        <p>Bem-vindo ao Cofee & Cofee</p>
        <h1>Um bom café, uma pausa especial.</h1>
        <p>Cafés artesanais, doces fresquinhos e um lugar para desacelerar</p>
        <a href="#cardapio" className='botao'>Conheça nosso cardápio</a>
      </section>

      <section id='sobre' className='sobre'>
        <h2>Por que escolher nossa cafetería</h2>
        <p>Cuidado em cada xícara, sabor em cada momento</p>

        <div className='beneficios'>
          <article>
            <img src="/cafe.png" alt="Xícara de café com desenho de leite na superfície" className='foto-cafe'/>
            <h3>Café de qualidade</h3>
            <p>Grãos selecionados e carinho em cada preparo.</p>
          </article>

          <article>
            <img src="/doce.png" alt="Sobremesa com sorvete e calda de chocolate" />
            <h3>Pão fresquinho</h3>
            <p>Doces e acompanhamentos para deixar sua pausa melhor.</p>
          </article>

          <article>
            <img src="ambiente.png" alt="Interior da cafeteria com mesas e iluminação quente" />
            <h3>Ambiente acolhedor</h3>
            <p>Um espaço para conversar, trabalhar ou desacelerar.</p>
          </article>
        </div>
        </section>
        
        <section id='cardapio' className='cardapio'>
          <h2>Destaques do nosso cardápio</h2>
          <p>Uma pausa cheia de sabor.</p>

          <div className='produtos'>
            <article>
              <img src="/cafe.png" alt="Xicara de cappucino" className='foto-cafe' />
              <h3>Cappuccino</h3>
              <p>R$ 12,00</p>
            </article>

            <article>
              <img src="/doce.png" alt="Sobremesa com sorvete e calda de chocolate"/>
              <h3>Sobremesa com sorvete</h3>
              <p>R$ 22,00</p>
            </article>

            <article>
              <img src="/suco.jpeg" alt="Suco de laranja" className='copo-suco' />
              <h3>Suco de laranja</h3>
              <p>R$ 15,00</p>
            </article>

            <article>
              <img src="/Paodequeijo.jpeg" alt="Pão de queijo" />
              <h3>Pão de queijo</h3>
              <p>R$ 10,00</p>
            </article>

          </div>

          <button type="button" className="botao botao-cardapio">Veja nosso cardápio completo</button>

        </section>

        <section id='contato' className='visita'>
          <div className='visita-texto'>
            <h2>Venha nos visitar</h2>
            <p>Seu proximo café merece uma pausa por aqui.</p>

            <address>
              Rua das Flores, 123 - Centro Osasco.
            </address>

            <p>Segunda a sábado, das 8h as 19h</p>
          </div>

           <div className="visita-fotos">
            <img src="/fachada.jpeg" alt="Fachada da cafeteria" />
            <img src="/encontro.jpeg" alt="Amigos conversando e tomando café" />
            <img src="/interior.jpeg" alt="Interior da cafeteria com mesas e plantas" />
          </div>
          </section>   

          <footer className="rodape">
            <a href="#inicio">cofee cofee</a>
            <p>© 2026 · Criado por Willian Wu.</p>
          </footer>
    </main>
    </>
  )
  
}

export default App