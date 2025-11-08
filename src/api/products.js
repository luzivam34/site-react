// Exemplo usando uma "fake API" local -> em produção use uma API real
export async function fetchProducts() {
    // se tiver API real: return fetch(url).then(r => r.json())
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id:1, title: 'Camiseta', description: 'Camiseta 100% algodão', price: 59.9 },
                { id:2, title: 'Boné', description: 'Boné com aba curva', price: 39.5 },
                { id:3, title: 'Caneca', description: 'Caneca cerâmica 350ml', price: 29.0 },
            ])
        }, 600)
    })
}
