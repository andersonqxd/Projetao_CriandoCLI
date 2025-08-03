const {converterMoeda} = require("./service/converter");

const args = process.argv.slice(2);

if(args.length != 3) {
    console.log('Uso: node index.js <valor> <moeda_origem> <moeda_destino>');
    process.exit(1);
}

const [valorStr, moedaOrigem, moedaDestino] = args;
const valor = parseFloat(valorStr);

if (isNaN(valor)) {
    console.error('Valor inválido.');
    process.exit(1);
}

(async () => {
    try {
    const { taxa, convertido, de, para } = await converterMoeda(valor, moedaOrigem.toUpperCase(), moedaDestino.toUpperCase());

    console.log(`💱 Conversão de ${valor.toFixed(2)} ${de} para ${para}`);
    console.log(`🧮 Taxa de câmbio: 1 ${de} = ${taxa.toFixed(4)} ${para}`);
    console.log(`✅ Valor convertido: ${convertido.toFixed(2)} ${para}`);
    } catch (erro) {
        console.error('❌ Erro:', erro.message);
    }
})();