import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contato | Genner",
  description: "Entre em contato para agendamentos, dúvidas ou informações.",
}

export default function Contato() {
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
            maxWidth: 1100,
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
            Contato
          </span>

          <h1 style={{ fontSize: 44, marginBottom: 18 }}>
            Um primeiro passo já é cuidado.
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
            Se você sente que precisa de apoio, orientação ou deseja entender
            melhor como funciona o acompanhamento psicológico ou a avaliação
            neuropsicológica, fique à vontade para entrar em contato.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "90px 24px 140px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* FORM */}
          <ContactForm />

          {/* BLOCO LATERAL */}
          <div>
            <h3 style={{ fontSize: 28, marginBottom: 18 }}>
              Atendimento com escuta, ética e cuidado.
            </h3>

            <p style={sideText}>
              O contato inicial é um espaço para você tirar dúvidas, entender
              como funciona o processo terapêutico ou a avaliação
              neuropsicológica e sentir se esse é o momento certo para iniciar
              um acompanhamento.
            </p>

            <p style={sideText}>
              Atendimentos presenciais e online. Caso prefira, você também pode
              entrar em contato diretamente por WhatsApp.
            </p>

            <div
              style={{
                marginTop: 36,
                padding: 28,
                borderRadius: 24,
                background: "rgba(127,169,155,0.25)",
              }}
            >
              <strong>📍 Atendimento</strong>
              <p style={{ marginTop: 10, lineHeight: 1.6 }}>
                • Psicoterapia<br />
                • Avaliação neuropsicológica<br />
                • Modalidade online e presencial
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const sideText: React.CSSProperties = {
  fontSize: 16.5,
  lineHeight: 1.8,
  color: "#3F4F4B",
  marginBottom: 20,
}

