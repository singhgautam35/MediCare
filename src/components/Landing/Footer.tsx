import { Heart, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-health-blue flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">MediCare</span>
            </Link>
            <p className="text-background/70 text-sm">
              Your trusted partner for all healthcare needs. Connect with doctors, get medicine delivered, and manage your health – all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Video Consultation</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Find Doctors</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Medicine Delivery</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Health Records</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>support@medicare.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Health Street, Medical City</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
