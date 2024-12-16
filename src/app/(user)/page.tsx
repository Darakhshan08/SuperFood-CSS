'use client'

import Slider from "../../components/Slider";
import Features from "../../components/Features";
import Products from "../../components/Products";
import "@/styles/page.css" // Import your CSS file here




export default function LandingPage() {

  

  return (
    <main className="main-container">
    {/* Hero Section  */}
    <Slider />
  
     {/* Features Section  */}
    <Features />
  
     {/* Products Section */}
    <Products />
  </main>

  );
}

