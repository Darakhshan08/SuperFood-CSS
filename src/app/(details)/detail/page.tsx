"use client";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { Star, Plus, Minus, ChevronDown,ShoppingCart,Search,X,Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import "@/styles/Detail.css";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>

<header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <Link href={"./"}>
              <h1 className="logo-text">SuperFood🍃</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href={"./"} className="nav-link">Home</Link>
            <Link href={"./about"} className="nav-link">About</Link>
            <Link href={"/contact"} className="nav-link">Get in Touch</Link>
          </nav>

          {/* Right side icons */}
          <div className="header-icons">
            <div className="cart">
              <ShoppingCart className="icon" />
              <span className="cart-badge">0</span>
            </div>
            <button className="search-btn">
              <Search className="icon" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="icon" />
              ) : (
                <Menu className="icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <div className="mobile-nav-links">
              <Link href={"./"} className="mobile-nav-link">Home</Link>
              <Link href={"./about"} className="mobile-nav-link">About</Link>
              <Link href={"/contact"} className="mobile-nav-link">Contact</Link>
            </div>
          </nav>
        )}
      </div>
    </header>

    <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-sm text-gray-500 mb-4 md:mb-8 overflow-x-auto whitespace-nowrap">
            <Link href={"./"}>
            <span className="hover:text-gray-700 cursor-pointer">HOME</span>
            </Link>
           
            <span className="mx-2">/</span>
            <span className="hover:text-gray-700 cursor-pointer">SHOP</span>
            <span className="mx-2">/</span>
            <span className="hover:text-gray-700 cursor-pointer">TEA</span>
            <span className="mx-2">/</span>
            <span className="text-gray-700">MOCK UPS</span>
          </div>
        </div>


      <main className="container">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Product Image */}
          <div className="image-container">
            <Image
              src="https://superfood.qodeinteractive.com/wp-content/uploads/2016/09/tea2.jpg"
              alt="Coffee cup mockup"
              className="w-full rounded-lg"
              width={800}
              height={600}
              priority
            />
          </div>

          {/* Product Details */}
          <div className="product-details md:w-1/2 mt-4 md:mt-0">
            <h1 className="product-title">Mock ups</h1>

            <div className="product-price">$190.00</div>

            {/* Rating */}
            <div className="rating">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              <span className="review-text">(1 CUSTOMER REVIEW)</span>
            </div>

            {/* Review */}
            <p className="product-description">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.
            </p>

            {/* Quantity Selector */}
            <div className="quantity-selector sm:flex-row">
              <div className="flex items-center border rounded">
                <button
                  onClick={decrementQuantity}
                  className="quantity-btn"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="quantity-input"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="quantity-btn"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button className="add-to-cart-btn">
                ADD TO CART
              </button>
            </div>

            {/* Product Meta */}
            <div className="product-meta">
              <p>SKU: PR202</p>
              <p>Category: Tea</p>
            </div>

            {/* Description */}
            <div className="border-t pt-4">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="description-toggle"
              >
                <span>Description</span>
                <ChevronDown
                  className={`chevron-down ${isDescriptionOpen ? "chevron-rotate" : ""}`}
                />
              </button>

              {isDescriptionOpen && (
                <p className="description-text">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
