import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from "../asset/logo.png";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO ONLY IN TOP LEFT */}
        <img
          src={Logo}
          alt="Elite Documentation and Tax Services"
          className="h-32 w-auto filter brightness-0 invert" // larger and white
        />


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['home', 'services', 'pricing', 'about', 'faq'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`transition-colors ${
                isScrolled ? 'text-[#0A2540] hover:text-[#0099CC]' : 'text-white hover:text-[#FFD166]'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className="bg-[#FFD166] text-[#0A2540] px-6 py-2 rounded-lg font-semibold hover:bg-[#FFC233] transition-all shadow-lg"
          >
            Book a Free Consultation
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-[#0A2540]' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-4">
            {['home', 'services', 'pricing', 'about', 'faq'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-[#0A2540] hover:text-[#0099CC] py-2"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full bg-[#FFD166] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFC233] transition-all"
            >
              Book a Free Consultation
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
