import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Phone, ArrowRight, ArrowLeft, Stethoscope, FileText, Building } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const DoctorLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [step, setStep] = useState<"form" | "otp">("form");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    license: "",
    specialization: "",
    hospital: "",
    experience: "",
    otp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (isSignup && (!formData.name || !formData.license || !formData.specialization)) {
      toast.error("Please fill all required fields");
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep("otp");
    toast.success("OTP sent to your phone");
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.otp.length < 4) {
      toast.error("Please enter a valid OTP");
      return;
    }
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast.success(isSignup ? "Registration successful!" : "Login successful!");
    navigate("/doctor-dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-health-green via-primary to-health-blue items-center justify-center p-12">
        <div className="max-w-lg text-primary-foreground">
          <h2 className="text-4xl font-bold mb-6">Join Our Network of Healthcare Heroes</h2>
          <p className="text-lg opacity-90 mb-8">
            Connect with patients, manage appointments, and provide quality healthcare through our platform.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">500+ Doctors</div>
                <div className="text-sm opacity-80">Already on our platform</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="font-semibold">Easy Verification</div>
                <div className="text-sm opacity-80">Quick license verification process</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-health-green to-primary flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{isSignup ? "Doctor Registration" : "Doctor Login"}</h1>
              <p className="text-sm text-muted-foreground">
                {isSignup ? "Create your professional account" : "Access your dashboard"}
              </p>
            </div>
          </div>

          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Mobile Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              {isSignup && (
                <>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Dr. John Smith"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Medical License Number *</label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        name="license"
                        placeholder="MED-XXXXX-XXXX"
                        value={formData.license}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Specialization *</label>
                    <select
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      className="flex h-11 w-full rounded-lg border border-input bg-card px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:border-primary transition-all duration-200"
                    >
                      <option value="">Select Specialization</option>
                      <option value="general">General Physician</option>
                      <option value="cardiologist">Cardiologist</option>
                      <option value="dermatologist">Dermatologist</option>
                      <option value="pediatrician">Pediatrician</option>
                      <option value="orthopedic">Orthopedic</option>
                      <option value="neurologist">Neurologist</option>
                      <option value="psychiatrist">Psychiatrist</option>
                      <option value="gynecologist">Gynecologist</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Hospital/Clinic</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        name="hospital"
                        placeholder="City General Hospital"
                        value={formData.hospital}
                        onChange={handleChange}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Years of Experience</label>
                    <Input
                      type="number"
                      name="experience"
                      placeholder="5"
                      value={formData.experience}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send OTP"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Enter OTP</label>
                <p className="text-sm text-muted-foreground mb-3">We sent a code to {formData.phone}</p>
                <Input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleChange}
                  maxLength={6}
                  className="text-center text-2xl tracking-widest"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify & Continue"}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <button
                type="button"
                onClick={() => setStep("form")}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Change phone number
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-border">
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setStep("form");
              }}
              className="w-full text-sm text-muted-foreground text-center"
            >
              {isSignup ? (
                <>Already registered? <span className="text-primary font-medium hover:underline">Login here</span></>
              ) : (
                <>New doctor? <span className="text-primary font-medium hover:underline">Register here</span></>
              )}
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground text-center">
              Are you a patient?{" "}
              <Link to="/user-login" className="text-primary font-medium hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
