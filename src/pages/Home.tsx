import { motion } from 'motion/react';
import { ServiceCard } from '../components/ServiceCard';
import { BMICalculator } from '../components/BMICalculator';
import { ContactSection } from '../components/ContactSection';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  TrendingUp, 
  Activity, 
  Heart, 
  Droplets, 
  Apple, 
  Clipboard,
  Sparkles,
  CheckCircle2,
  Award
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const services = [
    {
      title: 'Weight Loss',
      description: 'Personalized programs combining nutrition science with sustainable lifestyle changes for healthy, lasting weight management.',
      icon: Scale,
      link: '/service/weight-loss',
    },
    {
      title: 'Weight Gain',
      description: 'Strategic nutrition plans designed to build lean muscle mass and achieve healthy weight gain through balanced, nutrient-dense diets.',
      icon: TrendingUp,
      link: '/service/weight-gain',
    },
    {
      title: 'Diabetes Mellitus Management',
      description: 'Expert guidance for blood sugar control through customized meal plans, portion control, and glycemic index optimization.',
      icon: Activity,
      link: '/service/diabetes',
    },
    {
      title: 'Cholesterol & Thyroid Balance',
      description: 'Targeted dietary interventions to naturally regulate cholesterol levels and support optimal thyroid function.',
      icon: Heart,
      link: '/service/cholesterol-thyroid',
    },
    {
      title: 'Kidney & Liver Disorder Diets',
      description: 'Specialized therapeutic nutrition for kidney and liver health, focusing on organ function support and symptom management.',
      icon: Droplets,
      link: '/service/kidney-liver',
    },
    {
      title: 'Balanced Diet',
      description: 'Holistic nutrition planning for overall wellness, energy optimization, and disease prevention through balanced eating.',
      icon: Apple,
      link: '/service/balanced-diet',
    },
    // {
    //   title: 'Complete Therapeutic Diet Programs',
    //   description: 'Comprehensive medical nutrition therapy for complex health conditions, integrating clinical expertise with personalized care.',
    //   icon: Clipboard,
    //   link: '/service/therapeutic',
    // },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-sage-50/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #78716c 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-24 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-sage-100/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-sage-700" />
                <span className="text-sage-800" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                  EVIDENCE-BASED NUTRITION
                </span>
              </motion.div>

              <h1 className="mb-6" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>
                Transform Your <span style={{ fontFamily: 'Lobster, cursive', color: '#557155' , fontStyle: 'italic'}}>Health</span> Through Personalized Nutrition
              </h1>

              <p className="text-stone-700 mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.75, fontWeight: 300 }}>
                Dt. Kunjan Patel - Sparsh Diet Clinic
              </p>

              <p className="text-stone-600 mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Your trusted partner for comprehensive diet and nutrition services in Ahmedabad. We specialize in therapeutic nutrition, weight management, diabetes care, PCOS management, and holistic wellness solutions. Combining scientific expertise with personalized care for sustainable, life-changing results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 relative z-20">
                <motion.a
                  href="#contact"
                  whileHover={{ boxShadow: '0 0 20px rgba(152, 185, 141, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 text-white rounded-full transition-all duration-300"
                  style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', backgroundColor: '#557155', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#402211'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#557155'; }}
                >
                  Book Consultation
                </motion.a>
                <motion.a
                  whileHover={{ boxShadow: '0 0 20px rgba(107, 142, 107, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-sage-600 text-sage-700 rounded-full hover:bg-sage-50 transition-all duration-300"
                  style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', cursor: 'pointer' }}
                >
                  Explore Services
                </motion.a>
              </div>

              {/* Quick Stats */}
              {/* <div className="grid grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center"
                >
                  <p className="text-sage-700 mb-1" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '2rem', fontWeight: 600 }}>
                    10+
                  </p>
                  <p className="text-stone-600" style={{ fontSize: '0.875rem' }}>
                    Years Experience
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <p className="text-sage-700 mb-1" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '2rem', fontWeight: 600 }}>
                    2000+
                  </p>
                  <p className="text-stone-600" style={{ fontSize: '0.875rem' }}>
                    Happy Clients
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <p className="text-sage-700 mb-1" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '2rem', fontWeight: 600 }}>
                    95%
                  </p>
                  <p className="text-stone-600" style={{ fontSize: '0.875rem' }}>
                    Success Rate
                  </p>
                </motion.div>
              </div> */}
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-500/20 to-peach-500/20 z-10" />
                <ImageWithFallback
                  src="/assets/IMG_20251119_132222@3x.jpg"
                  alt="Sparsh Diet Clinic - Expert Dietitian"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Floating Badge */}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-stone-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-sage-700" />
                  </div>
                  <div>
                    <p className="text-stone-800" style={{ fontWeight: 600 }}>Expert Care</p>
                    <p className="text-stone-600" style={{ fontSize: '0.875rem' }}>Certified Dietitians</p>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h6 className="text-sage-600 mb-3 ">SPECIALIZED SERVICES</h6>
            <h2 className="mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Comprehensive Nutrition Solutions</h2>
            <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
              From weight management to therapeutic nutrition, each service is tailored to your unique health profile, combining clinical expertise with compassionate care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.link}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ultrasound Cavitation Section */}
      <section id="cavitation" className="py-24 bg-gradient-to-br from-stone-50 to-sage-50/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1691935152546-3a9e05f4010b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWVkaWNhbCUyMGRldmljZXxlbnwxfHx8fDE3NjMzODUyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Ultrasound Cavitation Technology"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h6 className="text-sage-600 mb-3">ADVANCED TECHNOLOGY</h6>
              <h2 className="mb-6" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Ultrasound Cavitation for Inch Loss</h2>
              <p className="text-stone-600 mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
                Transform your body with our advanced ultrasonic cavitation treatment. This non-invasive, painless procedure targets stubborn fat deposits resistant to diet and exercise, helping you achieve visible inch loss when combined with our personalized nutrition plans.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Non-invasive fat reduction technology',
                  'Targets stubborn areas resistant to diet',
                  'No downtime or recovery needed',
                  'Visible results in 6-8 sessions',
                  'Safe, FDA-approved treatment',
                  'Complements your nutrition plan'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-sage-700" />
                    </div>
                    <p className="text-stone-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ boxShadow: '0 0 25px rgba(152, 185, 141, 0.7)' }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-white rounded-full transition-all duration-300 cursor-pointer"
                style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', backgroundColor: '#7a9a7a', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#402211'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#557155'}
              >
                Learn More About Treatment
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 ">
          <BMICalculator />
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
