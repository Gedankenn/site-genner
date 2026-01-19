import Hero from "@/components/Hero"
import Section from "@/components/Section"
import FeatureGrid from "@/components/FeatureGrid"

export default function Home() {
  return (
    <>
      <Hero
        title="Um espaço de cuidado, escuta e transformação."
        description="Psicólogo há mais de 5 anos. Atuação em Terapia Cognitivo-Comportamental, Terapia do Esquema e Avaliação Neuropsicológica."
        image="/images/genner.jpeg"
        ctaText="Entrar em contato"
        ctaLink="/contato"
      />

      <Section
        title="Áreas de atuação"
        subtitle="Atendimentos baseados em ciência, experiência clínica e cuidado humano."
        background="radial-gradient(circle at top left, #E1ECE7, #F4F3EF 65%)"
      >
        <FeatureGrid
          features={[
            {
              title: "Psicoterapia",
              description:
                "Atendimento clínico baseado na Terapia Cognitivo-Comportamental e Terapia do Esquema.",
            },
            {
              title: "Avaliação Neuropsicológica",
              description:
                "Investigação aprofundada das funções cognitivas, emocionais e comportamentais.",
            },
            {
              title: "Experiência hospitalar",
              description:
                "Atuação em UTI, cuidados paliativos, luto e contextos de sofrimento intenso.",
            },
          ]}
        />
      </Section>
    </>
  )
}

