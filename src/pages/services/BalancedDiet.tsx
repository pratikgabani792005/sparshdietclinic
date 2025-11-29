import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Apple } from 'lucide-react';

export function BalancedDiet() {
  return (
    <ServiceDetailLayout
      title="Balanced Diet Program"
      subtitle="HOLISTIC WELLNESS & PREVENTION"
      description="Achieve optimal health and vitality through a balanced, whole-foods approach to nutrition. This comprehensive program focuses on disease prevention, energy optimization, immune support, and overall wellness through evidence-based nutritional principles."
      heroImage="/assets/balanced-diet.jpg"
      icon={Apple}
      benefits={[
        'Optimized energy levels throughout the day',
        'Improved immune function and disease resistance',
        'Better sleep quality and recovery',
        'Enhanced mental clarity and cognitive function',
        'Balanced macronutrients for optimal health',
        'Micronutrient-rich meal planning',
        'Anti-inflammatory food strategies',
        'Gut health optimization',
        'Sustainable eating habits for lifelong wellness',
      ]}
      process={[
        {
          title: 'Wellness Assessment',
          description: 'Evaluate your current diet, lifestyle, health goals, and any areas needing improvement.',
        },
        {
          title: 'Personalized Nutrition Blueprint',
          description: 'Design a balanced meal plan with variety, nutrient density, and foods you genuinely enjoy.',
        },
        {
          title: 'Habit Formation',
          description: 'Learn practical skills like meal prep, grocery shopping, and making healthy choices in any situation.',
        },
        {
          title: 'Lifestyle Integration',
          description: 'Refine your approach based on how your body responds, ensuring long-term sustainability.',
        },
      ]}
      whoItsFor={[
        'Health-conscious individuals seeking optimization',
        'People wanting to prevent chronic diseases',
        'Those looking to improve overall energy and vitality',
        'Individuals seeking better work-life balance through nutrition',
        'Busy professionals needing practical guidance',
        'Anyone wanting to establish healthy eating habits',
        'People transitioning to a healthier lifestyle',
        'Individuals seeking preventive healthcare',
      ]}
      whatToExpect={[
        {
          title: 'First 2 Weeks',
          description: 'Initial improvements in energy, digestion, and sleep. You\'ll establish a foundation of balanced eating patterns.',
        },
        {
          title: 'Month 1-2',
          description: 'Noticeable enhancements in mental clarity, mood stability, and physical vitality. Better stress resilience.',
        },
        {
          title: 'Months 3-6',
          description: 'Optimized body composition, improved immune function, and reduced inflammation. Mastery of healthy eating habits.',
        },
        {
          title: 'Long-term Benefits',
          description: 'Sustained wellness, disease prevention, healthy aging, and a positive relationship with food that lasts a lifetime.',
        },
      ]}
    />
  );
}
