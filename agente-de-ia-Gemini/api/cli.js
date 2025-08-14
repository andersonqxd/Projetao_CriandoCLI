import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
import reaslineSync from 'readline-sync';

// inicializando client gemini
const clientGemini = new GoogleGenAI({apiKey: process.env.GOOGLE_API_KEY });

console.log("Jarvs (Gemini) online. Digite 'sair' para encerrar.\n");

while (true) {
    const pergunta = reaslineSync.question('Manda pro Javrs: ');

    if(pergunta.toLowerCase().trim() ==='sair') {
        console.log("Jarvs: Encerrando sessão. Até mais!")
        break;
    }

    try {
        const resposta = await clientGemini.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: pergunta,
        });
        console.log(`Jarvs: ${resposta.text}`);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}