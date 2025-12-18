import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MapPin,
  Video,
  ShoppingBag,
  FileText,
  MessageCircle,
  User,
  LogOut,
  Search,
  Bell,
  Calendar,
  Pill,
  Camera,
  Send,
  Bot,
  Star,
  Clock,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const mockDoctors = [
  { id: 1, name: "Dr. Sarah Johnson", specialty: "General Physician", rating: 4.9, distance: "0.8 km", time: "5 min", available: true, image: "👩‍⚕️" },
  { id: 2, name: "Dr. Michael Chen", specialty: "Cardiologist", rating: 4.8, distance: "1.2 km", time: "8 min", available: true, image: "👨‍⚕️" },
  { id: 3, name: "Dr. Emily Davis", specialty: "Dermatologist", rating: 4.7, distance: "1.5 km", time: "10 min", available: false, image: "👩‍⚕️" },
];

const mockMedicines = [
  { id: 1, name: "Paracetamol 500mg", price: 5.99, stock: true, image: "💊" },
  { id: 2, name: "Vitamin D3", price: 12.99, stock: true, image: "💊" },
  { id: 3, name: "Omega-3 Fish Oil", price: 18.99, stock: true, image: "🐟" },
  { id: 4, name: "Multivitamin Complex", price: 24.99, stock: false, image: "💊" },
];

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [cart, setCart] = useState<typeof mockMedicines>([]);
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", content: "Hello! I'm your AI health assistant. How can I help you today? You can describe your symptoms or ask any health-related questions." }
  ]);
  const [chatInput, setChatInput] = useState("");

  const addToCart = (medicine: typeof mockMedicines[0]) => {
    setCart([...cart, medicine]);
  };

  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    setChatMessages([...chatMessages, { role: "user", content: chatInput }]);
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: "bot",
        content: "Based on your symptoms, I recommend consulting with a general physician. Would you like me to find nearby doctors for you? In the meantime, ensure you stay hydrated and get adequate rest."
      }]);
    }, 1000);
    setChatInput("");
  };

  const tabs = [
    { id: "home", label: "Home", icon: Heart },
    { id: "doctors", label: "Doctors", icon: MapPin },
    { id: "medicines", label: "Medicines", icon: ShoppingBag },
    { id: "records", label: "Records", icon: FileText },
    { id: "chat", label: "AI Chat", icon: MessageCircle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-health-blue flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold hidden sm:block">MediCare</span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Link to="/">
                <Button variant="ghost" size="icon">
                  <LogOut className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 py-6">
        {/* Tab Content */}
        {activeTab === "home" && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-health-blue rounded-2xl p-6 text-primary-foreground">
              <h2 className="text-2xl font-bold mb-2">Good Morning! 👋</h2>
              <p className="opacity-90">How are you feeling today?</p>
              <Button variant="secondary" className="mt-4 bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0">
                Quick Consultation
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: MapPin, label: "Find Doctor", color: "health-teal", onClick: () => setActiveTab("doctors") },
                { icon: Video, label: "Video Call", color: "health-blue", onClick: () => {} },
                { icon: Calendar, label: "Appointments", color: "health-green", onClick: () => {} },
                { icon: Pill, label: "Medicines", color: "health-purple", onClick: () => setActiveTab("medicines") },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-${item.color}-light flex items-center justify-center mb-3`}>
                    <item.icon className={`w-6 h-6 text-${item.color}`} />
                  </div>
                  <p className="font-medium text-sm">{item.label}</p>
                </button>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Nearby Doctors</h3>
                <Button variant="link" onClick={() => setActiveTab("doctors")}>View All</Button>
              </div>
              <div className="space-y-3">
                {mockDoctors.slice(0, 2).map((doctor) => (
                  <div key={doctor.id} className="p-4 bg-card rounded-xl border border-border/50 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-health-teal-light flex items-center justify-center text-2xl">
                      {doctor.image}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{doctor.name}</h4>
                      <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Star className="w-3 h-3 text-yellow-500" />{doctor.rating}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{doctor.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{doctor.time}</span>
                      </div>
                    </div>
                    <Button size="sm" variant={doctor.available ? "default" : "secondary"} disabled={!doctor.available}>
                      {doctor.available ? "Book" : "Busy"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "doctors" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">Find Doctors Near You</h2>
              <p className="text-muted-foreground">Doctors within 10 minutes of your location</p>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-2xl bg-gradient-to-br from-health-teal-light to-health-blue-light flex items-center justify-center border border-border/50">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Google Maps integration</p>
                <p className="text-sm text-muted-foreground">Shows nearby doctors on map</p>
              </div>
            </div>

            <div className="space-y-3">
              {mockDoctors.map((doctor) => (
                <div key={doctor.id} className="p-4 bg-card rounded-xl border border-border/50 flex items-center gap-4 hover:border-primary/30 transition-all">
                  <div className="w-16 h-16 rounded-full bg-health-teal-light flex items-center justify-center text-3xl">
                    {doctor.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{doctor.name}</h4>
                    <p className="text-muted-foreground">{doctor.specialty}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-500" />{doctor.rating}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{doctor.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{doctor.time}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" disabled={!doctor.available}>
                      <Video className="w-4 h-4 mr-1" />
                      Video
                    </Button>
                    <Button size="sm" variant="outline" disabled={!doctor.available}>
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "medicines" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Medicine Store</h2>
                <p className="text-muted-foreground">Order medicines for home delivery</p>
              </div>
              <Button variant="outline" className="relative">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mockMedicines.map((medicine) => (
                <div key={medicine.id} className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all">
                  <div className="w-full h-24 bg-health-teal-light rounded-lg flex items-center justify-center text-4xl mb-3">
                    {medicine.image}
                  </div>
                  <h4 className="font-semibold">{medicine.name}</h4>
                  <p className="text-lg font-bold text-primary mt-1">${medicine.price}</p>
                  <Button
                    className="w-full mt-3"
                    size="sm"
                    disabled={!medicine.stock}
                    onClick={() => addToCart(medicine)}
                  >
                    {medicine.stock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "records" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">Medical Records</h2>
              <p className="text-muted-foreground">Scan and store your medical documents</p>
            </div>

            <div className="border-2 border-dashed border-border rounded-2xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scan Medical Record</h3>
              <p className="text-muted-foreground mb-4">Take a photo or upload an image of your medical document</p>
              <Button>
                <Camera className="w-4 h-4 mr-2" />
                Scan Document
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recent Records</h3>
              <div className="space-y-3">
                {[
                  { name: "Blood Test Report", date: "Dec 15, 2024", type: "Lab Report" },
                  { name: "X-Ray Chest", date: "Dec 10, 2024", type: "Radiology" },
                  { name: "Prescription - Dr. Johnson", date: "Dec 5, 2024", type: "Prescription" },
                ].map((record, i) => (
                  <div key={i} className="p-4 bg-card rounded-xl border border-border/50 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-health-blue-light flex items-center justify-center">
                      <FileText className="w-6 h-6 text-health-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{record.name}</h4>
                      <p className="text-sm text-muted-foreground">{record.type} • {record.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="h-[calc(100vh-12rem)] flex flex-col animate-fade-in">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">AI Health Assistant</h2>
              <p className="text-muted-foreground">Powered by Google Gemini</p>
            </div>

            <div className="flex-1 bg-card rounded-2xl border border-border/50 flex flex-col overflow-hidden">
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary rounded-bl-sm"
                    }`}>
                      {msg.role === "bot" && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4" />
                          <span className="text-xs font-medium">AI Assistant</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <Input
                    placeholder="Describe your symptoms..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
                  />
                  <Button onClick={sendChatMessage}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50 safe-area-inset-bottom">
        <div className="container px-4">
          <div className="flex justify-around py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? "scale-110" : ""} transition-transform`} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserDashboard;
