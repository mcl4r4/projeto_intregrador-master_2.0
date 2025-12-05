import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { api } from "../../services/api.js";
// import { saveToken } from "../../util/auth.js"
import "./login.css";

export const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        if (mensagem) {
            const timer = setTimeout(() => setMensagem(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [mensagem]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await api.post("/autenticacao", { email, senha })
        //     saveToken(response.token)
        //     navigate('/home-freelancer')
        // } catch (error) {
        //     console.log(error)
        //     alert('Erro no login')
        // }

        if (!email || !senha) {
            setMensagem("Preencha todos os campos.");
            return;
        }
        setMensagem("Login enviado!");

        const tipo = localStorage.getItem("tipo_usuario");

        if (tipo === "freelancer") {
            navigate("/home-freelancer");
        } else {
            navigate("/home-empresa");
        }
    };



    return (
        <div className="container">
            <div className="esquerdo">
                <h1>Hello world.<br />Bem vindo de volta.</h1>
            </div>

            <div className="direito">
                <div className="formulario">
                    <h2>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Nome ou E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button type="submit">Entrar</button>
                    </form>

                    {mensagem && <p className="mensagem">{mensagem}</p>}

                    <div className="social">
                        <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" width="22" />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="22" />
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="22" />
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="22" />
                    </div>

                    <p className="cadastro">
                        Ainda não tem uma conta? <a href="/cadastro">Faça seu cadastro</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
