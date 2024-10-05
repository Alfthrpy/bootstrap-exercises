export default function About() {
  return (
    <>
      {/* Reuse the same navbar */}

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1 className="mb-4">Tentang StockU</h1>
            <p className="lead mb-4">
              StockU didirikan pada tahun 2024 dengan visi untuk memudahkan para
              pebisnis dalam mengelola produk mereka secara efisien dan modern.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Visi Kami</h3>
            <p>
              Menjadi platform manajemen produk terdepan yang membantu bisnis
              berkembang melalui teknologi yang inovatif dan mudah digunakan.
            </p>
          </div>
          <div className="col-md-6">
            <h3>Misi Kami</h3>
            <p>
              Menyediakan solusi manajemen produk yang efisien, terintegrasi,
              dan dapat diandalkan untuk membantu bisnis mencapai potensi
              maksimalnya.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3>Tim Kami</h3>
            <div className="row mt-4">
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="CEO"
                  className="rounded-circle img-fluid mb-3"
                  style={{ height: '150px', objectFit: 'cover',overflow: 'hidden', borderRadius: '50%' }} 
                />
                <h5>John Doe</h5>
                <p>CEO & Founder</p>
              </div>
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="CTO"
                  className="rounded-circle img-fluid mb-3"
                  style={{ height: '150px', objectFit: 'cover',overflow: 'hidden', borderRadius: '50%' }} 
                />
                <h5>Jane Smith</h5>
                <p>CTO</p>
              </div>
              <div className="col-md-4">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="COO"
                  className="rounded-circle img-fluid mb-3"
                  style={{height: '150px', objectFit: 'cover',overflow: 'hidden', borderRadius: '50%' }} 
                />
                <h5>Mike Johnson</h5>
                <p>COO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
