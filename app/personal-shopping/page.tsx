"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PersonalShopping() {
  const [isScrolled, setIsScrolled] = useState(false);

  // WhatsApp message
  const whatsappNumber = "971557867183";
  const callNumber = "+971505894608";
  const whatsappMessage = encodeURIComponent("Hello! I would like to enquire about your luxury personal shopping services. Please let me know how I can get started.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0a0a0a] border-b border-[#c9a962]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-6">
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="text-xs font-medium hidden sm:inline">WhatsApp</span>
            </a>
            <a 
              href={`tel:${callNumber}`}
              className="flex items-center gap-2 text-[#c9a962] hover:text-[#d4b87a] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs font-medium hidden sm:inline">{callNumber}</span>
            </a>
          </div>
          <a 
            href="https://www.instagram.com/kuzie_can_assist/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-xs hidden sm:inline">@kuzie_can_assist</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[70] bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#050505] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Chat with us!
        </span>
      </a>

      {/* Navigation */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-[40px] bg-[#050505]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20"
            : "top-[40px] bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="group">
            <span className="font-[family-name:var(--font-montserrat)] text-base md:text-lg tracking-[0.35em] uppercase">
              <span className="text-[#c9a962] font-bold">Kuzie</span>
              <span className="text-[#f5f5f5] font-semibold ml-2">Can Assist</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/#services" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Services
            </Link>
            <Link href="/#about" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              About
            </Link>
            <Link href="/concierge" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Concierge
            </Link>
            <a href="https://lyannes.com/" target="_blank" rel="noopener noreferrer" className="text-sm tracking-widest uppercase text-[#c9a962] hover:text-[#f5f5f5] transition-colors">
              Lyannes
            </a>
            <Link href="/#contact" className="btn-luxury text-xs py-3 px-6">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2940&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <Link href="/" className="inline-flex items-center gap-2 text-[#c9a962] text-sm tracking-widest uppercase mb-8 hover:gap-4 transition-all">
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to Home
          </Link>
          
          <p className="text-[#c9a962] text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-[family-name:var(--font-montserrat)]">
            Personal Shopping Service
          </p>
          
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium leading-tight mb-8">
            Dubai&apos;s Finest
            <span className="block gradient-text mt-2">At Your Fingertips</span>
          </h1>

          <p className="text-lg md:text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-cormorant)] font-light">
            Experience seamless luxury procurement from Dubai&apos;s most exclusive boutiques, 
            delivered directly to Zimbabwe and beyond.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              Our Process
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Share Your List",
                desc: "Send us your shopping wishlist — brands, items, sizes, preferences, and any specific requirements."
              },
              {
                step: "02",
                title: "We Source & Quote",
                desc: "Our team locates items across Dubai, confirms availability, and provides you with a detailed quote."
              },
              {
                step: "03",
                title: "Confirm & Pay",
                desc: "Review and approve your order. Make payment via our secure methods including bank transfer."
              },
              {
                step: "04",
                title: "Delivery",
                desc: "We carefully package and ship your items to Zimbabwe or your preferred destination."
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full border border-[#c9a962]/50 flex items-center justify-center mb-6">
                  <span className="text-[#c9a962] text-2xl font-[family-name:var(--font-playfair)]">{item.step}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-3">{item.title}</h3>
                <p className="text-[#f5f5f5]/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              Transparent Pricing
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
              Procurement <span className="gradient-text">Rates</span>
            </h2>
            <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl max-w-2xl mx-auto">
              Our service fee is a simple percentage of your total order value — no hidden costs, no surprises.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative border border-[#c9a962] p-12 text-center bg-gradient-to-b from-[#c9a962]/5 to-transparent">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#050505] px-6">
                <span className="text-[#c9a962] text-sm tracking-widest uppercase">Service Fee</span>
              </div>
              
              <div className="mb-8">
                <span className="text-[#c9a962] text-lg">Up to</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-7xl md:text-8xl font-[family-name:var(--font-playfair)] gradient-text font-semibold">15</span>
                  <span className="text-4xl text-[#c9a962]">%</span>
                </div>
                <span className="text-[#f5f5f5]/60 text-lg">of total order value</span>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#c9a962]/20">
                <div>
                  <p className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)] mb-2">10%</p>
                  <p className="text-[#f5f5f5]/70 text-sm">Orders above $5,000</p>
                </div>
                <div>
                  <p className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)] mb-2">12%</p>
                  <p className="text-[#f5f5f5]/70 text-sm">Orders $2,000 - $5,000</p>
                </div>
                <div>
                  <p className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)] mb-2">15%</p>
                  <p className="text-[#f5f5f5]/70 text-sm">Orders under $2,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
                What&apos;s <span className="gradient-text">Included</span>
              </h3>
              {[
                "Personal shopping consultation",
                "Item sourcing across all Dubai malls & boutiques",
                "Price comparison & best deal guarantee",
                "Quality verification before purchase",
                "Secure packaging & handling",
                "Photo updates throughout the process",
                "WhatsApp support & communication",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-[#c9a962] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#f5f5f5]/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-6">
                Additional <span className="gradient-text">Costs</span>
              </h3>
              <div className="space-y-4">
                <div className="p-6 border border-[#c9a962]/20 bg-[#0a0a0a]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">International Shipping</span>
                    <span className="text-[#c9a962]">Variable</span>
                  </div>
                  <p className="text-[#f5f5f5]/60 text-sm">Based on weight, dimensions, and destination. Quoted separately.</p>
                </div>
                <div className="p-6 border border-[#c9a962]/20 bg-[#0a0a0a]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Import Duties & Taxes</span>
                    <span className="text-[#c9a962]">As applicable</span>
                  </div>
                  <p className="text-[#f5f5f5]/60 text-sm">Customs duties are the responsibility of the recipient.</p>
                </div>
                <div className="p-6 border border-[#c9a962]/20 bg-[#0a0a0a]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Express/Priority Handling</span>
                    <span className="text-[#c9a962]">+3%</span>
                  </div>
                  <p className="text-[#f5f5f5]/60 text-sm">For urgent orders requiring same-day sourcing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              What We Source
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium">
              Shopping <span className="gradient-text">Categories</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Designer Fashion", icon: "👗", desc: "Gucci, Louis Vuitton, Chanel, Dior & more" },
              { name: "Luxury Watches", icon: "⌚", desc: "Rolex, Patek Philippe, Audemars Piguet" },
              { name: "Fine Jewelry", icon: "💎", desc: "Cartier, Tiffany, Bvlgari, Van Cleef" },
              { name: "Handbags", icon: "👜", desc: "Hermès, Birkin, Kelly, designer collections" },
              { name: "Fragrances", icon: "🌸", desc: "Exclusive perfumes & oud collections" },
              { name: "Electronics", icon: "📱", desc: "Apple, Samsung, latest tech gadgets" },
              { name: "Beauty & Skincare", icon: "✨", desc: "La Mer, SK-II, luxury beauty brands" },
              { name: "Home & Décor", icon: "🏠", desc: "Premium furniture & home accessories" },
            ].map((category, i) => (
              <div key={i} className="group p-6 border border-[#c9a962]/20 hover:border-[#c9a962]/60 transition-all duration-500 hover:bg-[#c9a962]/5 text-center">
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg mb-2">{category.name}</h3>
                <p className="text-[#f5f5f5]/50 text-sm">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2940&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#050505]/90" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
            Ready to <span className="gradient-text">Shop</span>?
          </h2>
          <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl mb-10">
            Send us your wishlist and let us bring Dubai&apos;s luxury to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/971557867183" target="_blank" rel="noopener noreferrer" className="btn-luxury btn-luxury-filled inline-flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link href="/#contact" className="btn-luxury">
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="group">
            <span className="font-[family-name:var(--font-montserrat)] text-base md:text-lg tracking-[0.35em] uppercase">
              <span className="text-[#c9a962] font-bold">Kuzie</span>
              <span className="text-[#f5f5f5] font-semibold ml-2">Can Assist</span>
            </span>
          </Link>
          <p className="text-[#f5f5f5]/40 text-sm">
            © 2026 Kuzie Can Assist. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
