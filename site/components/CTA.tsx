interface CTAProps {
  title?: string
  subtitle?: string
  buttonText?: string
  href?: string
}

export default function CTA({
  title = "Se sentir que é o momento de cuidar, estou aqui.",
  subtitle = "O primeiro contato é um espaço para conversar, tirar dúvidas e entender como posso te ajudar.",
  buttonText = "Entrar em contato",
  href = "/contato",
}: CTAProps) {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #5F7C73 0%, #2F4F47 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "90px 24px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: 34, marginBottom: 18 }}>
          {title}
        </h2>

        <p
          style={{
            opacity: 0.9,
            marginBottom: 34,
            lineHeight: 1.7,
            fontSize: 17,
          }}
        >
          {subtitle}
        </p>

        <a
          href={href}
          style={{
            display: "inline-block",
            padding: "14px 36px",
            borderRadius: 20,
            background: "white",
            color: "#2F4F47",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: 0.3,
            boxShadow: "0 14px 30px rgba(0,0,0,0.3)",
          }}
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}

