import Header from '../components/Header'
import Footer from '../components/Footer'
import Cardapio from '../components/Cardapio'

function Home() {
  return (
    <>
      <Header />

      <main id="inicio">
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
              <img src="/cafe.png" alt="Xícara de café com desenho de leite na superfície" className='foto-cafe' />
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

        <Cardapio />

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

        <Footer />
      </main>
    </>
  )

}

export default Home
