import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Droplets } from 'lucide-react';

export function KidneyLiver() {
  return (
    <ServiceDetailLayout
      title="Kidney & Liver Disorder Diets"
      subtitle="ORGAN HEALTH & FUNCTION SUPPORT"
      description="Specialized therapeutic nutrition for kidney and liver health. This medical nutrition therapy program is designed to reduce organ stress, manage symptoms, slow disease progression, and optimize function through carefully controlled nutrient intake."
      heroImage="https://images.unsplash.com/photo-1754941622136-6664a3f50b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjB0aGVyYXB5fGVufDF8fHx8MTc2MzMwOTIwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
      icon={Droplets}
      benefits={[
        'Controlled protein, sodium, and phosphorus intake',
        'Reduced strain on compromised organ function',
        'Management of fluid and electrolyte balance',
        'Slowed progression of chronic kidney or liver disease',
        'Symptom relief (edema, fatigue, nausea)',
        'Prevention of malnutrition and muscle wasting',
        'Coordination with nephrologist or hepatologist',
        'Stage-specific dietary modifications',
        'Quality of life improvements',
      ]}
      process={[
        {
          title: 'Medical Nutrition Assessment',
          description: 'Comprehensive review of lab values, disease stage, medications, and symptoms to establish baseline.',
        },
        {
          title: 'Therapeutic Diet Design',
          description: 'Create a medically-appropriate meal plan with precise nutrient restrictions tailored to your condition.',
        },
        {
          title: 'Education & Implementation',
          description: 'Learn about safe foods, portion sizes, label reading, and meal preparation techniques.',
        },
        {
          title: 'Ongoing Medical Nutrition Therapy',
          description: 'Regular monitoring of labs and symptoms with plan adjustments to match disease progression.',
        },
      ]}
      whoItsFor={[
        'Individuals with chronic kidney disease (CKD)',
        'Those with fatty liver disease (NAFLD/NASH)',
        'People with cirrhosis or hepatitis',
        'Individuals on dialysis needing specialized nutrition',
        'Those with kidney stones seeking prevention',
        'People with compromised liver or kidney function',
        'Individuals preparing for organ transplant',
        'Anyone needing renal or hepatic diet therapy',
      ]}
      whatToExpect={[
        {
          title: 'Initial Phase',
          description: 'Learning the complexities of your therapeutic diet. Initial adjustments may feel challenging but become easier with practice.',
        },
        {
          title: 'First 1-2 Months',
          description: 'Improved lab values (potassium, phosphorus, liver enzymes). Reduction in symptoms like swelling and fatigue.',
        },
        {
          title: 'Months 3-6',
          description: 'Stabilized organ function with potentially slowed disease progression. Better energy and overall quality of life.',
        },
        {
          title: 'Long-term Management',
          description: 'Mastery of your therapeutic diet with confidence in food choices. Optimized organ health and prevention of complications.',
        },
      ]}
    />
  );
}
