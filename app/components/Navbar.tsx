'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand">StockU</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>
                Tentang Kami
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}