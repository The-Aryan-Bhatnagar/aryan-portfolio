import { TrendingUp, Database } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            Passionate about transforming complex datasets into clear, actionable business intelligence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-primary" data-testid="journey-title">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4" data-testid="journey-text-1">
                I'm a dedicated data analyst with a passion for uncovering insights that drive strategic business decisions. My journey in data science began during my studies, where I discovered the power of transforming raw information into meaningful narratives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4" data-testid="journey-text-2">
                With expertise in Python, SQL, Power BI, and Tableau, I specialize in building comprehensive business intelligence solutions. I believe that great data analysis combines technical precision with clear storytelling to make complex insights accessible to all stakeholders.
              </p>
              <p className="text-muted-foreground leading-relaxed" data-testid="journey-text-3">
                As a lifelong learner, I continuously explore emerging technologies and methodologies in data science, machine learning, and business intelligence to stay at the forefront of the field.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-6 rounded-xl text-center border border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h4 className="font-semibold text-foreground" data-testid="skill-data-viz">Data Visualization</h4>
              </div>
              <div className="bg-primary/5 p-6 rounded-xl text-center border border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <Database className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h4 className="font-semibold text-foreground" data-testid="skill-db-mgmt">Database Management</h4>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fadeIn">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Data analytics workspace" 
              className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
              data-testid="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
