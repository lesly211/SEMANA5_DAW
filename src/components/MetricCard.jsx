/**
 * MetricCard.jsx — Tarjeta individual de métrica
 *
 * CONCEPTO CLAVE: Componente reutilizable
 * Este componente es "tonto" (dumb component): solo muestra datos.
 * No tiene estado propio. Recibe todo por props desde Dashboard.
 *
 * ESTRATEGIA DE ESTILADO: CSS Modules (*.module.css)
 * Los class names son únicos en build, evitando colisiones globales.
 * Se importa como objeto y se usa: className={styles.card}
 *
 * @param {Object} props
 * @param {string} props.label - Descripción de la métrica
 * @param {string} props.value - Valor a mostrar
 * @param {string} props.icon  - Emoji representativo
 */

import styles from '../styles/MetricCard.module.css'

function MetricCard({ label, value, icon }) {
  return (
    <div className={styles.card}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default MetricCard
