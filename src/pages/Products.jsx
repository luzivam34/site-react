import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/products'

export default function Products(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        let mounted = true
        fetchProducts().then(data => {
            if(mounted){
                setProducts(data)
                setLoading(false)
            }
        })
        return () => { mounted = false }
    }, [])

    const filtered = products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <div>
            <section style={{ marginBottom: '1rem' }} className="card">
                <h2>Produtos</h2>
                <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por nome..." style={{ padding: '0.5rem', width: '100%', marginTop: '0.6rem', borderRadius: 8 }} />
            </section>

            {loading ? <div className="card">Carregando...</div> :
                <section className="grid">
                    {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                    {filtered.length === 0 && <div className="card">Nenhum produto encontrado.</div>}
                </section>
            }
        </div>
    )
}
