"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import styles from "./ChatBot.module.css"

interface Message {
    role: "user" | "bot"
    content: string
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "¡Hola! Soy el asistente de Arturo. ¿En qué puedo ayudarte hoy?" },
    ])
    const [input, setInput] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput("")
        setMessages((prev) => [...prev, { role: "user", content: userMessage }])
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMessage }].map((m) => ({
                        role: m.role === "bot" ? "assistant" : "user",
                        content: m.content,
                    })),
                }),
            })

            const data = await response.json()
            if (data.text) {
                setMessages((prev) => [...prev, { role: "bot", content: data.text }])
            } else {
                setMessages((prev) => [...prev, { role: "bot", content: "Lo siento, tuve un problema al procesar tu mensaje. Por favor intenta de nuevo." }])
            }
        } catch (error) {
            console.error("Chat Error:", error)
            setMessages((prev) => [...prev, { role: "bot", content: "Hubo un error de conexión. Podés contactar a Arturo directamente en arturogrottoli@gmail.com" }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className={styles.chatContainer}>
            {!isOpen && (
                <button onClick={() => setIsOpen(true)} className={styles.chatButton} title="Chat with Assistant">
                    <MessageCircle size={30} />
                </button>
            )}

            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.chatHeader}>
                        <span>AG Assistant</span>
                        <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.messagesContainer}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`${styles.message} ${msg.role === "user" ? styles.userMessage : styles.botMessage}`}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div className={`${styles.message} ${styles.botMessage}`}>
                                <div className={styles.spinner}></div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Escribe un mensaje..."
                            className={styles.input}
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} className={styles.sendButton} disabled={isLoading || !input.trim()}>
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
