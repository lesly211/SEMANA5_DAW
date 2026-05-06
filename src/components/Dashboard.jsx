/**
 * Dashboard.jsx — Panel de métricas de la tienda
 *
 * CONCEPTO CLAVE: Props + Composición
 * Recibe un array de métricas y renderiza un <MetricCard> por cada una.
 * Demuestra el flujo unidireccional de datos: App → Dashboard → MetricCard
 *
 * @param {Object} props
 * @param {Array}  props.metrics - Array de objetos con métricas de la tienda
 * @param {string} props.metrics[].label - Etiqueta descriptiva
 * @param {string} props.metrics[].value - Valor numérico/texto
 * @param {string} props.metrics[].icon  - Emoji/icono
 */

import MetricCard from './MetricCard.jsx'
import styles from '../styles/Dashboard.module.css'

function Dashboard({ metrics }) {
  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestra tienda en números</h2>
        <div className={styles.grid}>
          {/* .map() genera un MetricCard por cada métrica */}
          {/* La prop key es obligatoria en listas (React necesita identificar cada elemento) */}
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              label={metric.label}
              value={metric.value}
              icon={metric.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Dashboard
