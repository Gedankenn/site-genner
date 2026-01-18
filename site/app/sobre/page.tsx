import Image from "next/image"

export const metadata = {
  title: "Sobre | Genner",
  description:
    "Conheça Genner, psicólogo clínico com atuação em psicoterapia, avaliação neuropsicológica e contexto hospitalar.",
}

export default function Sobre() {
  return (
    <main>
      {/* HERO SOBRE */}
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
            padding: "140px 24px 100px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 90,
            alignItems: "center",
          }}
        >
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
              Sobre mim
            </span>

            <h1
              style={{
                fontSize: 46,
                lineHeight: 1.15,
                marginBottom: 26,
                letterSpacing: -0.5,
              }}
            >
              Psicologia como espaço de encontro, cuidado e reconstrução.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: "#4F5F5A",
                maxWidth: 560,
              }}
            >
              Meu trabalho nasce do encontro entre ciência, escuta e humanidade.
              Ao longo da minha trajetória, compreendi que cuidar da saúde mental
              vai muito além de técnicas: envolve presença, respeito pela
              história de cada pessoa e compromisso ético com o sofrimento
              humano.
            </p>
          </div>

          {/* FOTO PRINCIPAL */}
          <div
            style={{
              width: "100%",
              maxWidth: 420,
              height: 520,
              position: "relative",
              borderRadius: 36,
              overflow: "hidden",
              boxShadow: "0 30px 70px rgba(0,0,0,0.22)",
            }}
          >
            <Image
              src="/images/genner1.jpeg"
              alt="Genner psicólogo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* TEXTO HUMANIZADO */}
      <section>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px 24px 40px",
          }}
        >
          <p style={paragraph}>
            Sou psicólogo há mais de cinco anos, com atuação em psicoterapia,
            Terapia Cognitivo-Comportamental, Terapia do Esquema e avaliação
            neuropsicológica. Minha formação e prática clínica sempre caminharam
            junto da busca por compreender o ser humano de forma integral — em
            seus pensamentos, emoções, comportamentos e histórias.
          </p>

          <p style={paragraph}>
            Durante os anos de pandemia, atuei como residente em contexto
            hospitalar, com experiência direta em UTI e cuidados paliativos.
            Esse período marcou profundamente minha trajetória, fortalecendo em
            mim a importância do cuidado, da escuta sensível e da presença
            profissional diante do sofrimento, do luto e da finitude.
          </p>

          <p style={paragraph}>
            Tenho pós-graduação em Psicologia Hospitalar e Cuidados Paliativos e
            minha área de maior especialização é a avaliação neuropsicológica,
            campo no qual atuo e estudo desde antes da minha formação. Acredito
            em uma psicologia que acolhe, orienta e constrói, junto com cada
            pessoa, caminhos possíveis para mais consciência, autonomia e
            qualidade de vida.
          </p>
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <section>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "60px 24px 120px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 26,
          }}
        >
          {["genner1.jpeg", "genner2.jpeg", "genner3.jpeg", "genner4.jpeg"].map(
            (img) => (
              <div
                key={img}
                style={{
                  position: "relative",
                  height: 280,
                  borderRadius: 28,
                  overflow: "hidden",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
                }}
              >
                <Image
                  src={`/images/${img}`}
                  alt="Genner"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )
          )}
        </div>
      </section>
    </main>
  )
}

const paragraph: React.CSSProperties = {
  fontSize: 17.5,
  lineHeight: 1.85,
  color: "#3F4F4B",
  marginBottom: 26,
}

