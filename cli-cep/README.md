# CLI CEP - Consulta de Endereços

![Linguagem](https://img.shields.io/badge/linguagem-Node.js-green.svg)
![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)

Um utilitário simples de linha de comando que consulta informações de endereço a partir de um CEP usando a API pública ViaCEP.

---

### 📜 Sobre o Projeto

Este projeto foi desenvolvido para demonstrar como consumir uma API REST em **Node.js** usando `fetch` e `async/await`.  
Com ele, é possível inserir um CEP e receber os dados completos do endereço diretamente no terminal.

---

### ✨ Funcionalidades

* 🔎 Consulta rápida de CEPs brasileiros.  
* 📍 Exibe logradouro, bairro, cidade, estado e DDD.  
* ⚡ Validação simples para garantir que o CEP informado seja válido.  
* ❌ Tratamento de erros para CEP inexistente ou inválido.  

---

### 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Fetch API com async/await**
* **API ViaCEP**

---

### 🚀 Como Executar

#### Pré-requisitos
- Node.js v16+

#### Passos
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/cli-cep.git
   cd cli-cep
   ```
2. Execute a aplicação passando um CEP:
   ```sh
   node index.js 01001000
   ```

---

### 📌 Exemplo de Saída
```
📍 Endereço completo do CEP 01001000:
Rua: Praça da Sé
Bairro: Sé
Cidade: São Paulo - SP
DDD: 11
```

---

### 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

### 👤 Autor
**Anderson França**

* GitHub: `https://github.com/andersonqxd`
* LinkedIn: `https://www.linkedin.com/in/anderson-franca-rc/`