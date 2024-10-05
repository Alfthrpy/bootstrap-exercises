"use client";

export default function Home() {
  return (
    <main>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/scott-graham-5fNmWej4tAA-unsplash.jpg"
              className="d-block w-100"
              alt="Dashboard StockU"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>Manajemen Stok Modern</h2>
              <p>Transformasi Digital untuk Bisnis Anda</p>
              <button className="btn btn-primary btn-lg px-4">
                Mulai Sekarang
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="images/campaign-creators-pypeCEaJeZY-unsplash.jpg"
              className="d-block w-100"
              alt="Fitur Laporan"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>Analytics yang Mendalam</h2>
              <p>Ambil Keputusan Bisnis Berdasarkan Data Akurat</p>
              <button className="btn btn-success btn-lg px-4">
                Lihat Demo
              </button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="images/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg"
              className="d-block w-100"
              alt="Integrasi Platform"
              style={{ objectFit: "cover", height: "400px" }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
              <h2>Integrasi Multi-Platform</h2>
              <p>Satu Dashboard untuk Semua Channel Penjualan</p>
              <button className="btn btn-info btn-lg px-4 text-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Hero Section dengan Value Proposition */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">
                Kelola Bisnis Anda dengan Lebih Efisien
              </h1>
              <p className="lead mb-4">
                StockU adalah solusi manajemen inventori all-in-one yang
                membantu Anda:
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">✓ Mengotomatisasi pencatatan stok</li>
                <li className="mb-2">✓ Menganalisis tren penjualan</li>
                <li className="mb-2">✓ Mengelola multi-channel penjualan</li>
                <li className="mb-2">✓ Membuat keputusan berbasis data</li>
              </ul>
              <button className="btn btn-primary btn-lg mb-3">
                Mulai 14 Hari Trial Gratis
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
                alt="StockU Dashboard"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section dengan Icons */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Fitur Unggulan StockU</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-box-seam fs-1 text-primary"></i>
                </div>
                <h3>Manajemen Stok</h3>
                <p className="text-muted">
                  Pantau stok real-time, atur notifikasi stok minimum, dan
                  kelola pemesanan otomatis untuk efisiensi maksimal.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-graph-up fs-1 text-success"></i>
                </div>
                <h3>Laporan Analytics</h3>
                <p className="text-muted">
                  Analisis komprehensif tentang performa penjualan, tren produk,
                  dan prediksi kebutuhan stok di masa depan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-diagram-3 fs-1 text-info"></i>
                </div>
                <h3>Integrasi Mudah</h3>
                <p className="text-muted">
                  Hubungkan dengan berbagai marketplace dan platform e-commerce
                  populer dalam hitungan menit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Siap Mengoptimalkan Bisnis Anda?</h2>
          <p className="lead mb-4">
            Bergabung dengan ribuan bisnis yang telah menggunakan StockU untuk
            meningkatkan efisiensi operasional mereka.
          </p>
          <button className="btn btn-light btn-lg px-5">Daftar Sekarang</button>
        </div>
      </div>

      <style jsx>{`
        .carousel-item img {
          filter: brightness(0.7);
        }

        .carousel-caption {
          bottom: 50%;
          transform: translateY(50%);
          left: 50%;
          right: 50%;
          width: 80%;
          margin-left: -40%;
        }

        .carousel-caption h2 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .carousel-caption p {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .carousel-caption {
            position: relative;
            background: #343a40 !important;
            display: block !important;
            transform: none;
            left: 0;
            right: 0;
            width: 100%;
            margin-left: 0;
            bottom: 0;
          }

          .carousel-caption h2 {
            font-size: 2rem;
          }

          .carousel-caption p {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </main>
  );
}
