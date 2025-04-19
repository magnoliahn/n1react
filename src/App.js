// src/App.js
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">FuturaTech</div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <div className="App" id="home">
        <header className="App-header">
          <h1>Bem-vindo à FuturaTech</h1>
          <p>
            Somos uma empresa inovadora focada em soluções tecnológicas para empresas e profissionais
            que buscam transformar o futuro.
          </p>
        </header>

        <section className="services-section" id="servicos">
          <h2>Nossos Serviços</h2>
          <div className="card-container">
            <div className="card">
              <h3>Desenvolvimento Web</h3>
              <p>Criação de sites e sistemas web modernos, responsivos e personalizados.</p>
            </div>
            <div className="card">
              <h3>Suporte Técnico</h3>
              <p>Atendimento ágil para resolver problemas com hardware, software e redes.</p>
            </div>
            <div className="card">
              <h3>Consultoria em TI</h3>
              <p>Orientação estratégica em tecnologia para impulsionar negócios com inovação.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <h2>Entre em Contato</h2>
          <form>
            <input type="text" placeholder="Seu nome" required />
            <input type="email" placeholder="Seu email" required />
            <textarea placeholder="Sua mensagem..." required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} FuturaTech. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
