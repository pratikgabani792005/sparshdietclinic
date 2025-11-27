import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Heart } from 'lucide-react';

export function CholesterolThyroid() {
  return (
    <ServiceDetailLayout
      title="Cholesterol & Thyroid Balance"
      subtitle="CARDIOVASCULAR & HORMONAL HEALTH"
      description="Optimize your cholesterol levels and thyroid function through targeted nutritional interventions. This specialized program addresses lipid profiles and thyroid health using food as medicine, supporting cardiovascular wellness and metabolic balance."
      heroImage="/assets/cholestrolThyroid.jpg"
      icon={Heart}
      benefits={[
        'Improved cholesterol ratios (HDL, LDL, triglycerides)',
        'Natural support for optimal thyroid function',
        'Heart-healthy meal plans rich in omega-3s',
        'Strategies to reduce inflammation',
        'Nutrient optimization for thyroid hormone production',
        'Weight management to support hormonal balance',
        'Reduced cardiovascular disease risk',
        'Energy level improvements',
        'Guidance on thyroid-supporting nutrients',
      ]}
      process={[
        {
          title: 'Lab Review & Assessment',
          description: 'Analyze your lipid panel, thyroid function tests, and identify nutritional factors affecting your results.',
        },
        {
          title: 'Therapeutic Nutrition Plan',
          description: 'Design a heart-healthy, thyroid-supportive meal plan with strategic nutrient timing and food selections.',
        },
        {
          title: 'Lifestyle Integration',
          description: 'Implement dietary changes alongside stress management and sleep optimization for hormonal balance.',
        },
        {
          title: 'Progress Monitoring',
          description: 'Track improvements through follow-up labs and symptom assessment, adjusting your plan as needed.',
        },
      ]}
      whoItsFor={[
        'Individuals with high cholesterol or triglycerides',
        'Those with hypothyroidism or hyperthyroidism',
        'People with family history of heart disease',
        'Individuals seeking to avoid or reduce statin medications',
        'Those experiencing thyroid-related symptoms',
        'People with metabolic syndrome',
        'Individuals wanting preventive cardiovascular care',
        'Anyone seeking hormonal balance through nutrition',
      ]}
      whatToExpect={[
        {
          title: 'First Month',
          description: 'Initial dietary changes focusing on fiber, healthy fats, and thyroid-supporting nutrients. Some may notice improved energy.',
        },
        {
          title: 'Months 2-3',
          description: 'Measurable improvements in cholesterol levels. Better regulation of thyroid symptoms and metabolic function.',
        },
        {
          title: 'Months 4-6',
          description: 'Significant cholesterol improvements (10-20% reduction in LDL). Optimized thyroid function and hormone balance.',
        },
        {
          title: 'Ongoing',
          description: 'Sustained cardiovascular and thyroid health. Potential to reduce or eliminate medications with doctor approval.',
        },
      ]}
    />
  );
}
