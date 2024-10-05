export default function Contact() {
    return (
      <>
  
        {/* Reuse the same navbar */}
  
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <h1 className="text-center mb-4">Hubungi Kami</h1>
              <form className="card shadow-sm">
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea className="form-control" id="message" rows={5} required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Kirim Pesan</button>
                </div>
              </form>
            </div>
          </div>
  
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Alamat</h5>
                  <p>Jl. Contoh No. 123<br />Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Email</h5>
                  <p>info@stocku.com<br />support@stocku.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5>Telepon</h5>
                  <p>+62 21 1234 5678<br />+62 812 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }