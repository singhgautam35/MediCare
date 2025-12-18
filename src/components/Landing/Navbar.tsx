import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="container px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-health-blue flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-xl font-bold">MediCare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/user-login">
              <Button variant="ghost" size="sm">Patient Login</Button>
            </Link>
            <Link to="/doctor-login">
              <Button size="sm">Doctor Login</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Link to="/user-login">
                  <Button variant="outline" className="w-full">Patient Login</Button>
                </Link>
                <Link to="/doctor-login">
                  <Button className="w-full">Doctor Login</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
