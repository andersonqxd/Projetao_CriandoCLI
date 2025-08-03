const {buscarCep} = require('./service/buscarCep')

const cep = process.argv[2];

if(!cep || !/^\d{8}$/.test(cep)) {
    console.log('❌ Informe um CEP válido (somente números, 8 dígitos).');
    process.exit(1);
}

(async () => {
    try {
        const endereco = await buscarCep(cep);

        console.log('\n📍 Endereço encontrado:\n');
        console.log(`Logradouro: ${endereco.logradouro}`);
        console.log(`Bairro: ${endereco.bairro}`);
        console.log(`Cidade: ${endereco.localidade} - ${endereco.uf}`);
        console.log(`CEP: ${endereco.cep}\n`);
    } catch (err) {
        console.error('❌', err.message);
    }
}

)();
