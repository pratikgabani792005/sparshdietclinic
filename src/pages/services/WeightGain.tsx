import { ServiceDetailLayout } from '../../components/ServiceDetailLayout';
import { TrendingUp } from 'lucide-react';

export function WeightGain() {
  return (
    <ServiceDetailLayout
      title="Weight Gain Program"
      subtitle="HEALTHY WEIGHT & MUSCLE BUILDING"
      description="Build lean muscle mass and achieve healthy weight gain through strategic nutrition planning. Whether you're an athlete, recovering from illness, or naturally lean, this program provides the caloric surplus and nutrient density needed for sustainable, healthy weight gain."
      heroImage="/assets/weightGain.jpg"
      icon={TrendingUp}
      benefits={[
        'Calculated caloric surplus for steady, healthy weight gain',
        'High-protein meal plans to support muscle development',
        'Nutrient-dense food selections for optimal health',
        'Strategic meal timing for maximum nutrient absorption',
        'Supplement recommendations when appropriate',
        'Strength training nutrition guidance',
        'Digestive health optimization',
        'Appetite enhancement strategies',
        'Regular progress monitoring and adjustments',
      ]}
      process={[
        {
          title: 'Metabolic Analysis',
          description: 'Assess your current metabolism, caloric needs, and identify any barriers to weight gain.',
        },
        {
          title: 'Nutrition Strategy',
          description: 'Design a high-calorie, nutrient-dense meal plan with optimal macronutrient ratios for lean mass gain.',
        },
        {
          title: 'Progressive Implementation',
          description: 'Gradually increase caloric intake to allow your body to adapt and build muscle efficiently.',
        },
        {
          title: 'Monitoring & Optimization',
          description: 'Track lean mass gains, adjust portions, and refine your plan for continued progress.',
        },
      ]}
      whoItsFor={[
        'Athletes looking to build muscle mass',
        'Individuals with naturally fast metabolism',
        'People recovering from illness or medical treatment',
        'Those with difficulty maintaining healthy weight',
        'Competitive athletes in bulking phases',
        'Individuals looking to improve strength and performance',
        'People with small appetites needing guidance',
        'Anyone wanting to gain weight the healthy way',
      ]}
      whatToExpect={[
        {
          title: 'Weeks 1-4',
          description: 'Initial adaptation period with gradual caloric increases. You may gain 1-2 pounds as your body adjusts to higher food intake.',
        },
        {
          title: 'Months 2-3',
          description: 'Steady weight gain of 0.5-1 pound per week, primarily lean muscle mass. Noticeable improvements in strength and energy.',
        },
        {
          title: 'Months 4-6',
          description: 'Continued muscle development with visible physical changes. Enhanced athletic performance and metabolic health.',
        },
        {
          title: 'Long-term',
          description: 'Achievement of target weight with sustainable eating habits. Maintenance strategies to preserve your gains.',
        },
      ]}
    />
  );
}
