import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Genner | Psicologia clínica e Avaliação Neuropsicológica",
  description:
    "Psicologia clínica, terapia cognitivo-comportamental, terapia do esquema e avaliação neuropsicológica.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          fontFamily:
            "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
          color: "#2F3E3A",
          background:
            "radial-gradient(circle at top left, #EEF4F1 0%, #F7F6F3 55%)",
        }}
      >
        {/* HEADER */}
        <header
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 50,
            backdropFilter: "blur(14px)",
            background: "rgba(95,124,115,0.85)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "18px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <strong style={{ fontSize: 18, color: "white", letterSpacing: 1 }}>
              Genner
            </strong>

            <nav
              style={{
                display: "flex",
                gap: 28,
                fontSize: 14,
                letterSpacing: 0.4,
              }}
            >
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                Início
              </a>
              <a
                href="/sobre"
                style={{ color: "white", textDecoration: "none" }}
              >
                Sobre
              </a>
              <a
                href="/avaliacao"
                style={{ color: "white", textDecoration: "none" }}
              >
                Avaliação
              </a>
              <a
                href="/videos"
                style={{ color: "white", textDecoration: "none" }}
              >
                Vídeos
              </a>
            </nav>
          </div>
        </header>

        {/* ESPAÇO PRO HEADER FIXO */}
        <div style={{ height: 90 }} />

        {/* CONTEÚDO */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 120,
            background:
              "linear-gradient(135deg, #4F6F66 0%, #2F4F47 100%)",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "90px 24px 50px",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr 1fr",
              gap: 60,
            }}
          >
            <div>
              <h3 style={{ marginBottom: 14 }}>Genner</h3>
              <p style={{ opacity: 0.85, lineHeight: 1.7, maxWidth: 360 }}>
                Psicologia clínica, avaliação neuropsicológica e atuação em
                contextos de sofrimento, com escuta, ética e cuidado humano.
              </p>
            </div>

            <div>
              <strong>Navegação</strong>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginTop: 14,
                  lineHeight: 2.2,
                  opacity: 0.9,
                }}
              >
                <li>
                  <a href="/" style={{ color: "white", textDecoration: "none" }}>
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="/sobre"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="/avaliacao"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Avaliação
                  </a>
                </li>
                <li>
                  <a
                    href="/videos"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Vídeos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong>Contato</strong>
              <p style={{ marginTop: 14, opacity: 0.85, lineHeight: 1.8 }}>
                Atendimento presencial e online.<br />
                Entre em contato para agendamento.
              </p>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              textAlign: "center",
              padding: "26px 16px",
              fontSize: 13,
              opacity: 0.8,
            }}
          >
            © {new Date().getFullYear()} Genner — Psicologia
          </div>
        </footer>
      </body>
    </html>
  )
}

