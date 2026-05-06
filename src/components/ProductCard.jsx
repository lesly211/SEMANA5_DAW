/**
 *
 * @param {Object} props
 * @param {Object} props.product - Objeto con datos del producto
 * @param {number} props.product.id
 * @param {string} props.product.name
 * @param {string} props.product.category
 * @param {number} props.product.price
 * @param {number|null} props.product.oldPrice
 * @param {number} props.product.rating
 * @param {string} props.product.emoji
 * @param {string|null} props.product.badge
 * @param {string|null} props.product.badgeColor
 */

import styles from '../styles/ProductCard.module.css'

function ProductCard({ product }) {
  const { name, category, price, oldPrice, rating, emoji, badge, badgeColor } = product

  // Renderizado condicional: el descuento solo se muestra si hay precio anterior
  const discount = oldPrice
    ? Math.round(((oldPrice - price) / oldPrice) * 100)
    : null

  return (
    <article className={styles.card}>

      {/* Badge condicional */}
      {badge && (
        <span
          className={styles.badge}
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </span>
      )}

      {/* Imagen/emoji del producto */}
      <div className={styles.imageArea}>
        <span className={styles.emoji}>{emoji}</span>
      </div>

      {/* Información del producto */}
      <div className={styles.info}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>

        {/* Rating con estrellas */}
        <div className={styles.rating}>
          {'★'.repeat(Math.floor(rating))}
          <span className={styles.ratingNum}>{rating}</span>
        </div>

        {/* Precios */}
        <div className={styles.prices}>
          {oldPrice && (
            <span className={styles.oldPrice}>
              S/ {oldPrice.toLocaleString()}
            </span>
          )}
          <span className={styles.price}>S/ {price.toLocaleString()}</span>
          {discount && (
            <span className={styles.discount}>-{discount}%</span>
          )}
        </div>
      </div>

      {/* Botón de acción */}
      <button className={styles.btn}>Agregar al carrito</button>

    </article>
  )
}

export default ProductCard
