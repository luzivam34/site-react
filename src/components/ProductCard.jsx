import React from 'react'

export default function ProductCard({ product }){
    return (
        <article className="card">
            <h3>{product.title}</h3>
            <p style={{ margin: '0.4rem 0' }}>{product.description}</p>
            <div style={{ marginTop: '0.6rem', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <strong>R$ {product.price.toFixed(2)}</strong>
                <button style={{ padding: '0.4rem 0.6rem', borderRadius: 8 }}>Comprar</button>
            </div>
        </article>
    )
}
