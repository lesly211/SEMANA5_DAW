/**
 * @param {Object} props
 * @param {Object} props.storeInfo
 */
function Footer({ storeInfo }) {
  const footerStyle = {
    background: 'var(--color-primary)',
    color: '#9ca3af',
    padding: '3rem 1.5rem',
    textAlign: 'center',
  }

  const brandStyle = {
    fontSize: '1.3rem',
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-accent)',
    marginBottom: '0.5rem',
  }

  const linkStyle = {
    color: '#9ca3af',
    margin: '0 1rem',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
  }

  return (
    <footer id="contacto" style={footerStyle}>
      <p style={brandStyle}>⚡ {storeInfo.name}</p>
      <p style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
        📍 {storeInfo.location} &nbsp;|&nbsp; 📞 {storeInfo.phone}
      </p>
      <nav>
        <a href="#inicio" style={linkStyle}>Inicio</a>
        <a href="#productos" style={linkStyle}>Productos</a>
        <a href="#ofertas" style={linkStyle}>Ofertas</a>
      </nav>
      <p style={{ marginTop: '2rem', fontSize: '0.78rem', color: '#6b7280' }}>
        © {new Date().getFullYear()} {storeInfo.name}. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
