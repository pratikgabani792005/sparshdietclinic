import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h6 className="text-sage-600 mb-3">GET IN TOUCH</h6>
          <h2 className="mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Begin Your Wellness Journey</h2>
          <p className="text-stone-600 max-w-2xl mx-auto" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
            Schedule your personalized consultation and take the first step towards a healthier, more vibrant you.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-2xl w-full"
          >
            <div>
              <h3 className="mb-6" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Let's Connect</h3>
              <p className="text-stone-600 mb-8" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
                Whether you're looking to manage your weight, address specific health concerns, or simply optimize your nutrition, I'm here to guide you every step of the way.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.a
                href="tel:+917359552692"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-sage-700" />
                </div>
                <div>
                  <p className="text-stone-800 mb-1" style={{ fontWeight: 600 }}>Phone</p>
                  <p className="text-stone-600">+91 73595 52692</p>
                  <p className="text-stone-500 mt-1" style={{ fontSize: '0.875rem' }}>Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:sparshdietclinic20@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-peach-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-peach-700" />
                </div>
                <div>
                  <p className="text-stone-800 mb-1" style={{ fontWeight: 600 }}>Email</p>
                  <p className="text-stone-600">sparshdietclinic20@gmail.com</p>
                  <p className="text-stone-500 mt-1" style={{ fontSize: '0.875rem' }}>Response within 24 hours</p>
                </div>
              </motion.a>

              <motion.a
                href="https://maps.app.goo.gl/H3a5UsJc6G6WRtmMA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-stone-700" />
                </div>
                <div>
                  <p className="text-stone-800 mb-1" style={{ fontWeight: 600 }}>Location</p>
                  <p className="text-stone-600">218, 2nd floor Avadh pride, opposite metro pillar no 140</p>
                  <p className="text-stone-600">Near Nirant cross road, Vastral, Ahmedabad</p>
                </div>
              </motion.a>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-sage-50 to-peach-50/30 rounded-2xl p-6 border border-sage-100">
              <h4 className="text-stone-800 mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>Office Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-600">Monday - Friday</span>
                  <span className="text-stone-800" style={{ fontWeight: 600 }}>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Saturday</span>
                  <span className="text-stone-800" style={{ fontWeight: 600 }}>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Sunday</span>
                  <span className="text-stone-800" style={{ fontWeight: 600 }}>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-stone-100"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your health goals and concerns..."
                  />
                </div>

                <motion.button
                  whileHover={{ boxShadow: '0 0 25px rgba(152, 185, 141, 0.7)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                  style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', backgroundColor: '#557155', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#402211'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#557155'}
                >
                  <span >Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-stone-800 mb-3">Message Sent!</h3>
                <p className="text-stone-600 text-center" style={{ fontSize: '1.0625rem', lineHeight: 1.75 }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
