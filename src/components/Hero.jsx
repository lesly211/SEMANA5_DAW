/**
 * Hero.jsx — Sección de bienvenida
 *
 * CONCEPTO CLAVE: "children" prop
 * Este componente usa props.children para renderizar
 * cualquier contenido que se le pase entre sus etiquetas.
 * En App.jsx se usa así:
 *   <Hero>
 *     <h1>Texto</h1>
 *     <p>Subtítulo</p>
 *   </Hero>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido anidado (JSX)
 */

function Hero({ children }) {
  // Estilos inline para demostrar esa estrategia de estilado
  const heroStyle = {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    color: 'white',
    padding: '5rem 1.5rem',
    textAlign: 'center',
  }

  const contentStyle = {
    maxWidth: '700px',
    margin: '0 auto',
  }

  const buttonStyle = {
    marginTop: '2rem',
    padding: '0.9rem 2.5rem',
    background: 'var(--color-secondary)',
    color: 'white',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'transform 0.2s, background 0.2s',
    display: 'inline-block',
  }

  return (
    <section id="inicio" style={heroStyle}>
      <div style={contentStyle}>
        {/* children: aquí se insertan los elementos pasados desde App.jsx */}
        {children}
        <button
          style={buttonStyle}
          onMouseOver={e => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={e => (e.target.style.transform = 'scale(1)')}
        >
          Ver catálogo completo →
        </button>
      </div>
    </section>
  )
}

export default Hero
