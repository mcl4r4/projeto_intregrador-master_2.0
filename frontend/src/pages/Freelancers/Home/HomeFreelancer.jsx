import {BarraNavegacao} from "../../../components/Navbar/BarraNavegacao"
import { useState, useEffect } from "react";
import "./homeFreelancer.css";

export const HomeFreelancer = () => {
  const [posts, setPosts] = useState([]);

 
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


  function adicionarPost() {
    const novo = {
      id: Date.now(),
      nome: "PERFIL",
      texto: "Novo post criado pelo usuário."
    };

    setPosts([...posts, novo]);
  }

  return (
    
    <div className="home-container">
        <BarraNavegacao/>
      <div className="top-bar">
        <button className="adicionar-btn" onClick={adicionarPost}>
          + Adicionar Post
        </button>
      </div>

      <div className="publicacao-area">
        {posts.map(post => (
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
}
