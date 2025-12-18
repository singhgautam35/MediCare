import { Video, MapPin, ShoppingBag, FileText, MessageCircle, Stethoscope } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Find Nearby Doctors",
    description: "Locate verified doctors within 10 minutes of your location using GPS.",
    color: "health-teal",
    bgColor: "health-teal-light",
  },
  {
    icon: Video,
    title: "Video Consultation",
    description: "Connect face-to-face with doctors from the comfort of your home.",
    color: "health-blue",
    bgColor: "health-blue-light",
  },
  {
    icon: ShoppingBag,
    title: "Medicine Delivery",
    description: "Order medicines and get them delivered to your doorstep.",
    color: "health-green",
    bgColor: "health-green-light",
  },
  {
    icon: FileText,
    title: "Medical Records",
    description: "Scan and store all your medical records digitally for easy access.",
    color: "health-purple",
    bgColor: "health-purple-light",
  },
  {
    icon: MessageCircle,
    title: "AI Health Assistant",
    description: "Get instant health insights and symptom analysis powered by AI.",
    color: "health-orange",
    bgColor: "health-orange-light",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "All doctors are verified with valid medical licenses and experience.",
    color: "primary",
    bgColor: "health-teal-light",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="gradient-text">Better Health</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive healthcare solutions designed to make your life easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
