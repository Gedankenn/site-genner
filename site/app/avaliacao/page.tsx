import Image from "next/image"

export const metadata = {
  title: "Avaliação Neuropsicológica | Genner",
  description:
    "Avaliação neuropsicológica clínica para investigação das funções cognitivas, emocionais e comportamentais.",
}

export default function Avaliacao() {
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
              Avaliação neuropsicológica
            </span>

            <h1
              style={{
                fontSize: 46,
                lineHeight: 1.15,
                marginBottom: 26,
                letterSpacing: -0.5,
              }}
            >
              Compreender para cuidar melhor.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                color: "#4F5F5A",
                maxWidth: 560,
              }}
            >
              A avaliação neuropsicológica é um processo clínico aprofundado que
              investiga o funcionamento das funções cognitivas, emocionais e
              comportamentais. Seu objetivo é compreender como o cérebro está
              operando no dia a dia, auxiliando no diagnóstico, no planejamento
              terapêutico e na orientação adequada para cada pessoa.
            </p>
          </div>

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
              src="/images/genner2.jpeg"
              alt="Avaliação neuropsicológica"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* O QUE É */}
      <section>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px 24px 60px",
          }}
        >
          <h2 style={title}>O que é a avaliação neuropsicológica?</h2>

          <p style={paragraph}>
            Trata-se de um conjunto de entrevistas, testes e observações
            clínicas que investigam áreas como atenção, memória, linguagem,
            funções executivas, raciocínio, percepção, emoção e comportamento.
            O processo é conduzido de forma ética, cuidadosa e individualizada,
            respeitando a história, o ritmo e as necessidades de cada pessoa.
          </p>

          <p style={paragraph}>
            Mais do que rotular, a avaliação busca compreender. Ela permite
            identificar potencialidades, dificuldades e padrões de
            funcionamento, auxiliando na construção de intervenções mais
            precisas e eficazes.
          </p>
        </div>
      </section>

      {/* PARA QUEM */}
      <section
        style={{
          background:
            "linear-gradient(180deg, #F1F6F4 0%, #F7F6F3 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "90px 24px",
          }}
        >
          <h2 style={title}>Para quem a avaliação é indicada?</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 30,
              marginTop: 40,
            }}
          >
            {[
              "Dificuldades de atenção, memória ou aprendizagem",
              "Suspeitas de TDAH, TEA, demências ou transtornos neurológicos",
              "Alterações emocionais, comportamentais ou cognitivas",
              "Avaliação para planejamento terapêutico ou escolar",
              "Quadros pós-AVC, traumatismo craniano ou doenças neurológicas",
              "Processos de diagnóstico diferencial",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "linear-gradient(160deg, #7FA99B, #AFCBC2)",
                  padding: 28,
                  borderRadius: 24,
                  color: "#1F3F38",
                  boxShadow: "0 16px 35px rgba(0,0,0,0.18)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px 24px",
          }}
        >
          <h2 style={title}>Como funciona o processo?</h2>

          <p style={paragraph}>
            A avaliação é realizada em etapas, que podem incluir entrevista
            inicial, aplicação de testes, sessões de observação, análise dos
            resultados e devolutiva. Ao final, é elaborado um laudo técnico,
            acompanhado de explicação clara e orientações personalizadas.
          </p>

          <p style={paragraph}>
            Todo o processo é conduzido com cuidado, ética e compromisso com a
            compreensão integral do indivíduo, respeitando sempre os limites e
            objetivos da avaliação.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #5F7C73 0%, #2F4F47 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "100px 24px",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ fontSize: 34, marginBottom: 18 }}>
            Precisa de uma avaliação neuropsicológica?
          </h2>

          <p style={{ opacity: 0.9, marginBottom: 34, lineHeight: 1.7 }}>
            Entre em contato para esclarecer dúvidas, entender o processo e
            verificar a melhor forma de atendimento.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              padding: "14px 34px",
              borderRadius: 18,
              background: "white",
              color: "#2F4F47",
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 12px 28px rgba(0,0,0,0.25)",
            }}
          >
            Entrar em contato
          </a>
        </div>
      </section>
    </main>
  )
}

const title: React.CSSProperties = {
  fontSize: 32,
  marginBottom: 22,
}

const paragraph: React.CSSProperties = {
  fontSize: 17.5,
  lineHeight: 1.85,
  color: "#3F4F4B",
  marginBottom: 24,
}

