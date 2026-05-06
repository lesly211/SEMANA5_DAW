/**
 * ProductGrid.jsx — Grilla de productos
 *
 * @param {Object} props
 * @param {Array}  props.products - Lista de productos del catálogo
 */

import ProductCard from './ProductCard.jsx'
import styles from '../styles/ProductGrid.module.css'

function ProductGrid({ products }) {
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros productos destacados</h2>
        <p className={styles.subtitle}>
          Encuentra los mejores electrodomésticos con garantía oficial
        </p>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
