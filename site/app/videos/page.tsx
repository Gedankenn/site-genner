"use client"

import { useEffect, useRef, useState } from "react"
import CTA from "@/components/CTA"

const VIDEOS = [
    "https://www.instagram.com/genner_psicologo/reel/DTktmTmESrh/",
    "https://www.instagram.com/genner_psicologo/reel/C-nfQ4kxIVF/",
    "https://www.instagram.com/genner_psicologo/reel/C93OJTAsHNW/",
    "https://www.instagram.com/genner_psicologo/reel/C-TawO5RHid/",
]

export default function Videos() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background:
            "radial-gradient(circle at top left, #E6F1ED 0%, #F6F5F2 60%)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "140px 24px 90px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              marginBottom: 16,
              padding: "6px 14px",
              borderRadius: 20,
              background: "rgba(127,169,155,0.25)",
              color: "#2F4F47",
              fontSize: 13,
              letterSpacing: 0.6,
            }}
          >
            Conteúdos e reflexões
          </span>

          <h1 style={{ fontSize: 44, marginBottom: 18 }}>
            Espaços de reflexão, consciência e cuidado.
          </h1>

          <p
            style={{
              maxWidth: 620,
              margin: "0 auto",
              fontSize: 18,
              lineHeight: 1.7,
              color: "#4F5F5A",
            }}
          >
            Aqui compartilho reflexões, orientações e conteúdos sobre saúde
            mental, comportamento e processos humanos. Que esses materiais
            possam te ajudar a pensar, sentir e se compreender melhor.
          </p>

          <a
            href="https://www.instagram.com/genner_psicologo"
            target="_blank"
            style={{
              display: "inline-block",
              marginTop: 28,
              padding: "12px 26px",
              borderRadius: 16,
              background: "linear-gradient(135deg, #5F7C73, #7FA99B)",
              color: "white",
              textDecoration: "none",
              fontSize: 14,
              boxShadow: "0 12px 26px rgba(0,0,0,0.2)",
            }}
          >
            Seguir no Instagram
          </a>
        </div>
      </section>

      {/* GRID DE VÍDEOS */}
      <section>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "100px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 32,
          }}
        >
          {VIDEOS.map((link, i) => (
            <VideoCard key={i} link={link} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <CTA
        title="Se algum conteúdo te tocou, podemos conversar."
        subtitle="Caso queira tirar dúvidas, entender melhor algum tema ou iniciar um acompanhamento, estou à disposição."
        buttonText="Entrar em contato"
        href="/contato"
      />
    </main>
  )
}

/* ---------------- COMPONENTES ---------------- */

function VideoCard({ link }: { link: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)
  }, [visible])

  return (
    <div
      ref={ref}
      style={{
        background: "linear-gradient(160deg, #7FA99B, #AFCBC2)",
        borderRadius: 28,
        padding: 18,
        minHeight: 420,
        boxShadow: "0 22px 50px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {visible ? (
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={link}
          data-instgrm-version="14"
          style={{ width: "100%", margin: 0 }}
        />
      ) : (
        <span style={{ color: "#1F3F38", opacity: 0.7 }}>
          Carregando conteúdo…
        </span>
      )}
    </div>
  )
}

