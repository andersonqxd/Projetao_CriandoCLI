async function converterMoeda(valor, de, para) {
    const url = `https://api.exchangerate.host/latest?base=${de}&symbols=${para}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (!dados.success) {
            throw new Error('Erro ao obter taxa de câmbio');
        }

        const taxa = dados.rates[para];
        const convertido = valor * taxa;

        return {
            taxa,
            convertido,
            de,
            para,
            valor
        };
    } catch (erro) {
        throw new Error('Erro ao converter moeda: ' + erro.message);
    }
}

module.exports = { converterMoeda };
