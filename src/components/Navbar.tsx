'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <Link href="/">SuperFood<span>🍃</span></Link>
          </div>

          {/* Desktop Links */}
          <div className="navbar-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Get in Touch</Link>
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button>
              <ShoppingCart size={24} />
              <span className="navbar-cart-badge">0</span>
            </button>
            <button>
              <Search size={24} />
            </button>
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link href="/">SuperFood<span>🍃</span></Link>
          <button onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
