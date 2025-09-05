import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
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

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
  ];

  const resourceLinks = [
    { href: "#certifications", label: "Certifications" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "mailto:aryan.bhatnagar@email.com",
      icon: <Mail className="text-xl" />,
      label: "Email",
      testId: "footer-email"
    },
    {
      href: "https://linkedin.com/in/aryan-bhatnagar",
      icon: <Linkedin className="text-xl" />,
      label: "LinkedIn",
      testId: "footer-linkedin"
    },
    {
      href: "https://github.com/aryanbhatnagar",
      icon: <Github className="text-xl" />,
      label: "GitHub",
      testId: "footer-github"
    },
    {
      href: "https://instagram.com/bhatnagararyan2601",
      icon: <Instagram className="text-xl" />,
      label: "Instagram",
      testId: "footer-instagram"
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold gradient-text mr-2" data-testid="footer-logo">AB</span>
              <span className="text-xl font-semibold" data-testid="footer-name">Aryan Bhatnagar</span>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="footer-description">
              Data Analyst passionate about turning complex data into actionable business insights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={link.testId}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4" data-testid="footer-resources-title">Resources</h4>
            <div className="space-y-2">
              {resourceLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-left text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="footer-copyright">
            © 2025 Aryan Bhatnagar | Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
