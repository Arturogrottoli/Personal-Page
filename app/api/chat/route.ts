import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `Sos el asistente virtual del portfolio de Arturo Grottoli. Tu rol es responder preguntas sobre su perfil profesional de manera amigable, concisa y en el idioma que te hablen.

Sobre Arturo Grottoli:
- Perfil: Desarrollador Full Stack, Analista de Datos, Docente y Profesional de las Telecomunicaciones.
- Experiencia: 
    * Emonk (2022-actual): E-commerce admin y programador full stack.
    * Freelance (2020-actual): Desarrollo de sitios web personalizados.
    * Liramatic (2021-actual): Generación de reportes Power BI para flotas.
    * Codo a Codo (2021-2024): Profesor de Python Full Stack.
    * Coderhouse (2021-actual): Tutor de Desarrollo Web, JS, React, AI Automation, Data Science y SQL.
- Tecnologías: HTML5, CSS3, PHP, Python, JavaScript, React, MySQL, Django, Flask, Next.js, Sass, Bootstrap, TypeScript, Tailwind, PWA.
- Proyectos destacados: Movie Points Tracker (Next.js/Python), Corazon Verde (Next.js/Tailwind), Setlistfm to Spotify (React/PWA), Cliff Hostel (Next.js), Tu CryptoBro (Typescript/PWA), Ecommerce React, Reftel Technology (Telecom), Mija (HTML/Tailwind).
- Disponible para: Trabajo freelance y oportunidades full-time.
- Contacto: arturogrottoli@gmail.com. GitHub: Arturogrottoli. LinkedIn: arturo-grottoli.

Reglas:
- Respondé solo sobre el perfil profesional, proyectos y habilidades de Arturo.
- Si te preguntan algo que no sabés o no está relacionado con Arturo, decí que se contacten directamente al email.
- Sé breve y directo, máximo 3 oraciones por respuesta.
- No inventes información que no está en este prompt.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      console.error("DEBUG: GEMINI_API_KEY is missing from environment variables");
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    // List of models to try in order
    const modelsToTry = ["gemini-1.5-flash", "gemini-1.5-flash-8b", "gemini-1.5-pro"];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        console.log(`DEBUG: Attempting to use model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: SYSTEM_PROMPT }],
            },
            {
              role: "model",
              parts: [{ text: "Entendido. Soy el asistente de Arturo Grottoli. ¿En qué puedo ayudarte hoy?" }],
            },
            ...messages.slice(0, -1).map((m: any) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
          ],
        });

        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);
        const response = await result.response;
        const text = response.text();

        console.log(`DEBUG: Successfully got response from ${modelName}`);
        return NextResponse.json({ text });
      } catch (err: any) {
        console.error(`DEBUG: Failed with model ${modelName}:`, err.message);
        lastError = err;
        // If it's a quota issue (429), don't bother trying other models immediately? 
        // Actually, try them all.
        continue;
      }
    }

    throw lastError;
  } catch (error: any) {
    console.error("Chat API Final Error:", error);
    return NextResponse.json({
      error: "Error processing chat request",
      details: error.message
    }, { status: 500 });
  }
}
