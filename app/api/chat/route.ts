import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SYSTEM_PROMPT = `Sos el asistente virtual del portfolio de [NOMBRE]. Tu rol es responder preguntas sobre su perfil profesional de manera amigable, concisa y en el idioma que te hablen.

Sobre [NOMBRE]:
- Desarrollador de software con experiencia en desarrollo web y mobile
- Tecnologías: React, Next.js, React Native, TypeScript, Node.js
- Disponible para trabajo freelance y oportunidades full-time
- Contacto: [EMAIL]

Reglas:
- Respondé solo sobre el perfil profesional, proyectos y habilidades
- Si te preguntan algo que no sabés, decí que se contacten directamente
- Sé breve y directo, máximo 3 oraciones por respuesta
- No inventes información que no está en este prompt`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: 'user', parts: [{ text: lastMessage }] }],
        }),
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude responder, intentá de nuevo.';
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}