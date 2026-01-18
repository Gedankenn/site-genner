interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div
      style={{
        position: "relative",
        padding: "42px 38px",
        borderRadius: 34,

        /* COR PRESENTE, MAS SUAVE */
        background: "linear-gradient(160deg, #7FA99B 0%, #AFCBC2 100%)",

        /* LUZ INTERNA */
        boxShadow: `
          inset 0 1px 0 rgba(255,255,255,0.6),
          0 18px 40px rgba(0,0,0,0.18)
        `,

        overflow: "hidden",
      }}
    >
      {/* camada de luz orgânica */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.45), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* conteúdo */}
      <div style={{ position: "relative" }}>
        <h3
          style={{
            marginBottom: 14,
            fontSize: 22,
            fontWeight: 600,
            color: "#1F3F38",
            letterSpacing: 0.3,
          }}
        >
          {title}
        </h3>

        <p
          style={{
            color: "#2F4F48",
            lineHeight: 1.75,
            fontSize: 15.5,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

