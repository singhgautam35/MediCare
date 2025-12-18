import { Button } from "@/components/ui/button";
import { Heart, Shield, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-health-teal-light via-background to-health-blue-light" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-health-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating Medical Icons */}
      <div className="absolute top-1/4 left-10 p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-8 h-8 text-destructive" />
      </div>
      <div className="absolute top-1/3 right-16 p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft animate-float" style={{ animationDelay: '3s' }}>
        <Shield className="w-8 h-8 text-health-green" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 p-4 bg-card/80 backdrop-blur-sm rounded-2xl shadow-soft animate-float" style={{ animationDelay: '2s' }}>
        <Clock className="w-8 h-8 text-primary" />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-health-green rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Trusted by 50,000+ patients</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-slide-up">
            Your Health,{" "}
            <span className="gradient-text">Our Priority</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Connect with certified doctors in minutes. Get consultations, medicine delivery, and AI-powered health insights – all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/user-login">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Find a Doctor
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/doctor-login">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                Join as Doctor
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Verified Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">10 min</div>
              <div className="text-sm text-muted-foreground mt-1">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
