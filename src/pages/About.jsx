function About() {
  return (
    <main className="main-content">
      <section className="page-header">
        <h1>ABOUT US</h1>
        <p>Learn more about the boxy philosophy</p>
      </section>

      <section className="content-box">
        <h2>OUR STORY</h2>
        <p>
          Founded in 2025, Boxy emerged from a simple idea: what if everything was just... boxes?
          No curves, no gradients, just pure geometric perfection.
        </p>
      </section>

      <section className="content-box">
        <h2>OUR MISSION</h2>
        <p>To bring bold, unapologetic design to the web. We believe in:</p>
        <ul className="boxy-list">
          <li>▓ Strong visual hierarchy</li>
          <li>▓ Maximum contrast</li>
          <li>▓ Zero unnecessary elements</li>
          <li>▓ 100% geometric shapes</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>THE TEAM</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="avatar">◢</div>
            <h3>BOX MASTER</h3>
            <p>Chief Design Officer</p>
          </div>
          <div className="team-card">
            <div className="avatar">▓</div>
            <h3>PIXEL PUSHER</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <div className="avatar">◣</div>
            <h3>GRID GURU</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
