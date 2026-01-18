import Card from "./Card"

interface Feature {
  title: string
  description: string
}

export default function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 32,
      }}
    >
      {features.map((f) => (
        <Card key={f.title} title={f.title} description={f.description} />
      ))}
    </div>
  )
}

