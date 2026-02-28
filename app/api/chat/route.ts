import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const SYSTEM_PROMPT = `Sos el asistente virtual del portfolio de Arturo Grottoli. Tu rol es responder preguntas sobre su perfil profesional de manera amigable, concisa y en el idioma que te hablen.

Sobre Arturo:
- Desarrollador de software con experiencia en desarrollo web y mobile
- Tecnologías: React, Next.js, React Native, TypeScript, Node.js
- Disponible para trabajo freelance y oportunidades full-time
- Contacto: arturogrottoli@gmail.com

Reglas:
- Respondé solo sobre el perfil profesional, proyectos y habilidades
- Si te preguntan algo que no sabés, decí que se contacten directamente
- Sé breve y directo, máximo 3 oraciones por respuesta
- No inventes información que no está en este prompt`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1].content;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: lastMessage },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || 'No pude responder, intentá de nuevo.';
    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
