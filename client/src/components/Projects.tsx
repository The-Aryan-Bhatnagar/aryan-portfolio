import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Sales Analytics Dashboard",
      description: "Comprehensive Power BI dashboard analyzing sales performance across multiple regions and time periods. Features interactive visualizations, KPI tracking, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Power BI", "SQL", "DAX"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Customer Behavior Analysis",
      description: "Python-based analysis of customer purchasing patterns using machine learning algorithms. Includes clustering analysis and predictive modeling for customer lifetime value.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Financial Data Visualization",
      description: "Interactive Tableau dashboard for financial performance tracking. Features real-time data connections, drill-down capabilities, and automated alerts for key metrics.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Tableau", "SQL", "Excel"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description: "End-to-end analysis of supply chain efficiency using advanced analytics. Includes inventory optimization, demand forecasting, and operational KPI tracking.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Power BI", "R"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground" data-testid="projects-subtitle">
            Showcasing my data analysis and visualization work
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-background rounded-2xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`project-${project.id}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
