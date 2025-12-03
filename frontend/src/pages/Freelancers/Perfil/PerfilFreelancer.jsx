// import { BarraNavegacao } from "../../../components/Navbar/BarraNavegacao";
// import { useState, useEffect } from "react";
// import "./perfil.css";

// export const PerfilFreelancer = () => {
//   const [texto, setTexto] = useState("");
//   const [editando, setEditando] = useState(false);

//   useEffect(() => {
//     const salvo = localStorage.getItem("textoPerfil");
//     if (salvo) {
//       setTexto(salvo);
//     } else {
//       setTexto(
//         "Sou designer gráfico com mais de 5 anos de experiência em criação de identidades visuais, materiais promocionais e interfaces digitais.\n" +
//         "Já colaborei com startups, ONGs e empresas internacionais, sempre focando em soluções criativas e funcionais. Domino ferramentas como Adobe Illustrator, Photoshop e Figma.\n" +
//         "Falo inglês fluente e estou disponível para projetos pontuais ou de longo prazo.\nVamos conversar?"
//       );
//     }
//   }, []);


//   useEffect(() => {
//     localStorage.setItem("textoPerfil", texto);
//   }, [texto]);

//   return (
//     <div className="container">
//       <BarraNavegacao />

//       <div className="perfil-card">
//         <div className="perfil-icon"></div>
//         <h2>PERFIL</h2>

//         {!editando ? (
//           <p className="texto">{texto}</p>
//         ) : (
//           <textarea
//             className="textarea-editar"
//             value={texto}
//             onChange={(e) => setTexto(e.target.value)}
//           />
//         )}

//         <button className="btn-editar" onClick={() => setEditando(!editando)}>
//           {editando ? "Salvar" : "Editar Perfil"}
//         </button>
//       </div>

//       <div className="info-box pacotes">
//         <h3>PACOTES:</h3>
//         <ul>
//           <li>Pacote Logo: 3 propostas + 2 revisões + versão vetorial</li>
//           <li>Pacote Social Media: 10 artes para Instagram + stories</li>
//           <li>Pacote Completo: identidade visual + cartão + papelaria</li>
//         </ul>
//       </div>


//       <div className="info-box empresas">
//         <h3>EMPRESAS JÁ TRABALHADAS:</h3>
//         <ul>
//           <li>Agência PixelArte.</li>
//           <li>Startup FinTechUp.</li>
//           <li>Loja ModaViva.</li>
//           <li>ONG VerdeCidade.</li>
//           <li>Consultório Dr. Saúde.</li>
//         </ul>
//       </div>


//       <div className="info-box contato">
//         <p><strong>Maria Clara – Designer</strong><br />
//           Redes sociais:<br />
//           📞 (00) 00000-0000<br />
//           📧 MariaC.design@gmail.com<br />
//           💼 Portfolio: MariaClareMC.design<br />
//           🐦 @MariaClara<br />
//           📍 Maceió – AL
//         </p>
//       </div>

//     </div>
//   );
// }
