import { Code, BarChart, Wrench, Lightbulb, Users, Eye, Rocket } from "lucide-react";

export default function Skills() {
  const technicalSkills = [
    {
      icon: <Code className="text-3xl text-primary" />,
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      icon: <BarChart className="text-3xl text-primary" />,
      title: "BI Tools",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 82 }
      ]
    },
    {
      icon: <Wrench className="text-3xl text-primary" />,
      title: "Other Tools",
      skills: [
        { name: "Excel", level: 92 },
        { name: "Machine Learning", level: 75 }
      ]
    }
  ];

  const softSkills = [
    {
      icon: <Lightbulb className="text-4xl text-primary" />,
      title: "Problem Solving",
      description: "Creative analytical thinking"
    },
    {
      icon: <Users className="text-4xl text-primary" />,
      title: "Communication",
      description: "Clear data storytelling"
    },
    {
      icon: <Eye className="text-4xl text-primary" />,
      title: "Attention to Detail",
      description: "Precision in analysis"
    },
    {
      icon: <Rocket className="text-4xl text-primary" />,
      title: "Continuous Learning",
      description: "Always evolving skills"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4" data-testid="skills-title">Technical Skills</h2>
          <p className="text-xl text-muted-foreground" data-testid="skills-subtitle">
            Technologies and tools I use to bring data to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technicalSkills.map((category, index) => (
            <div 
              key={category.title}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-semibold ml-4" data-testid={`skill-category-${category.title.toLowerCase().replace(' ', '-')}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium" data-testid={`skill-name-${skill.name.toLowerCase().replace(' ', '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground" data-testid={`skill-level-${skill.name.toLowerCase().replace(' ', '-')}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="skill-bar h-3 rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                        data-testid={`skill-bar-${skill.name.toLowerCase().replace(' ', '-')}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12 animate-fadeIn" data-testid="soft-skills-title">
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={skill.title}
                className="bg-card p-6 rounded-xl text-center border border-border hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`soft-skill-${skill.title.toLowerCase().replace(' ', '-')}`}
              >
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h4 className="font-semibold mb-2" data-testid={`soft-skill-title-${skill.title.toLowerCase().replace(' ', '-')}`}>
                  {skill.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`soft-skill-desc-${skill.title.toLowerCase().replace(' ', '-')}`}>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
