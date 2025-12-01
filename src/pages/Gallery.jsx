function Gallery() {
  const patterns = [
    { id: 1, name: 'STRIPES', className: 'pattern-1' },
    { id: 2, name: 'CHECKERS', className: 'pattern-2' },
    { id: 3, name: 'DOTS', className: 'pattern-3' },
    { id: 4, name: 'GRID', className: 'pattern-4' },
    { id: 5, name: 'DIAGONAL', className: 'pattern-5' },
    { id: 6, name: 'BLOCKS', className: 'pattern-6' },
  ]

  return (
    <main className="main-content">
      <section className="page-header">
        <h1>GALLERY</h1>
        <p>A collection of boxy masterpieces</p>
      </section>

      <section className="gallery-grid">
        {patterns.map((pattern) => (
          <div key={pattern.id} className={`gallery-item ${pattern.className}`}>
            <div className="gallery-label">{pattern.name}</div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Gallery
