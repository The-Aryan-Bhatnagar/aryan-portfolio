import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CertificateData } from "./Certifications";

export default function CertificateModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [certificate, setCertificate] = useState<CertificateData | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setCertificate(event.detail);
      setIsOpen(true);
    };

    window.addEventListener('openCertModal', handleOpenModal as EventListener);
    return () => {
      window.removeEventListener('openCertModal', handleOpenModal as EventListener);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setCertificate(null), 300);
  };

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
          data-testid="certificate-modal-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card rounded-2xl p-8 max-w-2xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
            data-testid="certificate-modal"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl transition-colors"
              data-testid="close-modal-button"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <img 
                src={certificate.image} 
                alt={certificate.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                data-testid="certificate-modal-image"
              />
              <h3 className="text-2xl font-bold mb-2" data-testid="certificate-modal-title">
                {certificate.title}
              </h3>
              <p className="text-primary font-semibold mb-2" data-testid="certificate-modal-issuer">
                {certificate.issuer}
              </p>
              <p className="text-muted-foreground mb-4" data-testid="certificate-modal-date">
                {certificate.date}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="certificate-modal-description">
                {certificate.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {certificate.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    data-testid={`certificate-modal-skill-${skill.toLowerCase().replace(' ', '-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
