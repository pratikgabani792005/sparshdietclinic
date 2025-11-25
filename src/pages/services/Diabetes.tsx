import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Activity } from 'lucide-react';

export function Diabetes() {
  return (
    <ServiceDetailLayout
      title="Diabetes Mellitus Management"
      subtitle="BLOOD SUGAR CONTROL & METABOLIC HEALTH"
      description="Take control of your diabetes through expert nutritional guidance. This comprehensive program focuses on blood sugar regulation, insulin sensitivity, and preventing complications through strategic meal planning, portion control, and glycemic index optimization."
      heroImage="https://images.unsplash.com/photo-1683638164050-974273624a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFiZXRlcyUyMGhlYWx0aHklMjBkaWV0fGVufDF8fHx8MTc2MzM4NTI3NXww&ixlib=rb-4.1.0&q=80&w=1080"
      icon={Activity}
      benefits={[
        'Stabilized blood sugar levels throughout the day',
        'Reduced HbA1c and improved metabolic markers',
        'Customized meal plans based on your medication schedule',
        'Education on carbohydrate counting and glycemic index',
        'Strategies to prevent hypoglycemic episodes',
        'Weight management for improved insulin sensitivity',
        'Reduced risk of diabetes-related complications',
        'Coordination with your medical team',
        'Ongoing support and glucose monitoring guidance',
      ]}
      process={[
        {
          title: 'Comprehensive Evaluation',
          description: 'Review medical history, current medications, glucose patterns, and lifestyle factors affecting blood sugar.',
        },
        {
          title: 'Personalized Plan',
          description: 'Create a diabetes-specific meal plan with carb targets, timing strategies, and glycemic load optimization.',
        },
        {
          title: 'Education & Tools',
          description: 'Learn carb counting, portion control, label reading, and how to make informed food choices.',
        },
        {
          title: 'Continuous Support',
          description: 'Regular monitoring, plan adjustments, and collaboration with your healthcare provider for optimal control.',
        },
      ]}
      whoItsFor={[
        'Individuals with Type 1 or Type 2 Diabetes',
        'Those with prediabetes seeking prevention',
        'People struggling with blood sugar fluctuations',
        'Individuals newly diagnosed needing guidance',
        'Those wanting to reduce diabetes medication',
        'People managing gestational diabetes',
        'Individuals with insulin resistance',
        'Anyone seeking better metabolic health',
      ]}
      whatToExpect={[
        {
          title: 'First 2 Weeks',
          description: 'Initial blood sugar stabilization as you implement your new meal plan. You\'ll learn to recognize patterns and make adjustments.',
        },
        {
          title: 'Month 1-2',
          description: 'More consistent glucose readings and reduced fluctuations. Improved energy levels and reduced cravings for sweets.',
        },
        {
          title: 'Months 3-6',
          description: 'Measurable improvements in HbA1c levels. Potential medication adjustments with your doctor\'s approval. Weight loss if needed.',
        },
        {
          title: 'Long-term',
          description: 'Mastery of diabetes self-management. Reduced risk of complications and improved overall quality of life.',
        },
      ]}
    />
  );
}
