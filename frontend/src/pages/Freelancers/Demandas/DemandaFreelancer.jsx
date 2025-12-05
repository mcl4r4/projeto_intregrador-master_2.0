import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarraNavegacao } from "../../../components/Navbar/BarraNavegacao";
import './demandaFreelancer.css'


export function DemandaFreelancer() {
    return (
        <div className="demandas">
            <BarraNavegacao />


            <main className="main-content">
                <nav className="tabs">
                    <h3>Andamento</h3>
                    <h3>Concluído</h3>
                    <h3>Solicitações</h3>
                </nav>


                <section className="cards">
                    <div className="card">
                        <h3>Nome da empresa</h3>
                        <p><strong>Data inicial:</strong>11/11/1111</p>
                        <p><strong>Data limite de entrega:</strong>12/12/1212</p>
                        <p><strong>Porcentagem que falta:</strong> 80%</p>
                        <button className="olhar"><a href="/gerenciamento-tempoFreelancer">Olhar</a></button>
                    </div>
                    <div className="card">
                        <h3>Nome da empresa</h3>
                        <p><strong>Data inicial:</strong>11/11/1111</p>
                        <p><strong>Data limite de entrega:</strong>12/12/1212</p>
                        <p><strong>Porcentagem que falta:</strong> 20%</p>
                        <button className="olhar"><a href="/gerenciamento-tempoFreelancer">Olhar</a></button>
                    </div>
                    <div className="card">
                        <h3>Nome da empresa</h3>
                        <p><strong>Data inicial:</strong>11/11/1111</p>
                        <p><strong>Data limite de entrega:</strong>12/12/1212</p>
                        <p><strong>Porcentagem que falta:</strong> 20%</p>
                        <button className="olhar"><a href="/gerenciamento-tempoFreelancer">Olhar</a></button>
                    </div>
                </section>


                <footer className="paginacao">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>...</button>
                </footer>
            </main>
        </div>
    )
}
