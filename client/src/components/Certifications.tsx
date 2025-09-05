import { Tag, TrendingUp, Database, Code, Brain, BarChart } from "lucide-react";
import { useState } from "react";

export interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  icon: React.ReactNode;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  const certificates: CertificateData[] = [
    {
      id: 'cert1',
      title: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Comprehensive certification covering data preparation, modeling, visualization, and analysis using Power BI.',
      skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <Tag className="text-3xl text-primary" />
    },
    {
      id: 'cert2',
      title: 'Google Data Analytics Professional',
      issuer: 'Google / Coursera',
      date: '2024',
      description: 'Professional certificate program covering the entire data analysis process, from data collection to insights presentation.',
      skills: ['R', 'SQL', 'Tableau', 'Data Cleaning'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <TrendingUp className="text-3xl text-primary" />
    },
    {
      id: 'cert3',
      title: 'SQL for Data Science',
      issuer: 'IBM / Coursera',
      date: '2023',
      description: 'Advanced SQL techniques for data science applications, including complex queries, joins, and database optimization.',
      skills: ['SQL', 'Database Design', 'Query Optimization'],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <Database className="text-3xl text-primary" />
    },
    {
      id: 'cert4',
      title: 'Python for Data Analysis',
      issuer: 'HP Life',
      date: '2023',
      description: 'Comprehensive Python programming course focused on data analysis libraries and techniques.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <Code className="text-3xl text-primary" />
    },
    {
      id: 'cert5',
      title: 'Machine Learning Fundamentals',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description: 'Introduction to machine learning concepts, algorithms, and practical applications in business contexts.',
      skills: ['Machine Learning', 'Scikit-learn', 'Predictive Modeling'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <Brain className="text-3xl text-primary" />
    },
    {
      id: 'cert6',
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2023',
      description: 'Official Tableau certification demonstrating proficiency in data connection, field management, and basic visualization.',
      skills: ['Tableau', 'Data Visualization', 'Dashboard Design'],
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      icon: <BarChart className="text-3xl text-primary" />
    }
  ];

  // Store selected certificate in global state for modal
  const handleCertClick = (cert: CertificateData) => {
    setSelectedCert(cert);
    // Dispatch custom event for modal
    window.dispatchEvent(new CustomEvent('openCertModal', { detail: cert }));
  };

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4" data-testid="certifications-title">Certifications</h2>
          <p className="text-xl text-muted-foreground" data-testid="certifications-subtitle">
            Professional certifications and achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={cert.id}
              onClick={() => handleCertClick(cert)}
              className="bg-card p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`certificate-${cert.id}`}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2" data-testid={`cert-title-${cert.id}`}>
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`cert-issuer-${cert.id}`}>
                  {cert.issuer}
                </p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" data-testid={`cert-date-${cert.id}`}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
