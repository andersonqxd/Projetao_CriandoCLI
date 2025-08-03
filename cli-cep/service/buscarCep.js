async function buscarCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    try{
        const res  = await fetch(url);
        const data = await res.json();

        if(data.erro) {
            throw new Error("CEP não encontrado!")
        }
        return data;
    }catch(err) {
        throw new Error("Erro ao buscar o CEP: " + err.message);
    }
}


module.exports = {buscarCep};