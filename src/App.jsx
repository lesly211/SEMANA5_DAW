/**
 * App.jsx — Componente raíz / orquestador
 * Importa todos los componentes hijos y pasa datos mediante props.
 * NO contiene lógica de negocio, solo organiza la vista.
 */

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Dashboard from './components/Dashboard.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'

// ==========================================
// DATOS (normalmente vendrían de una API)
// ==========================================

const storeInfo = {
  name: 'ElectroHogar',
  slogan: 'Calidad que dura, precio que convence',
  location: 'Huancayo, Junín',
  phone: '(064) 234-567',
}

const metrics = [
  { label: 'Productos disponibles', value: '1,240', icon: '📦' },
  { label: 'Clientes satisfechos', value: '8,500+', icon: '⭐' },
  { label: 'Años de experiencia', value: '15', icon: '🏆' },
  { label: 'Marcas reconocidas', value: '30+', icon: '🔖' },
]

const products = [
  {
    id: 1,
    name: 'Refrigeradora Samsung 350L',
    category: 'Refrigeración',
    price: 1899,
    oldPrice: 2200,
    rating: 4.8,
    emoji: '🧊',
    badge: 'Más vendido',
    badgeColor: '#e94560',
  },
  {
    id: 2,
    name: 'Lavadora LG 10kg Inverter',
    category: 'Lavado',
    price: 1450,
    oldPrice: 1700,
    rating: 4.7,
    emoji: '🫧',
    badge: 'Oferta',
    badgeColor: '#f5a623',
  },
  {
    id: 3,
    name: 'Smart TV Samsung 55" 4K',
    category: 'Entretenimiento',
    price: 2199,
    oldPrice: null,
    rating: 4.9,
    emoji: '📺',
    badge: 'Nuevo',
    badgeColor: '#10b981',
  },
  {
    id: 4,
    name: 'Microondas Panasonic 30L',
    category: 'Cocina',
    price: 349,
    oldPrice: 420,
    rating: 4.5,
    emoji: '🍳',
    badge: 'Oferta',
    badgeColor: '#f5a623',
  },
  {
    id: 5,
    name: 'Cocina Mabe 6 hornillas',
    category: 'Cocina',
    price: 799,
    oldPrice: null,
    rating: 4.6,
    emoji: '🔥',
    badge: null,
    badgeColor: null,
  },
  {
    id: 6,
    name: 'Licuadora Oster Pro 1200W',
    category: 'Pequeños',
    price: 189,
    oldPrice: 230,
    rating: 4.4,
    emoji: '🥤',
    badge: 'Oferta',
    badgeColor: '#f5a623',
  },
]

// ==========================================
// COMPONENTE RAÍZ
// ==========================================

function App() {
  return (
    <>
      {/* Componente hijo recibe props: info de la tienda */}
      <Header storeInfo={storeInfo} />

      {/* Hero recibe el slogan como children */}
      <Hero>
        <h1>{storeInfo.slogan}</h1>
        <p>Electrodomésticos con garantía en {storeInfo.location}</p>
      </Hero>

      {/* Dashboard recibe métricas como prop */}
      <Dashboard metrics={metrics} />

      {/* ProductGrid recibe lista de productos como prop */}
      <ProductGrid products={products} />

      {/* Footer recibe storeInfo como prop */}
      <Footer storeInfo={storeInfo} />
    </>
  )
}

export default App
