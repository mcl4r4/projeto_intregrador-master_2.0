import './gerenciamentoTempoFreelancer.css'
import { BarraNavegacao } from "../../../components/Navbar/BarraNavegacao"
import { useState, useEffect } from "react"

export function GerenciamentoTempoFreelancer() {

    const [novoComentario, setNovoComentario] = useState("");

    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("comentariosProjeto");
        if (dadosSalvos) {
            setComentarios(JSON.parse(dadosSalvos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("comentariosProjeto", JSON.stringify(comentarios));
    }, [comentarios]);


    function enviarComentario(e) {
        e.preventDefault();
        if (novoComentario.trim() === "") return;

        const novo = {
            autor: "Eu",
            texto: novoComentario,
            id: Date.now()
        };

        setComentarios([novo, ...comentarios]);
        setNovoComentario("");
    }

    return (
        <div className='freelancer-container'>
            <BarraNavegacao />

            <div className='progress-bar'>
                <div className='steps'>
                    <div className='step active'>●</div>
                    <div className='step'>●</div>
                    <div className='step'>●</div>
                    <div className='step'>●</div>
                    <div className='step'>●</div>
                </div>
            </div>

            <button className='next-button'>PRÓXIMO</button>

            <div className='comentarios-section'>
                <form className='comentarios-form' onSubmit={enviarComentario}>
                    <h3>Comentários</h3>
                    <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                    <input
                        type="text"
                        placeholder='Adicione um comentário...'
                        value={novoComentario}
                        onChange={(e) => setNovoComentario(e.target.value)}
                    />

                    <button type='submit'>ENVIAR</button>

                    <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </form>

            
                {comentarios.map((c) => (
                    <div className='comentarios' key={c.id}>
                        <p><strong>{c.autor}</strong></p>
                        <p>{c.texto}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
