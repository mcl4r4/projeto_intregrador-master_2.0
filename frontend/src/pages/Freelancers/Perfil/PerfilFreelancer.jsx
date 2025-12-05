import "./perfilFreelancer.css";
import { useState, useEffect } from "react";
import { BarraNavegacao } from "../../../components/Navbar/BarraNavegacao";

export function PerfilFreelancer() {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const dados = {
            descricao: `
Sou designer gráfico com mais de 5 anos de experiência em criação de identidades visuais, materiais promocionais e interfaces digitais.
Já colaborei com startups, ONGs e empresas internacionais, sempre focando em soluções criativas e funcionais. Domino ferramentas como Adobe Illustrator, Photoshop e Figma.
Falo inglês fluente e estou disponível para projetos pontuais ou de longo prazo.
Vamos conversar?
            `,
            pacotes: [
                "Pacote Logo: 3 propostas + 2 revisões + versão vetorial",
                "Pacote Social Media: 10 artes para Instagram + stories",
                "Pacote Completo: identidade visual + cartão + papelaria"
            ],
            empresas: [
                "Agência PixelArte.",
                "Startup FinTechUp.",
                "Loja ModaViva.",
                "ONG VerdeCidade.",
                "Consultório Dr. Saúde."
            ],
            contato: {
                nome: "Maria Clara – Designer",
                telefone: "(00) 00000-0000",
                email: "MariaC.design@gmail.com",
                port: "Portfólio: MariaC.net/MC.design",
                instagram: "@MariaClara",
                cidade: "Maceió – AL"
            }
        };

        setPerfil(dados);
    }, []);

    if (!perfil) return <p>Carregando...</p>;

    return (
        <div className="perfil-container">
            <BarraNavegacao />

            <div className="conteudo">
                <div className="card-perfil">
                    <div className="icon-perfil">👤</div>
                    <h3>PERFIL</h3>
                    <p className="descricao">{perfil.descricao}</p>
                </div>

                <div className="sidebar-info">

                    <div className="box">
                        <h4>PACOTES:</h4>
                        <ul>
                            {perfil.pacotes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="box">
                        <h4>EMPRESAS JÁ TRABALHADAS:</h4>
                        <ul>
                            {perfil.empresas.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="box">
                        <p><strong>{perfil.contato.nome}</strong></p>
                        <p>📞 {perfil.contato.telefone}</p>
                        <p>📧 {perfil.contato.email}</p>
                        <p>🌐 {perfil.contato.port}</p>
                        <p>📱 {perfil.contato.instagram}</p>
                        <p>📍 {perfil.contato.cidade}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}
