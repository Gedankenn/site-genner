import Image from "next/image"

interface HeroProps {
  title: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
}

export default function Hero({
  title,
  description,
  image,
  ctaText,
  ctaLink,
}: HeroProps) {
  return (
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
          padding: "140px 24px 120px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 90,
          alignItems: "center",
        }}
      >
        {/* TEXTO */}
        <div>
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
            Psicologia clínica • Avaliação neuropsicológica
          </span>

          <h1
            style={{
              fontSize: 48,
              lineHeight: 1.15,
              marginBottom: 22,
              letterSpacing: -0.5,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "#4F5F5A",
              maxWidth: 520,
              marginBottom: 38,
            }}
          >
            {description}
          </p>

          <a
            href={ctaLink}
            style={{
              display: "inline-block",
              padding: "14px 30px",
              borderRadius: 16,
              background: "linear-gradient(135deg, #5F7C73, #7FA99B)",
              color: "white",
              textDecoration: "none",
              boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
              fontSize: 15,
              letterSpacing: 0.3,
            }}
          >
            {ctaText}
          </a>
        </div>

        {/* IMAGEM */}
        <div
          style={{
            width: "100%",
            maxWidth: 440,
            height: 560,
            position: "relative",
            borderRadius: 36,
            overflow: "hidden",
            background: "#E6F1ED",
            boxShadow:
              "0 30px 70px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.6)",
          }}
        >
          <Image
            src={image}
            alt="Imagem principal"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  )
}

