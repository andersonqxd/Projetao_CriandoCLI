# CLI Conversor de Moedas

![Linguagem](https://img.shields.io/badge/linguagem-Node.js-green.svg)
![Licença](https://img.shields.io/badge/licença-MIT-blue.svg)

Um CLI simples que converte valores entre diferentes moedas usando a API pública ExchangeRate Host.

---

### 📜 Sobre o Projeto

Este projeto demonstra como consumir dados de câmbio em tempo real via API e manipular valores no Node.js.  
Com ele, você informa um valor, moeda de origem e moeda de destino e recebe o valor convertido no terminal.

---

### ✨ Funcionalidades

* 💱 Conversão em tempo real entre moedas.  
* 🧮 Exibição da taxa de câmbio atual.  
* ✅ Resultado final formatado.  
* ❌ Tratamento de erros para entradas inválidas.  

---

### 🛠️ Tecnologias Utilizadas

* **Node.js**
* **Fetch API com async/await**
* **API ExchangeRate Host**

---

### 🚀 Como Executar

#### Pré-requisitos
- Node.js v16+

#### Passos
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/cli-conversor.git
   cd cli-conversor
   ```
2. Execute a aplicação:
   ```sh
   node index.js <valor> <moeda_origem> <moeda_destino>
   ```
   Exemplo:
   ```sh
   node index.js 100 USD BRL
   ```

---

### 📌 Exemplo de Saída
```
💱 Conversão de 100.00 USD para BRL
🧮 Taxa de câmbio: 1 USD = 5.1234 BRL
✅ Valor convertido: 512.34 BRL
```

---

### 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

### 👤 Autor
**Anderson**  
* GitHub: [seu perfil aqui]  
* LinkedIn: [seu perfil aqui]  
