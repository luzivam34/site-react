import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header>
            <div className="container nav">
                <h1 style={{ margin: 0, fontSize: '1.1rem' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'var(--text)'}}>Meu Site React</Link>
                </h1>

                <nav style={{ marginLeft: 'auto', display: 'flex', gap: '0.6rem' }}>
                    <Link to="/" className="button" style={{ background: 'transparent', color: 'var(--text)', padding: '0.4rem 0.6rem', borderRadius: 6, border: '1px solid rgba(0,0,0,0.06)' }}>Início</Link>
                    <Link to="/products" className="button">Produtos</Link>
                    <Link to="/jogador" className="button">Jogador</Link>
                    <Link to="/about" className="button" style={{ background: 'transparent', color: 'var(--text)', border: '1px solid rgba(0,0,0,0.06)' }}>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}
