import React from 'react'

export default function Footer(){
    return (
        <footer>
            <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <small>© {new Date().getFullYear()} Meu Site React</small>
                <small>Feito com React</small>
            </div>
        </footer>
    )
}
