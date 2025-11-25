import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '1.5rem', fontWeight: 400, color: '#ffffff' }}>
              Sparsh Diet Clinic
            </h3>
            <p className="text-stone-300 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem', lineHeight: 1.7 , color : '#d6d3d1'}}>
              Expert Dietitians & Nutrition Specialists
              <br />
              Ahmedabad, Gujarat
            </p>
            <p className="text-stone-300" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.875rem', lineHeight: 1.7 , color : '#d6d3d1'}}>
              Transforming lives through personalized nutrition and holistic wellness solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-stone-200 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' , color: '#ffffff' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  About Sparsh Clinic
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-stone-200 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' , color: '#ffffff' }}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/service/weight-loss" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Weight Management
                </Link>
              </li>
              <li>
                <Link to="/service/diabetes" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Diabetes Care
                </Link>
              </li>
              <li>
                <Link to="/service/therapeutic" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Therapeutic Diets
                </Link>
              </li>
              <li>
                <Link to="/#cavitation" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  Body Contouring
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-stone-200 mb-4" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' , color: '#ffffff' }}>
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <a href="tel:+917359552692" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>+91 73595 52692</a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <a href="mailto:sparshdietclinic20@gmail.com" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>sparshdietclinic20@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-sage-500 mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/H3a5UsJc6G6WRtmMA" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.9375rem' }}>
                  218, 2nd floor Avadh pride, opposite metro pillar no 140<br />
                  Near Nirant cross road, Vastral, Ahmedabad
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/sparsh_diet_clinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-sage-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.facebook.com/share/r/1BUMWF5hzd/"
                className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-sage-600 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-stone-400" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.875rem' , color : '#d6d3d1'}}>
              © 2025 Sparsh Diet Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-stone-400 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.875rem' , color : '#d6d3d1'}}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-stone-400 hover:text-sage-400 transition-colors" style={{ fontFamily: 'Raleway, sans-serif', fontOpticalSizing: 'auto', fontSize: '0.875rem' , color : '#d6d3d1'}}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
