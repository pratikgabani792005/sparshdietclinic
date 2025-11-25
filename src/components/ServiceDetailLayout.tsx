import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Users, TrendingUp, LucideIcon } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  process: { title: string; description: string }[];
  whoItsFor: string[];
  whatToExpect: { title: string; description: string }[];
  icon: LucideIcon;
}

export function ServiceDetailLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  process,
  whoItsFor,
  whatToExpect,
  icon: Icon,
}: ServiceDetailProps) {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
        <Link to="/#services">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-stone-600 hover:text-sage-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Back to Services</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage-100 to-peach-100 flex items-center justify-center">
                <Icon className="w-7 h-7 text-sage-700" />
              </div>
              <h6 className="text-sage-600">{subtitle}</h6>
            </div>
            
            <h1 className="mb-6">{title}</h1>
            
            <p className="text-stone-600 mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              {description}
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-sage-600 text-white rounded-full hover:from-sage-700 hover:to-sage-800 transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em' }}
            >
              Book Consultation
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={heroImage}
              alt={title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-sage-50/50 to-peach-50/20 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Key Benefits</h2>
            <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
              Experience comprehensive support designed to help you achieve lasting results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start space-x-3 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-sage-700" />
                </div>
                <p className="text-stone-700" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                  {benefit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">How It Works</h2>
          <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
            A structured approach designed for sustainable success and lasting transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage-600 to-sage-700 text-white flex items-center justify-center mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '1.5rem', fontWeight: 600 }}>
                  {index + 1}
                </div>
                <h4 className="text-stone-800 mb-3">{step.title}</h4>
                <p className="text-stone-600" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-sage-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-24 mb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-sage-700" />
            </div>
            <h2 className="mb-4">Who This Service Is For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoItsFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-stone-50 rounded-xl p-4"
              >
                <div className="w-2 h-2 rounded-full bg-sage-600 flex-shrink-0" />
                <p className="text-stone-700" style={{ fontSize: '1rem' }}>
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 rounded-xl bg-peach-100 flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-7 h-7 text-peach-700" />
          </div>
          <h2 className="mb-4">What to Expect</h2>
          <p className="text-stone-600 max-w-3xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
            Your journey with personalized nutrition guidance and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whatToExpect.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-stone-50 rounded-2xl p-8 shadow-sm border border-stone-100"
            >
              <h4 className="text-stone-800 mb-3">{item.title}</h4>
              <p className="text-stone-600" style={{ fontSize: '1rem', lineHeight: 1.7 }}>
                {item.description}
              </p>
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
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="mb-8 opacity-90" style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            Schedule your personalized consultation and take the first step towards achieving your health goals.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-white text-sage-700 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-lg"
            style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em' }}
          >
            Book Your Consultation
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
