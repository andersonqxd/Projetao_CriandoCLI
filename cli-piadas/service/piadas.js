const fetch = require('node-fetch');

async function buscarPiadaAleatoria() {
    const url = 'https://api.chucknorris.io/jokes/random';
    
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.message || 'Erro ao buscar piada.');
        }

        return dados.value;
    } catch (erro) {
        throw new Error('Erro ao buscar piada aleatória: ' + erro.message);
    }
}

async function buscarCategorias() {
    const url = 'https://api.chucknorris.io/jokes/categories';

    try {
        const resposta = await fetch(url);
        const categorias = await resposta.json();
        return categorias;
    } catch (erro) {
        throw new Error('Erro ao buscar categorias: ' + erro.message);
    }
}

async function buscarPiadaPorCategoria(categoria) {
    const url = `https://api.chucknorris.io/jokes/random?category=${categoria}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error(dados.message || 'Erro ao buscar piada por categoria.');
        }

        return dados.value;
    } catch (erro) {
        throw new Error('Erro ao buscar piada por categoria: ' + erro.message);
    }
}

module.exports = { buscarPiadaAleatoria, buscarCategorias, buscarPiadaPorCategoria };
