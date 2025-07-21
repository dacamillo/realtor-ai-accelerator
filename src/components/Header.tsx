import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToPricing = () => {
    scrollToSection('pricing-section');
  };

  const scrollToCalendar = () => {
    scrollToSection('calendar-section');
  };

  const navItems = [
    { label: "Features", sectionId: "solution-section" },
    { label: "Pricing", sectionId: "pricing-section" },
    { label: "Testimonials", sectionId: "testimonials-section" },
    { label: "Book Call", sectionId: "calendar-section" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img src="/lovable-uploads/8ea1bb1c-9a00-4d00-a43c-4c704e11ca1f.png" alt="Smart Solution Agency" className="h-8 w-8 object-contain" />
            </div>
            <span className="font-bold text-lg text-white">Smart Solution Agency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="cta" size="sm" onClick={scrollToCalendar}>
              Book Call
            </Button>
            <Button variant="hero" size="sm" onClick={scrollToPricing}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary/20 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-white/70 hover:text-white transition-colors py-2 text-left cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-primary/20">
                <Button variant="cta" size="sm" onClick={scrollToCalendar}>
                  Book Call
                </Button>
                <Button variant="hero" size="sm" onClick={scrollToPricing}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}