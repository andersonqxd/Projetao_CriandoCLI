import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

document.addEventListener('DOMContentLoaded', function () {
    let apiKey = null;

    const enviarBtn = document.getElementById("enviar");
    const perguntaTextarea = document.getElementById("pergunta");
    const apiKeyInput = document.getElementById("apiKey");
    const salvarKeyBtn = document.getElementById("salvarKey");
    const limparBtn = document.getElementById("limpar");
    const historicoDiv = document.getElementById("historico");
    const charCountSpan = document.getElementById("charCount");

    apiKey = localStorage.getItem("googleApiKey");
    if (apiKey) {
        apiKeyInput.value = apiKey;
        console.log("API Key carregada do localStorage.");
    }

    salvarKeyBtn.addEventListener("click", () => {
        apiKey = apiKeyInput.value.trim();
        if (!apiKey) {
            alert("Por favor, insira sua Google API Key.");
            return;
        }
        localStorage.setItem("googleApiKey", apiKey);
        alert("API Key salva com sucesso!");
    });

    enviarBtn.addEventListener("click", async () => {
        if (!apiKey) {
            alert("Insira e salve a Google API Key primeiro!");
            return;
        }

        const pergunta = perguntaTextarea.value.trim();
        if (!pergunta) {
            alert("Digite uma pergunta.");
            return;
        }

        enviarBtn.disabled = true;
        enviarBtn.innerText = "Pensando...";

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await model.generateContent(pergunta);
            const resposta = result.response.text();

            adicionarMensagem(pergunta, resposta);

            perguntaTextarea.value = "";
            atualizarCharCount();
        } catch (err) {
            console.error(err);
            adicionarMensagem(pergunta, "⚠️ Erro ao consultar Gemini. Verifique sua API Key ou o console para mais detalhes.");
        } finally {
            enviarBtn.disabled = false;
            enviarBtn.innerText = "Enviar";
        }
    });

    limparBtn.addEventListener("click", () => {
        historicoDiv.innerHTML = "";
    });

    function atualizarCharCount() {
        const count = perguntaTextarea.value.length;
        charCountSpan.innerText = count;
    }
    perguntaTextarea.addEventListener("input", atualizarCharCount);

    function adicionarMensagem(pergunta, resposta) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("msg");

        msgDiv.innerHTML = `
        <p class="pergunta">Você: ${pergunta.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        <div class="resposta">
            ${marked.parse(resposta)} 
            <button class="copy-btn">Copiar</button>
        </div>
    `;

        historicoDiv.appendChild(msgDiv);

        msgDiv.querySelector(".copy-btn").addEventListener("click", () => {
        const textoParaCopiar = msgDiv.querySelector(".resposta").innerText.replace("Copiar", "").trim();
        navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert("Resposta copiada!");
        });
    });

        historicoDiv.scrollTop = historicoDiv.scrollHeight;
    }

});