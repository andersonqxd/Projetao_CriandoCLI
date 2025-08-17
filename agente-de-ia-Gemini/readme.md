# Jarvs - Agente de IA com Gemini

![Linguagem](https://img.shields.io/badge/linguagem-JavaScript-blue.svg)
![Licença](https://img.shields.io/badge/licença-MIT-green.svg)

Um chatbot simples e elegante que se conecta à API do Google Gemini para responder às suas perguntas, diretamente no seu navegador.

![Captura de Tela do Jarvs](https://i.imgur.com/SEU_LINK_DE_IMAGEM_AQUI.png)
> **Nota:** Substitua o link acima por uma captura de tela real da sua aplicação!

---

### 📜 Sobre o Projeto

Este projeto é uma interface de chat front-end pura (HTML, CSS e JavaScript) que permite interagir com os modelos de linguagem avançados do Google, como o Gemini 1.5 Flash. A aplicação foi projetada para ser leve, fácil de usar e de configurar, sem a necessidade de um back-end.

As respostas da IA que contêm formatação (como listas, blocos de código e negrito) são renderizadas corretamente em HTML para uma melhor experiência de leitura.

---

### ✨ Funcionalidades

* 💬 **Interface de Chat Interativa:** Envie perguntas e veja as respostas em tempo real.
* 🔑 **Salva a API Key no Navegador:** Sua Google API Key fica salva localmente (`localStorage`) para não precisar inseri-la a cada visita.
* ✨ **Renderização de Markdown:** As respostas da IA são formatadas, exibindo listas, código e outros elementos corretamente.
* 📋 **Botão para Copiar Respostas:** Copie facilmente o texto gerado pela IA para a sua área de transferência.
* 🔄 **Limpeza do Histórico:** Um botão para limpar a conversa e começar de novo.
* ⏳ **Feedback de Carregamento:** O botão "Enviar" muda de estado para indicar que a IA está processando sua pergunta.

---

### 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES Modules)**
* **Google Generative AI API** (`@google/generative-ai`)
* **Marked.js** (para renderizar Markdown)

---

### 🚀 Como Executar

Para executar este projeto em sua máquina local, siga os passos abaixo.

#### Pré-requisitos

Você precisa de uma **API Key** do Google AI Studio. Você pode obter uma gratuitamente aqui:
* [Google AI Studio](https://aistudio.google.com/app/apikey)

#### Passos

1.  **Clone o repositório:**
    ```sh
    git clone https://SEU_LINK_DO_REPOSITORIO_AQUI.git
    ```
    (Ou simplesmente baixe os arquivos `index.html`, `style.css` e `script.js` para a mesma pasta).

2.  **Inicie um servidor local:**
    Como este projeto usa módulos JavaScript (`type="module"`), você não pode simplesmente abrir o `index.html` diretamente no navegador (isso causaria um erro de CORS). A maneira mais fácil de executá-lo é com um servidor local.

    * **Opção A: Com a extensão "Live Server" no VS Code**
        1.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no Visual Studio Code.
        2.  Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

    
3.  **Configure a aplicação:**
    1.  Com a página aberta no navegador, cole sua Google API Key no campo apropriado.
    2.  Clique em "Salvar Key".
    3.  Comece a conversar!

---

### 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

### 👤 Autor

**[SEU NOME AQUI]**

* GitHub: `[link para seu perfil]`
* LinkedIn: `[link para seu perfil]`