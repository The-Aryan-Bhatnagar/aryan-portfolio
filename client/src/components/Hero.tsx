import { Download, Mail } from "lucide-react";

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slideInLeft">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6" data-testid="hero-title">
              <span className="gradient-text">Aryan</span><br/>
              <span className="text-foreground">Bhatnagar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-medium" data-testid="hero-subtitle">
              Data Analyst | BI Developer | Lifelong Learner
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl" data-testid="hero-description">
              Turning raw data into actionable insights that drive business decisions and create meaningful impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleNavClick('#resume')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
                data-testid="button-view-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </button>
              <button
                onClick={() => handleNavClick('#contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                data-testid="button-contact-me"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Aryan Bhatnagar professional photo" 
              className="rounded-2xl shadow-2xl w-80 h-80 object-cover transform hover:scale-105 transition-transform duration-300"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
