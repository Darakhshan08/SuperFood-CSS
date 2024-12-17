import { Home, Instagram, Facebook, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          {/* Section 1 */}
          <div>
            <Link href="/">
              <h2 className="footer-title">
                SuperFood<span>🍃</span>
              </h2>
            </Link>
            <p className="footer-text">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd guber gren. Aenean sollici tudin lorem quis biben dum
              auci elit clita.
            </p>
            <div className="footer-contact">
              <Home size={20} />
              <span>+1234567890</span>
            </div>
            <div className="footer-contact">
              <span>Eighth Avenue 487, New York</span>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <form className="footer-form">
              <input
                type="text"
                placeholder="Name"
                className="footer-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="footer-input"
              />
              <textarea
                placeholder="Comment"
                rows={4}
                className="footer-textarea"
              />
              <button className="footer-button">SUBMIT</button>
            </form>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="footer-feed-title">Twitter feed</h3>
            <p className="footer-text">Couldn&apos;t connect with Twitter</p>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
                Instagram
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
                Facebook
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <p>©2024 darakhshanshah8@gmail.com, All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
