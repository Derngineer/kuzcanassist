"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Concierge() {
  const [isScrolled, setIsScrolled] = useState(false);

  // WhatsApp message
  const whatsappNumber = "971557867183";
  const callNumber = "+971505894608";
  const whatsappMessage = encodeURIComponent("Hello! I would like to enquire about your concierge services. Please let me know how I can get started.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = [
    {
      name: "Essential",
      tagline: "Perfect for short visits",
      price: "$299",
      duration: "Per Trip",
      features: [
        "Airport meet & greet",
        "Private transfer (airport ↔ hotel)",
        "Hotel booking assistance",
        "24/7 WhatsApp support",
        "Basic itinerary planning",
        "Restaurant recommendations",
      ],
      highlighted: false,
    },
    {
      name: "Premium",
      tagline: "Most Popular Choice",
      price: "$599",
      duration: "Per Trip",
      features: [
        "Everything in Essential, plus:",
        "VIP airport fast-track service",
        "Luxury vehicle transfers (up to 3)",
        "Personal concierge for 3 days",
        "Curated itinerary with bookings",
        "2 restaurant reservations",
        "Shopping assistance (half day)",
        "Attraction tickets booking",
      ],
      highlighted: true,
    },
    {
      name: "Elite",
      tagline: "Ultimate Luxury Experience",
      price: "$1,299",
      duration: "Per Trip",
      features: [
        "Everything in Premium, plus:",
        "Dedicated concierge (full stay)",
        "Unlimited luxury transfers",
        "5-star hotel upgrades negotiation",
        "Private yacht/desert safari booking",
        "Unlimited restaurant reservations",
        "Full-day personal shopping",
        "Spa & wellness bookings",
        "Priority 24/7 support line",
      ],
      highlighted: false,
    },
  ];

  const services = [
    {
      category: "Transportation",
      items: [
        { name: "Airport Meet & Greet", price: "$50" },
        { name: "VIP Fast-Track Immigration", price: "$150" },
        { name: "Luxury Sedan Transfer", price: "$80" },
        { name: "Luxury SUV Transfer", price: "$120" },
        { name: "Limousine Service (per hour)", price: "$200" },
        { name: "Chauffeur Service (full day)", price: "$450" },
        { name: "Helicopter Transfer", price: "From $1,500" },
      ],
    },
    {
      category: "Accommodation",
      items: [
        { name: "Hotel Booking & Reservation", price: "$25" },
        { name: "Room Upgrade Negotiation", price: "$50" },
        { name: "Villa/Apartment Sourcing", price: "$100" },
        { name: "Early Check-in/Late Checkout", price: "$30" },
        { name: "Special Amenities Setup", price: "$75" },
      ],
    },
    {
      category: "Experiences & Activities",
      items: [
        { name: "Desert Safari Booking", price: "$40" },
        { name: "Private Desert Experience", price: "From $800" },
        { name: "Yacht Charter Booking", price: "$75" },
        { name: "Burj Khalifa VIP Access", price: "$60" },
        { name: "Theme Park Fast Passes", price: "$50" },
        { name: "Hot Air Balloon Booking", price: "$45" },
        { name: "Helicopter Tour Booking", price: "$60" },
      ],
    },
    {
      category: "Dining & Entertainment",
      items: [
        { name: "Restaurant Reservation", price: "$20" },
        { name: "Hard-to-Get Reservation", price: "$75" },
        { name: "Private Chef Experience", price: "From $500" },
        { name: "Nightclub Table Booking", price: "$50" },
        { name: "Event Tickets Procurement", price: "$40" },
      ],
    },
    {
      category: "Wellness & Beauty",
      items: [
        { name: "Spa Booking", price: "$25" },
        { name: "Luxury Spa Package", price: "$50" },
        { name: "Personal Trainer Session", price: "$40" },
        { name: "Salon & Beauty Appointments", price: "$20" },
        { name: "Medical Tourism Assistance", price: "From $200" },
      ],
    },
    {
      category: "Special Services",
      items: [
        { name: "Event Planning Consultation", price: "$150" },
        { name: "Birthday/Anniversary Setup", price: "From $300" },
        { name: "Wedding Planning Assistance", price: "From $1,000" },
        { name: "Business Meeting Arrangement", price: "$100" },
        { name: "Translation Services (per hour)", price: "$50" },
        { name: "Personal Shopper (half day)", price: "$150" },
        { name: "Personal Shopper (full day)", price: "$250" },
      ],
    },
  ];

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
              className="flex items-center gap-2 text-[#c9a962] hover:text-[#d4b87a] transition-colors"
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
            <Link href="/personal-shopping" className="text-sm tracking-widest uppercase text-[#f5f5f5]/70 hover:text-[#c9a962] transition-colors">
              Shopping
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
              backgroundImage: `url('https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2940&auto=format&fit=crop')`,
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
            Concierge Services
          </p>
          
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-medium leading-tight mb-8">
            Your UAE
            <span className="block gradient-text mt-2">Experience Awaits</span>
          </h1>

          <p className="text-lg md:text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-cormorant)] font-light">
            From airport arrivals to unforgettable experiences — we orchestrate every moment 
            of your Dubai journey with precision and elegance.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              Choose Your Experience
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
              Concierge <span className="gradient-text">Packages</span>
            </h2>
            <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl max-w-2xl mx-auto">
              Select a package that suits your travel style, or customize with individual services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative p-8 transition-all duration-500 ${
                  pkg.highlighted
                    ? "border-2 border-[#c9a962] bg-gradient-to-b from-[#c9a962]/10 to-transparent scale-105"
                    : "border border-[#c9a962]/20 hover:border-[#c9a962]/50"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c9a962] text-[#050505] px-4 py-1 text-xs tracking-widest uppercase font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-[#f5f5f5]/50 text-sm mb-6">{pkg.tagline}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-[family-name:var(--font-playfair)] gradient-text">{pkg.price}</span>
                    <span className="text-[#f5f5f5]/50 text-sm">{pkg.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#c9a962] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#f5f5f5]/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact-section"
                  className={`block text-center py-4 transition-all ${
                    pkg.highlighted
                      ? "btn-luxury btn-luxury-filled w-full"
                      : "btn-luxury w-full"
                  }`}
                >
                  Select Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
              À La Carte
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
              Individual <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl max-w-2xl mx-auto">
              Prefer to customize? Choose individual services based on your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((category, i) => (
              <div key={i} className="border border-[#c9a962]/20 p-6 hover:border-[#c9a962]/40 transition-colors">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl mb-6 pb-4 border-b border-[#c9a962]/20">
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex justify-between items-center">
                      <span className="text-[#f5f5f5]/70 text-sm">{item.name}</span>
                      <span className="text-[#c9a962] text-sm font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#f5f5f5]/50 text-sm mb-2">
              * Prices are service/booking fees. Actual experience costs (tickets, meals, etc.) are additional.
            </p>
            <p className="text-[#f5f5f5]/50 text-sm">
              * Custom packages available for extended stays and special requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c9a962] text-sm tracking-[0.3em] uppercase mb-4 font-[family-name:var(--font-montserrat)]">
                Why Choose Us
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-8">
                The Kuzie <span className="gradient-text">Difference</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Local Expertise",
                    desc: "Our team lives and breathes Dubai — we know the hidden gems, the best times, and the insider secrets.",
                  },
                  {
                    title: "24/7 Availability",
                    desc: "Your dedicated concierge is always just a message away, any time of day or night.",
                  },
                  {
                    title: "Exclusive Access",
                    desc: "From sold-out restaurants to VIP experiences, we open doors that others can't.",
                  },
                  {
                    title: "Personalized Service",
                    desc: "Every itinerary is crafted around your preferences, pace, and passions.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 border border-[#c9a962] flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a962] font-[family-name:var(--font-playfair)]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-[#f5f5f5]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div 
                className="aspect-[4/5] bg-cover bg-center rounded-sm"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[#c9a962]/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-section" className="py-24 px-6 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2874&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-[#050505]/90" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-6">
            Ready for <span className="gradient-text">Dubai</span>?
          </h2>
          <p className="text-[#f5f5f5]/70 font-[family-name:var(--font-cormorant)] text-xl mb-10">
            Let us craft your perfect UAE experience. Reach out to start planning today.
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
