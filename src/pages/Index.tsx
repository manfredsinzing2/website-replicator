import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import heroIllustration from "@/assets/hero-illustration.png";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex flex-col lg:max-w-xl xl:max-w-2xl">
          <Header />
          <main className="flex-1 flex items-center justify-center px-6 py-12">
            <LoginForm />
          </main>
          <Footer />
        </div>

        {/* Right Side - Hero Illustration */}
        <div className="hidden lg:flex flex-1 relative overflow-hidden">
          {/* Gradient Background */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, hsl(230 50% 15%) 0%, hsl(260 40% 20%) 50%, hsl(230 50% 10%) 100%)"
            }}
          />
          
          {/* Glow Effect */}
          <div 
            className="absolute inset-0 animate-pulse-glow"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, hsl(260 60% 50% / 0.3) 0%, transparent 60%)"
            }}
          />
          
          {/* Hero Image */}
          <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
            <img
              src={heroIllustration}
              alt="Webmail illustration showing a woman with floating email icons"
              className="max-w-full max-h-full object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
