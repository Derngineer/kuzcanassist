"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-[#f5f5f5]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-[family-name:var(--font-playfair)] tracking-wider">
            <span className="gradient-text font-semibold">KUZIE</span>
            <span className="text-[#f5f5f5]/80 font-light ml-2">can assist</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              About
            </a>
            <a href="#dubai" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Dubai
            </a>
            <a href="#testimonials" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Stories
            </a>
            <a href="#contact" className="btn-luxury text-xs py-3 px-6">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#c9a962]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-lg transition-all duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <a href="#services" className="text-lg tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962]" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-lg tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962]" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#dubai" className="text-lg tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962]" onClick={() => setMobileMenuOpen(false)}>Dubai</a>
            <a href="#testimonials" className="text-lg tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962]" onClick={() => setMobileMenuOpen(false)}>Stories</a>
            <a href="#contact" className="btn-luxury text-center" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/dubaivid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-[#050505]/80" />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#c9a962]/20 rotate-45 animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-[#c9a962]/10 rotate-12 animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[#c9a962] text-sm md:text-base tracking-[0.4em] uppercase mb-6 animate-fade-in font-[family-name:var(--font-montserrat)]">
            Luxury Personal Shopping & Concierge
          </p>
          
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8 animate-fade-in-up">
            Experience
            <span className="block gradient-text mt-2">Unparalleled</span>
            <span className="block text-[#f5f5f5]/90 italic font-[family-name:var(--font-cormorant)]">Luxury</span>
          </h1>

          <p className="text-lg md:text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto mb-12 leading-relaxed font-[family-name:var(--font-cormorant)] font-light animate-fade-in" style={{ animationDelay: "0.5s" }}>
            From the glittering towers of Dubai to your doorstep — we curate extraordinary 
            shopping experiences and bespoke concierge services for the discerning few.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <a href="#services" className="btn-luxury btn-luxury-filled">
              Explore Services
            </a>
            <a href="#contact" className="btn-luxury">
              Book Consultation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <span className="text-[#c9a962]/60 text-xs tracking-widest uppercase">Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#c9a962] to-transparent" />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-32 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a962]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">What We Offer</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-6">
              Exceptional <span className="gradient-text">Services</span>
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Personal Shopping Service */}
            <div className="group relative overflow-hidden rounded-sm">
              <div 
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="w-12 h-12 border border-[#c9a962] flex items-center justify-center mb-6 group-hover:bg-[#c9a962] transition-colors">
                  <svg className="w-6 h-6 text-[#c9a962] group-hover:text-[#050505] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl mb-4">Personal Shopping</h3>
                <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed mb-6">
                  Access Dubai&apos;s most exclusive boutiques, designer collections, and luxury goods. 
                  We source, curate, and deliver premium products directly to Zimbabwe and beyond.
                </p>
                <Link href="/personal-shopping" className="inline-flex items-center gap-3 text-[#c9a962] text-sm tracking-widest uppercase group-hover:gap-5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Concierge Services */}
            <div className="group relative overflow-hidden rounded-sm">
              <div 
                className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <div className="w-12 h-12 border border-[#c9a962] flex items-center justify-center mb-6 group-hover:bg-[#c9a962] transition-colors">
                  <svg className="w-6 h-6 text-[#c9a962] group-hover:text-[#050505] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl mb-4">Concierge Services</h3>
                <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed mb-6">
                  Your gateway to the UAE experience. From airport transfers and accommodation 
                  to curated itineraries and exclusive experiences — we handle every detail.
                </p>
                <Link href="/concierge" className="inline-flex items-center gap-3 text-[#c9a962] text-sm tracking-widest uppercase group-hover:gap-5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Experience Section */}
      <section id="dubai" className="py-32 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2874&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#050505]/85" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
                The Dubai Difference
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium mb-8 leading-tight">
                Where Dreams
                <span className="block gradient-text">Meet Reality</span>
              </h2>
              <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl leading-relaxed mb-8">
                Dubai stands as a beacon of luxury and innovation — a city where the impossible 
                becomes possible. From the world&apos;s tallest building to the most exclusive shopping 
                destinations, we unlock access to experiences that define extraordinary.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="border-l border-[#c9a962]/50 pl-6">
                  <span className="text-[#c9a962] text-4xl font-[family-name:var(--font-playfair)]">500+</span>
                  <p className="text-[#f5f5f5]/60 mt-2">Luxury Brands</p>
                </div>
                <div className="border-l border-[#c9a962]/50 pl-6">
                  <span className="text-[#c9a962] text-4xl font-[family-name:var(--font-playfair)]">24/7</span>
                  <p className="text-[#f5f5f5]/60 mt-2">Concierge Support</p>
                </div>
                <div className="border-l border-[#c9a962]/50 pl-6">
                  <span className="text-[#c9a962] text-4xl font-[family-name:var(--font-playfair)]">100%</span>
                  <p className="text-[#f5f5f5]/60 mt-2">Authentic Products</p>
                </div>
                <div className="border-l border-[#c9a962]/50 pl-6">
                  <span className="text-[#c9a962] text-4xl font-[family-name:var(--font-playfair)]">5★</span>
                  <p className="text-[#f5f5f5]/60 mt-2">Service Excellence</p>
                </div>
              </div>

              <a href="#contact" className="btn-luxury inline-block">
                Plan Your Experience
              </a>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="aspect-[3/4] bg-cover bg-center rounded-sm"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=2787&auto=format&fit=crop')`,
                  }}
                />
                <div 
                  className="aspect-[3/4] bg-cover bg-center rounded-sm mt-12"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')`,
                  }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-[#c9a962]/30" />
              <div className="absolute -top-8 -right-8 w-32 h-32 border border-[#c9a962]/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Shopping Details */}
      <section id="personal-shopping" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div 
                  className="aspect-square bg-cover bg-center rounded-sm"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2940&auto=format&fit=crop')`,
                  }}
                />
                <div className="absolute -bottom-6 -right-6 bg-[#c9a962] p-8 rounded-sm">
                  <p className="text-[#050505] text-4xl font-[family-name:var(--font-playfair)] font-semibold">Dubai</p>
                  <p className="text-[#050505]/70 text-sm tracking-widest uppercase">to Zimbabwe</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
                Personal Shopping
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-8">
                Curated <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl leading-relaxed mb-10">
                Your personal gateway to Dubai&apos;s most prestigious shopping destinations. 
                We navigate the city&apos;s luxury landscape so you don&apos;t have to — from The Dubai Mall 
                to exclusive boutiques in City Walk and DIFC.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Designer Fashion", desc: "Latest collections from world-renowned fashion houses" },
                  { title: "Luxury Accessories", desc: "Watches, jewelry, bags, and premium accessories" },
                  { title: "Electronics & Tech", desc: "Latest gadgets at competitive Dubai prices" },
                  { title: "Beauty & Fragrances", desc: "Exclusive perfumes and skincare collections" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-2 h-2 bg-[#c9a962] rounded-full mt-3 group-hover:scale-150 transition-transform" />
                    <div>
                      <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                      <p className="text-[#f5f5f5]/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Services Details */}
      <section id="concierge" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              Concierge Services
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-6">
              Your UAE <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl max-w-2xl mx-auto">
              From the moment you land until your departure, we orchestrate every detail 
              of your UAE experience with precision and elegance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                title: "Airport & Transfers",
                desc: "VIP meet and greet services, luxury vehicle transfers, and seamless airport experiences.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Accommodation",
                desc: "Handpicked luxury hotels, serviced apartments, and exclusive residences tailored to your preferences.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Curated Itineraries",
                desc: "Bespoke travel plans featuring iconic landmarks, hidden gems, and exclusive experiences.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Event Planning",
                desc: "From intimate dinners to grand celebrations — we create unforgettable moments.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                ),
                title: "Dining Reservations",
                desc: "Access to Dubai's most exclusive restaurants and private dining experiences.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Wellness & Spa",
                desc: "World-class spa treatments, wellness retreats, and rejuvenating experiences.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 border border-[#c9a962]/20 hover:border-[#c9a962]/60 transition-all duration-500 hover:bg-[#c9a962]/5"
              >
                <div className="text-[#c9a962] mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-4">{service.title}</h3>
                <p className="text-[#f5f5f5]/60 font-[family-name:var(--font-cormorant)] text-lg">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              How It Works
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-6">
              Seamless <span className="gradient-text">Experience</span>
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#c9a962]/0 via-[#c9a962]/50 to-[#c9a962]/0" />
            
            {[
              { step: "01", title: "Consultation", desc: "Share your desires and requirements with our dedicated team" },
              { step: "02", title: "Curation", desc: "We source and curate options tailored to your preferences" },
              { step: "03", title: "Confirmation", desc: "Review and approve your personalized selections" },
              { step: "04", title: "Delivery", desc: "Receive your items or enjoy your curated UAE experience" },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-32 h-32 mx-auto rounded-full border border-[#c9a962]/50 flex items-center justify-center bg-[#0a0a0a] relative z-10">
                  <span className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)]">{item.step}</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mt-8 mb-4">{item.title}</h3>
                <p className="text-[#f5f5f5]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')`,
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              Client Stories
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium">
              Words of <span className="gradient-text">Distinction</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Kuzie Can Assist transformed my Dubai shopping experience. The attention to detail and personal touch made me feel like royalty. My packages arrived in Harare perfectly curated.",
                author: "Tendai M.",
                location: "Harare, Zimbabwe",
              },
              {
                quote: "Their concierge service made our family trip to Dubai absolutely seamless. From the Burj Khalifa to desert safaris, every moment was perfectly orchestrated.",
                author: "Rumbidzai C.",
                location: "Bulawayo, Zimbabwe",
              },
            ].map((testimonial, i) => (
              <div key={i} className="glass p-10 rounded-sm">
                <svg className="w-12 h-12 text-[#c9a962]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#f5f5f5]/80 font-[family-name:var(--font-cormorant)] text-xl italic leading-relaxed mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a962]/20 flex items-center justify-center">
                    <span className="text-[#c9a962] font-[family-name:var(--font-playfair)]">
                      {testimonial.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-[#f5f5f5]/50 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Brand Story */}
      <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-8">
                Bridging <span className="gradient-text">Worlds</span>
              </h2>
              <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl leading-relaxed mb-6">
                Born from a passion for excellence and a deep understanding of African elegance, 
                Kuzie Can Assist bridges the gap between Dubai&apos;s world-renowned luxury scene 
                and discerning clients across Zimbabwe and beyond.
              </p>
              <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl leading-relaxed mb-8">
                We believe that luxury should be accessible, personal, and seamless. Whether 
                you&apos;re seeking the latest designer pieces or planning an unforgettable UAE 
                adventure, we are your trusted partner in excellence.
              </p>

              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)]">5+</span>
                  <p className="text-[#f5f5f5]/50 text-sm mt-1">Years Experience</p>
                </div>
                <div className="w-px h-12 bg-[#c9a962]/30" />
                <div className="text-center">
                  <span className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)]">1000+</span>
                  <p className="text-[#f5f5f5]/50 text-sm mt-1">Happy Clients</p>
                </div>
                <div className="w-px h-12 bg-[#c9a962]/30" />
                <div className="text-center">
                  <span className="text-[#c9a962] text-3xl font-[family-name:var(--font-playfair)]">∞</span>
                  <p className="text-[#f5f5f5]/50 text-sm mt-1">Possibilities</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div 
                className="aspect-[4/5] bg-cover bg-center rounded-sm"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1583396618422-44b2e5e76363?q=80&w=2787&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[#c9a962]/30 -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#c9a962]/10 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=2874&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#050505]/90" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
            Get Started
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-medium mb-6">
            Let&apos;s Create Something <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl max-w-2xl mx-auto mb-12">
            Ready to experience the finest Dubai has to offer? Reach out to begin 
            your personalized journey with Kuzie Can Assist.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto border border-[#c9a962]/50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#c9a962] font-medium mb-1">Email</p>
              <p className="text-[#f5f5f5]/70">hello@kuziecanassist.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto border border-[#c9a962]/50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-[#c9a962] font-medium mb-1">WhatsApp</p>
              <p className="text-[#f5f5f5]/70">+971 50 XXX XXXX</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto border border-[#c9a962]/50 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[#c9a962] font-medium mb-1">Location</p>
              <p className="text-[#f5f5f5]/70">Dubai, UAE</p>
            </div>
          </div>

          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border border-[#c9a962]/30 px-6 py-4 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:border-[#c9a962] focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border border-[#c9a962]/30 px-6 py-4 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:border-[#c9a962] focus:outline-none transition-colors"
              />
            </div>
            <select className="w-full bg-transparent border border-[#c9a962]/30 px-6 py-4 text-[#f5f5f5]/40 focus:border-[#c9a962] focus:outline-none transition-colors appearance-none">
              <option value="" className="bg-[#0a0a0a]">Select Service</option>
              <option value="personal-shopping" className="bg-[#0a0a0a]">Personal Shopping</option>
              <option value="concierge" className="bg-[#0a0a0a]">Concierge Services</option>
              <option value="both" className="bg-[#0a0a0a]">Both Services</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your requirements..."
              className="w-full bg-transparent border border-[#c9a962]/30 px-6 py-4 text-[#f5f5f5] placeholder-[#f5f5f5]/40 focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
            />
            <button type="submit" className="btn-luxury btn-luxury-filled w-full">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="text-2xl font-[family-name:var(--font-playfair)] tracking-wider inline-block mb-6">
                <span className="gradient-text font-semibold">KUZIE</span>
                <span className="text-[#f5f5f5]/80 font-light ml-2">can assist</span>
              </a>
              <p className="text-[#f5f5f5]/60 font-[family-name:var(--font-cormorant)] text-lg max-w-md leading-relaxed">
                Your premier partner for luxury personal shopping and bespoke concierge 
                services, connecting Dubai&apos;s finest offerings to discerning clients worldwide.
              </p>
            </div>

            <div>
              <h4 className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-[#f5f5f5]/60 hover:text-[#c9a962] transition-colors">Services</a></li>
                <li><a href="#about" className="text-[#f5f5f5]/60 hover:text-[#c9a962] transition-colors">About Us</a></li>
                <li><a href="#dubai" className="text-[#f5f5f5]/60 hover:text-[#c9a962] transition-colors">Dubai Experience</a></li>
                <li><a href="#contact" className="text-[#f5f5f5]/60 hover:text-[#c9a962] transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#c9a962] text-sm tracking-widest uppercase mb-6">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center hover:bg-[#c9a962] hover:border-[#c9a962] group transition-colors">
                  <svg className="w-5 h-5 text-[#c9a962] group-hover:text-[#050505]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center hover:bg-[#c9a962] hover:border-[#c9a962] group transition-colors">
                  <svg className="w-5 h-5 text-[#c9a962] group-hover:text-[#050505]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 border border-[#c9a962]/30 flex items-center justify-center hover:bg-[#c9a962] hover:border-[#c9a962] group transition-colors">
                  <svg className="w-5 h-5 text-[#c9a962] group-hover:text-[#050505]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#c9a962]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f5f5f5]/40 text-sm">
              © 2026 Kuzie Can Assist. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#f5f5f5]/40 hover:text-[#c9a962] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#f5f5f5]/40 hover:text-[#c9a962] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
