import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { Scale } from 'lucide-react';

export function WeightLoss() {
  return (
    <ServiceDetailLayout
      title="Weight Loss Program"
      subtitle="SUSTAINABLE WEIGHT MANAGEMENT"
      description="Achieve your ideal weight through a scientifically-designed program that combines personalized nutrition, behavioral support, and lifestyle optimization. No crash diets, no extreme restrictions—just sustainable, evidence-based strategies that work with your body, not against it."
      heroImage="https://images.unsplash.com/photo-1752095809269-ac13b5c9db8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHQlMjBsb3NzJTIwaGVhbHRoeSUyMGZvb2R8ZW58MXx8fHwxNzYzMzg0NjE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      icon={Scale}
      benefits={[
        'Personalized caloric and macronutrient targets based on your metabolism',
        'Sustainable meal plans that fit your lifestyle and preferences',
        'Weekly progress tracking and plan adjustments',
        'Education on portion control and mindful eating',
        'Strategies to overcome emotional eating patterns',
        'Long-term weight maintenance support',
        'Access to exclusive recipes and meal prep guides',
        'Optional integration with body contouring treatments',
        'Accountability and motivation throughout your journey',
      ]}
      process={[
        {
          title: 'Initial Assessment',
          description: 'Comprehensive health evaluation, metabolic testing, and goal setting to create your personalized baseline.',
        },
        {
          title: 'Custom Plan Design',
          description: 'Tailored nutrition plan with specific meal guidelines, timing strategies, and lifestyle recommendations.',
        },
        {
          title: 'Implementation',
          description: 'Begin your program with full support, educational resources, and tools for tracking progress.',
        },
        {
          title: 'Ongoing Support',
          description: 'Regular check-ins, plan adjustments, and continued guidance until you reach and maintain your goal.',
        },
      ]}
      whoItsFor={[
        'Individuals looking to lose 10+ pounds sustainably',
        'Those who have struggled with yo-yo dieting',
        'People seeking a science-based approach to weight loss',
        'Anyone wanting to improve their relationship with food',
        'Clients preparing for special events or milestones',
        'Individuals managing weight-related health conditions',
        'Those seeking long-term lifestyle transformation',
        'People who want professional guidance and accountability',
      ]}
      whatToExpect={[
        {
          title: 'First Month',
          description: 'Initial weight loss of 4-8 pounds as your body adjusts to optimized nutrition. You\'ll learn fundamental principles and establish new habits.',
        },
        {
          title: 'Months 2-3',
          description: 'Steady progress of 1-2 pounds per week. Increased energy levels, improved sleep, and noticeable changes in how clothes fit.',
        },
        {
          title: 'Months 4-6',
          description: 'Continued weight loss with enhanced muscle definition. Mastery of meal planning, portion control, and mindful eating practices.',
        },
        {
          title: 'Beyond 6 Months',
          description: 'Achievement of goal weight and transition to maintenance phase. Lifelong skills for sustaining your results and optimal health.',
        },
      ]}
    />
  );
}
