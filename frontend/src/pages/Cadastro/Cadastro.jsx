import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";

export const Cadastro = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [tipo, setTipo] = useState("");

    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        setMensagem("Seja bem vindo.");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            nome,
            email,
            senha,
            tipo,
        });

        alert("Dados enviados!");

        localStorage.setItem("tipo_usuario", tipo);

        if (tipo === "freelancer") { navigate("/home-freelancer"); }
        else { navigate("/home-user"); }
    };

    return (
        <div className="container">
            <div className="lado-esquerdo">
                <form className="formulario" onSubmit={handleSubmit}>
                    <h2>Cadastrar</h2>

                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="">O que você é?</option>
                        <option value="User">Empresa</option>
                        <option value="freelancer">Freelancer</option>
                    </select>

                    <button className="btn">Cadastrar</button>

                    <div className="social-icons">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" width="22"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="22"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="22"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="22"/>
                    </div>

                    <a href="/login">Já tem uma conta? Faça seu login</a>
                </form>
            </div>


            <div className="lado-direito">
                <h1>{mensagem}</h1>
            </div>

        </div>
    );
}
