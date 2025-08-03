const { buscarPiadaAleatoria, buscarCategorias, buscarPiadaPorCategoria } = require('./service/piadas');

const args = process.argv.slice(2);

(async () => {
    try {
        if (args.length === 0) {
            const piada = await buscarPiadaAleatoria();
            console.log(`Piada Aleatória:\n${piada}`);
        } else if (args[0] === 'categorias') {
            const categorias = await buscarCategorias();
            console.log('Categorias disponíveis:');
            console.log(categorias.join(', '));
        } else if (args[0] === 'categoria' && args[1]) {
            const piada = await buscarPiadaPorCategoria(args[1]);
            console.log(`Piada da categoria "${args[1]}":\n${piada}`);
        } else {
            console.log('Comando inválido.');
            console.log('Use:\n- node index.js\n- node index.js categorias\n- node index.js categoria <nome>');
        }
    } catch (erro) {
        console.error('🚨 Erro:', erro.message);
    }
})();
