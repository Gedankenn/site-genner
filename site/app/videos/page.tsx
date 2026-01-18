"use client"
import { useEffect } from "react"

export default function Videos() {

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section style={{
      maxWidth: 900,
      margin: "0 auto",
      padding: "100px 24px"
    }}>
      <h1 style={{ fontSize: 36, marginBottom: 16 }}>
        Vídeos e conteúdos
      </h1>

      <p style={{ marginBottom: 32, color: "#555" }}>
        Acompanhe meus conteúdos mais recentes no Instagram.
      </p>

      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/COLE_LINK_AQUI/"
        data-instgrm-version="14"
      />
    </section>
  )
}

