import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <section className="card">
                <h2>Bem-vindo ao meu site em React</h2>
                <p>Exemplo simples com rotas, componentes e consumo de API.</p>
                <p><Link to="/products" className="button">Ver produtos</Link></p>
            </section>

            <section style={{ marginTop: '1rem' }} className="card">
                <h3>O que você vai aprender</h3>
                <ul>
                    <li>Estrutura de projeto</li>
                    <li>Componentes e props</li>
                    <li>UseState / UseEffect</li>
                    <li>Rotas com React Router</li>
                </ul>
            </section>
        </div>
    )
}
