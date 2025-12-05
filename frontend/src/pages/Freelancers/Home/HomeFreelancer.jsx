import { BarraNavegacao } from "../../../components/Navbar/BarraNavegacao";
import { useState, useEffect } from "react";
import "./homeFreelancer.css";

export const HomeFreelancer = () => {
  const [posts, setPosts] = useState([]);
  const [criando, setCriando] = useState(false);
  const [novoTexto, setNovoTexto] = useState("");

  useEffect(() => {
    setPosts([
      {
        id: 1,
        nome: "PERFIL",
        texto:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
      },
      {
        id: 2,
        nome: "PERFIL",
        texto:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
      }
    ]);
  }, []);

  function postar() {
    if (novoTexto.trim() === "") return;

    const novo = {
      id: Date.now(),
      nome: "PERFIL",
      texto: novoTexto
    };

    setPosts([novo, ...posts]);
    setNovoTexto("");
    setCriando(false);
  }

  return (
    <div className="home-container">
      <BarraNavegacao />

      <div className="top-bar">
        <button className="adicionar-btn" onClick={() => setCriando(true)}>
          + Adicionar Post
        </button>
      </div>

   
      {criando && (
        <div className="modal-fundo">
          <div className="modal-card">
            <h3>Criar Publicação</h3>

            <textarea
              className="modal-textarea"
              placeholder="Escreva sua publicação..."
              value={novoTexto}
              onChange={(e) => setNovoTexto(e.target.value)}
            />

            <div className="modal-botoes">
              <button className="btn-cancelar" onClick={() => setCriando(false)}>
                Cancelar
              </button>

              <button className="btn-postar" onClick={postar}>
                Postar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="publicacao-area">
        {posts.map((post) => (
          <div key={post.id} className="publicacao-card">
            <div className="publicacao-header">
              <div className="perfil-icon"></div>
              <span className="perfil-name">{post.nome}</span>
            </div>

            <p className="publicacao-text">{post.texto}</p>

            <div className="publicacao-box"></div>

            <div className="publicacao-actions">
              <span>🖤</span>
              <span>💬</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
