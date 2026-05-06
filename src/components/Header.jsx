/**
 * Header.jsx — Barra de navegación superior
 * @param {Object} props
 * @param {Object} props.storeInfo - Información de la tienda
 * @param {string} props.storeInfo.name - Nombre de la tienda
 * @param {string} props.storeInfo.phone - Teléfono de contacto
 */
import styles from '../styles/Header.module.css'

function Header({ storeInfo }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          <span className={styles.logoText}>{storeInfo.name}</span>
        </div>

        {/* Navegación */}
        <nav className={styles.nav}>
          <a href="#inicio" className={styles.navLink}>Inicio</a>
          <a href="#productos" className={styles.navLink}>Productos</a>
          <a href="#ofertas" className={styles.navLink}>Ofertas</a>
          <a href="#contacto" className={styles.navLink}>Contacto</a>
        </nav>

        {/* Info de contacto */}
        <div className={styles.contact}>
          <span>📞 {storeInfo.phone}</span>
        </div>

      </div>
    </header>
  )
}

export default Header
