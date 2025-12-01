import { useNavigate } from 'react-router-dom'
import StripeAnimation from '../components/StripeAnimation'

function Home() {
  const navigate = useNavigate()

  return (
    <main className="main-content">
      <section className="hero">
        <h1>WELCOME TO THE BOXY ZONE</h1>
        <p className="tagline">Where everything is sharp, bold, and perfectly squared</p>
        <button className="cta-btn" onClick={() => navigate('/about')}>
          EXPLORE NOW
        </button>
      </section>

      <StripeAnimation type="horizontal" />

      <section className="features">
        <div className="feature-card">
          <div className="icon">◢</div>
          <h3>BOLD DESIGN</h3>
          <p>Sharp edges and strong contrasts that make a statement</p>
        </div>
        <div className="feature-card">
          <div className="icon">▓</div>
          <h3>PIXEL PERFECT</h3>
          <p>Every element aligned to the grid with precision</p>
        </div>
        <div className="feature-card">
          <div className="icon">◣</div>
          <h3>RETRO VIBES</h3>
          <p>Classic black and white aesthetic that never goes out of style</p>
        </div>
      </section>

      <StripeAnimation type="vertical" />

      <section className="content-box">
        <h2>WHAT IS BOXY?</h2>
        <p>
          Boxy is a design philosophy that embraces geometric simplicity, bold borders, and
          cartoonish shadows. It's inspired by comic books, retro games, and brutalist web design.
        </p>
        <div className="stats-grid">
          <div className="stat">
            <div className="stat-number">100%</div>
            <div className="stat-label">BOXY</div>
          </div>
          <div className="stat">
            <div className="stat-number">0%</div>
            <div className="stat-label">CURVES</div>
          </div>
          <div className="stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">STYLE</div>
          </div>
        </div>
      </section>

      <StripeAnimation type="diagonal" />
    </main>
  )
}

export default Home
