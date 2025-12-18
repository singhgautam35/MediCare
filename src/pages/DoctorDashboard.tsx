import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Stethoscope,
  Calendar,
  Video,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
  Clock,
  CheckCircle,
  XCircle,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const mockAppointments = [
  { id: 1, patient: "John Doe", age: 35, time: "10:00 AM", type: "Video Call", status: "upcoming", symptoms: "Headache, fever" },
  { id: 2, patient: "Jane Smith", age: 28, time: "11:30 AM", type: "In-Person", status: "upcoming", symptoms: "Skin rash" },
  { id: 3, patient: "Mike Johnson", age: 45, time: "2:00 PM", type: "Video Call", status: "completed", symptoms: "Chest pain" },
  { id: 4, patient: "Sarah Wilson", age: 52, time: "3:30 PM", type: "Phone Call", status: "cancelled", symptoms: "Joint pain" },
];

const mockPatients = [
  { id: 1, name: "John Doe", lastVisit: "Dec 15, 2024", condition: "Hypertension", image: "👨" },
  { id: 2, name: "Jane Smith", lastVisit: "Dec 14, 2024", condition: "Diabetes Type 2", image: "👩" },
  { id: 3, name: "Mike Johnson", lastVisit: "Dec 10, 2024", condition: "Cardiac Issues", image: "👨" },
];

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Stethoscope },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "patients", label: "Patients", icon: Users },
    { id: "consultations", label: "Video Call", icon: Video },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const stats = [
    { label: "Today's Appointments", value: "12", icon: Calendar, color: "health-teal" },
    { label: "Total Patients", value: "248", icon: Users, color: "health-blue" },
    { label: "Completed Today", value: "8", icon: CheckCircle, color: "health-green" },
    { label: "Pending Reviews", value: "5", icon: FileText, color: "health-orange" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-64 bg-card border-r border-border/50 flex-col">
        <div className="p-6 border-b border-border/50">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-health-green to-primary flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-bold">MediCare</span>
              <p className="text-xs text-muted-foreground">Doctor Portal</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-border/50">
          <Link to="/">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="lg:hidden">
                <Link to="/" className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-health-green to-primary flex items-center justify-center">
                    <Stethoscope className="w-5 h-5 text-primary-foreground" />
                  </div>
                </Link>
              </div>

              <div className="flex-1 max-w-xl mx-4 hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search patients, appointments..." className="pl-10" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
                </Button>
                <div className="flex items-center gap-3 pl-3 border-l border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-health-green to-primary flex items-center justify-center text-lg">
                    👨‍⚕️
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-sm font-semibold">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Cardiologist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-2xl font-bold">Good Morning, Dr. Johnson! 👋</h1>
                <p className="text-muted-foreground">Here's what's happening today</p>
              </div>

              {/* Stats */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-xl bg-${stat.color}-light flex items-center justify-center mb-4`}>
                      <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                    </div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Today's Schedule */}
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="p-6 border-b border-border/50 flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Today's Appointments</h2>
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("appointments")}>
                    View All
                  </Button>
                </div>
                <div className="divide-y divide-border/50">
                  {mockAppointments.filter(a => a.status === "upcoming").map((apt) => (
                    <div key={apt.id} className="p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-health-teal-light flex items-center justify-center text-xl">
                        👤
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{apt.patient}</h4>
                        <p className="text-sm text-muted-foreground">{apt.symptoms}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{apt.time}</p>
                        <p className="text-sm text-muted-foreground">{apt.type}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="default">
                          <Video className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Sharing */}
              <div className="bg-gradient-to-r from-primary to-health-blue rounded-2xl p-6 text-primary-foreground">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Share Your Location</h3>
                    <p className="opacity-90 text-sm">Let patients find you easily for home visits</p>
                  </div>
                  <Button variant="secondary" className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-0">
                    Enable Location
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appointments" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Appointments</h1>
                  <p className="text-muted-foreground">Manage your patient appointments</p>
                </div>
                <Button>
                  <Calendar className="w-4 h-4 mr-2" />
                  New Appointment
                </Button>
              </div>

              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <div className="divide-y divide-border/50">
                  {mockAppointments.map((apt) => (
                    <div key={apt.id} className="p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-health-teal-light flex items-center justify-center text-2xl">
                        👤
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{apt.patient}</h4>
                          <span className="text-sm text-muted-foreground">({apt.age} yrs)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{apt.symptoms}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{apt.time}</span>
                          <span>{apt.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {apt.status === "upcoming" && (
                          <>
                            <Button size="sm" variant="default">
                              Start Call
                            </Button>
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                          </>
                        )}
                        {apt.status === "completed" && (
                          <span className="flex items-center gap-1 text-health-green text-sm">
                            <CheckCircle className="w-4 h-4" /> Completed
                          </span>
                        )}
                        {apt.status === "cancelled" && (
                          <span className="flex items-center gap-1 text-destructive text-sm">
                            <XCircle className="w-4 h-4" /> Cancelled
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "patients" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Patients</h1>
                  <p className="text-muted-foreground">Your patient records</p>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search patients..." className="pl-10" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockPatients.map((patient) => (
                  <div key={patient.id} className="p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-health-teal-light flex items-center justify-center text-2xl">
                        {patient.image}
                      </div>
                      <div>
                        <h4 className="font-semibold">{patient.name}</h4>
                        <p className="text-sm text-muted-foreground">Last visit: {patient.lastVisit}</p>
                      </div>
                    </div>
                    <div className="p-3 bg-secondary/50 rounded-lg mb-4">
                      <p className="text-sm font-medium">Condition:</p>
                      <p className="text-sm text-muted-foreground">{patient.condition}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="w-4 h-4 mr-1" />
                        Records
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "consultations" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-2xl font-bold">Video Consultations</h1>
                <p className="text-muted-foreground">Connect with your patients via video call</p>
              </div>

              <div className="aspect-video bg-foreground rounded-2xl flex items-center justify-center">
                <div className="text-center text-background">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">No Active Call</h3>
                  <p className="text-sm opacity-70 mb-4">Start a video consultation with your next patient</p>
                  <Button variant="secondary">
                    Start Next Consultation
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Upcoming Video Calls</h3>
                <div className="space-y-3">
                  {mockAppointments.filter(a => a.type === "Video Call" && a.status === "upcoming").map((apt) => (
                    <div key={apt.id} className="p-4 bg-card rounded-xl border border-border/50 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-health-blue-light flex items-center justify-center text-xl">
                        👤
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{apt.patient}</h4>
                        <p className="text-sm text-muted-foreground">{apt.time}</p>
                      </div>
                      <Button>
                        <Video className="w-4 h-4 mr-2" />
                        Join Call
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6 animate-fade-in max-w-2xl">
              <div>
                <h1 className="text-2xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 bg-card rounded-2xl border border-border/50">
                  <h3 className="font-semibold mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input defaultValue="Dr. Sarah Johnson" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Medical License</label>
                      <Input defaultValue="MED-12345-6789" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Specialization</label>
                      <Input defaultValue="Cardiologist" />
                    </div>
                    <Button>Save Changes</Button>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-2xl border border-border/50">
                  <h3 className="font-semibold mb-4">Availability</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Available for Consultations</p>
                        <p className="text-sm text-muted-foreground">Toggle to accept new appointments</p>
                      </div>
                      <Button variant="outline">Toggle</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Mobile Bottom Nav */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-xl border-t border-border/50 safe-area-inset-bottom">
          <div className="flex justify-around py-2">
            {tabs.slice(0, 4).map((tab) => (
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
        </nav>
      </div>
    </div>
  );
};

export default DoctorDashboard;
