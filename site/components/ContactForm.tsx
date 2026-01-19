"use client"

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const nome = (form.elements.namedItem("nome") as HTMLInputElement).value
        const email = (form.elements.namedItem("email") as HTMLInputElement).value
        const telefone = (form.elements.namedItem("telefone") as HTMLInputElement).value
        const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value

        const texto = `Olá, me chamo ${nome}.%0AEmail: ${email}%0ATelefone: ${telefone}%0A%0AMensagem:%0A${mensagem}`

        window.open(
          `https://wa.me/5546999227432?text=${texto}`,
          "_blank"
        )
      }}
      style={{
        background: "linear-gradient(160deg, #7FA99B, #AFCBC2)",
        padding: 48,
        borderRadius: 36,
        boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
      }}
    >
      <h2 style={{ marginBottom: 26, color: "#1F3F38" }}>
        Enviar mensagem
      </h2>

      <Field label="Nome" name="nome" placeholder="Seu nome" />
      <Field label="E-mail" name="email" placeholder="seuemail@email.com" />
      <Field label="Telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" />

      <div style={{ marginBottom: 24 }}>
        <label style={labelStyle}>Mensagem</label>
        <textarea
          name="mensagem"
          placeholder="Escreva sua mensagem..."
          rows={5}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: 10,
          padding: "14px 32px",
          borderRadius: 16,
          border: "none",
          background: "linear-gradient(135deg, #2F4F47, #1F3F38)",
          color: "white",
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0 10px 22px rgba(0,0,0,0.25)",
        }}
      >
        Enviar mensagem
      </button>
    </form>
  )
}

/* COMPONENTES */

function Field({
  label,
  placeholder,
  name,
}: {
  label: string
  placeholder: string
  name: string
}) {
  return (
    <div style={{ marginBottom: 22 }}>
      <label style={labelStyle}>{label}</label>
      <input name={name} placeholder={placeholder} style={inputStyle} />
    </div>
  )
}

/* STYLES */

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 13,
  letterSpacing: 0.5,
  color: "#1F3F38",
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.15)",
  fontSize: 14,
  outline: "none",
}

