import { Download, CheckCircle } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // In a real application, this would link to an actual PDF file
    // For now, we'll show a placeholder action
    console.log("Resume download requested");
    alert("Resume download would start here. Please upload your actual resume PDF file to the server.");
  };

  return (
    <section id="resume" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4" data-testid="resume-title">Resume</h2>
          <p className="text-xl text-muted-foreground" data-testid="resume-subtitle">
            Download my complete professional resume
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg border border-border p-8 animate-scaleIn">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4" data-testid="resume-section-title">
                  Professional Resume
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="resume-description">
                  Comprehensive overview of my experience, skills, education, and achievements in data analysis and business intelligence.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span data-testid="resume-feature-1">Complete work experience and projects</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span data-testid="resume-feature-2">Technical skills and certifications</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span data-testid="resume-feature-3">Education and achievements</span>
                  </div>
                </div>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                  data-testid="download-resume-button"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Resume
                </button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Resume preview" 
                  className="rounded-xl shadow-lg max-w-md w-full"
                  data-testid="resume-preview-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
