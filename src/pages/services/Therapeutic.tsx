import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Clipboard } from 'lucide-react';

export function Therapeutic() {
  return (
    <ServiceDetailLayout
      title="Complete Therapeutic Diet Programs"
      subtitle="MEDICAL NUTRITION THERAPY"
      description="Comprehensive medical nutrition therapy for complex health conditions. This advanced program provides clinical-level nutritional intervention for managing disease, supporting recovery, and optimizing health outcomes through evidence-based dietary protocols."
      heroImage="https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc2MzMwOTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
      icon={Clipboard}
      benefits={[
        'Medical-grade nutrition intervention for complex conditions',
        'Disease-specific therapeutic protocols',
        'Coordination with your medical care team',
        'Evidence-based treatment approaches',
        'Management of multiple comorbidities',
        'Nutritional support for surgery or treatment',
        'Symptom management through diet',
        'Prevention of malnutrition and complications',
        'Comprehensive monitoring and adjustments',
      ]}
      process={[
        {
          title: 'Clinical Assessment',
          description: 'In-depth medical nutrition assessment including labs, medications, symptoms, and treatment goals.',
        },
        {
          title: 'Therapeutic Protocol Design',
          description: 'Develop a comprehensive medical nutrition therapy plan aligned with clinical guidelines and your condition.',
        },
        {
          title: 'Interdisciplinary Collaboration',
          description: 'Work closely with your physicians, specialists, and healthcare team for integrated care.',
        },
        {
          title: 'Active Management',
          description: 'Frequent monitoring, ongoing adjustments, and responsive care as your condition evolves.',
        },
      ]}
      whoItsFor={[
        'Individuals with cancer requiring nutrition support',
        'Those with gastrointestinal disorders (IBD, Crohn\'s, celiac)',
        'People with cardiovascular disease',
        'Individuals with autoimmune conditions',
        'Those recovering from surgery or illness',
        'People with multiple chronic conditions',
        'Individuals requiring enteral or parenteral nutrition',
        'Anyone needing intensive medical nutrition therapy',
      ]}
      whatToExpect={[
        {
          title: 'Intensive Initial Phase',
          description: 'Comprehensive assessment and plan development. Close monitoring during the critical early implementation period.',
        },
        {
          title: 'Active Treatment Phase',
          description: 'Regular check-ins and plan modifications based on your response to therapy. Symptom tracking and lab monitoring.',
        },
        {
          title: 'Stabilization Phase',
          description: 'Condition stabilization with optimized nutrition support. Reduced symptoms and improved quality of life.',
        },
        {
          title: 'Maintenance & Prevention',
          description: 'Long-term management strategies to prevent relapse, maintain gains, and support ongoing health.',
        },
      ]}
    />
  );
}
