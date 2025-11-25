import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Users, GraduationCap, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const achievements = [
    {
      icon: GraduationCap,
      title: 'Expert Qualifications',
      items: [
        'Certified Dietitians & Nutritionists',
        'Specialized Training in Clinical Nutrition',
        'Advanced Therapeutic Diet Planning',
        'Evidence-Based Nutrition Protocols',
      ],
    },
    {
      icon: Award,
      title: 'Specialized Services',
      items: [
        'Weight Management Programs',
        'Diabetes & PCOS Care',
        'Therapeutic Diet Planning',
        'Ultrasonic Cavitation Treatment',
      ],
    },
    {
      icon: Briefcase,
      title: 'Our Expertise',
      items: [
        'Personalized Nutrition Counseling',
        'Comprehensive Health Assessments',
        'Lifestyle & Diet Modifications',
        'Ongoing Support & Monitoring',
      ],
    },
  ];

  const philosophy = [
    {
      title: 'Evidence-Based Approach',
      description: 'Every recommendation is grounded in the latest nutritional science and clinical research, ensuring you receive the most effective, scientifically-validated guidance.',
    },
    {
      title: 'Personalized Care',
      description: 'No two bodies are alike. Your nutrition plan is uniquely tailored to your health history, lifestyle, preferences, and goals—because cookie-cutter solutions never work.',
    },
    {
      title: 'Holistic Wellness',
      description: 'True health extends beyond numbers on a scale. I address physical, mental, and emotional wellbeing to create sustainable, life-enhancing transformations.',
    },
    {
      title: 'Sustainable Results',
      description: 'Quick fixes lead to temporary changes. I focus on building lasting habits and empowering you with knowledge to maintain your health journey long-term.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h6 className="text-sage-600 mb-3">ABOUT SPARSH DIET CLINIC</h6>
          <h1 className="mb-6" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>
            Your Partner in Health & Wellness
          </h1>
          <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
            Led by Dt. Kunjan Patel, Sparsh Diet Clinic is dedicated to transforming lives through personalized nutrition, therapeutic diet programs, and holistic wellness solutions backed by years of expertise and success stories.
          </p>
        </motion.div>

        {/* Main Image Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548229591-a7feaad39518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRpZXRpY2lhbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM4NTI3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sparsh Diet Clinic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-60">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611779013424-1ec1aaf87be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzYzMzg1Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nutrition consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-60">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683638164050-974273624a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFiZXRlcyUyMGhlYWx0aHklMjBkaWV0fGVufDF8fHx8MTc2MzM4NTI3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Healthy nutrition"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div> */}
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-br from-sage-50/50 to-peach-50/20 py-16 mb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-sage-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className=''>My Journey</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-stone-700 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Sparsh Diet Clinic was founded with a vision to provide comprehensive, evidence-based nutrition care to individuals seeking to improve their health and quality of life. Our journey began with a simple belief: proper nutrition is the cornerstone of good health, and everyone deserves personalized guidance to achieve their wellness goals.
              </p>

              <p className="text-stone-700 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Located in Ahmedabad, Gujarat, our clinic specializes in therapeutic nutrition, weight management, diabetes care, PCOS/PCOD management, thyroid disorders, and various lifestyle-related health conditions. We combine scientific knowledge with practical, sustainable dietary solutions tailored to each individual's unique needs.
              </p>

              <p className="text-stone-700 mb-6" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                Over the years, we've helped hundreds of clients transform their lives—from managing chronic diseases to achieving healthy weight goals. Each success story strengthens our commitment to providing compassionate, expert care that goes beyond just diet plans.
              </p>

              <p className="text-stone-700" style={{ fontSize: '1.0625rem', lineHeight: 1.8 }}>
                At Sparsh Diet Clinic, we create a supportive environment where evidence-based nutrition meets holistic wellness. Our approach empowers clients not just to manage symptoms, but to embrace a healthier, more vibrant lifestyle through proper nutrition, lifestyle modifications, and continuous support.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h6 className="text-sage-600 mb-3">MY PHILOSOPHY</h6>
          <h2 className="mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Core Values & Approach</h2>
          <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
            My practice is built on four fundamental pillars that guide every client interaction and treatment plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-sage-800 mb-4">{item.title}</h3>
              <p className="text-stone-600" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h6 className="text-sage-600 mb-3">CREDENTIALS & EXPERIENCE</h6>
            <h2 style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Professional Background</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 border border-stone-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage-100 to-peach-100 flex items-center justify-center mb-6">
                  <achievement.icon className="w-7 h-7 text-sage-700" />
                </div>
                <h4 className="text-stone-800 mb-6" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>{achievement.title}</h4>
                <ul className="space-y-3">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage-600 mt-2 flex-shrink-0" />
                      <span className="text-stone-600" style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h6 className="text-sage-600 mb-3">ACHIEVEMENTS</h6>
          <h2 style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Certifications & Awards</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: '/assets/IMG_7039[1].jpg', title: 'GCS medical college' },
            { img: '/assets/IMG_7040[1].jpg', title: 'Noble Gastro hospital' },
            { img: '/assets/IMG_7041[1].jpg', title: 'Yoga Teacher Training' },
            { img: '/assets/IMG_7042[1].jpg', title: 'Post Graduate Certification' },
            { img: '/assets/IMG_7043[1].jpg', title: 'Grade sheet' },
            { img: '/assets/IMG_7044[1].jpg', title: 'Masters of Science' }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3] cursor-pointer"
              onClick={() => window.open(cert.img, '_blank')}
            >
              <ImageWithFallback
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-contain bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white" style={{ fontWeight: 600 }}>
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-sage-600 to-sage-700 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' , color : '#f3f4f6'}}>Ready to Transform Your Health?</h2>
          <p className="mb-8 text-white" style={{ fontSize: '1.125rem', lineHeight: 1.7 , color : '#f3f4f6' }}>
            Join thousands of clients who have achieved their wellness goals. Let's start your journey today.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-sage-700 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-lg"
            style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em' }}
          >
            Schedule Your Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
