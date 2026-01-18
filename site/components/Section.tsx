interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  background?: string
}

export default function Section({
  children,
  title,
  subtitle,
  background = "#F6F5F2",
}: SectionProps) {
  return (
    <section style={{ background }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        {title && (
          <h2 style={{ fontSize: 34, marginBottom: 12 }}>{title}</h2>
        )}

        {subtitle && (
          <p style={{ color: "#555", marginBottom: 60 }}>{subtitle}</p>
        )}

        {children}
      </div>
    </section>
  )
}

