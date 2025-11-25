import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, link, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      <Link to={link}>
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 overflow-hidden h-full flex flex-col"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage-50/50 to-peach-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-sage-100 to-sage-50 flex items-center justify-center mb-6 group-hover:from-sage-200 group-hover:to-sage-100 transition-all duration-500"
            >
              <Icon className="w-7 h-7 text-sage-700" />
            </motion.div>

            {/* Title */}
            <h3 className="text-stone-900 mb-3 group-hover:text-sage-800 transition-colors duration-300" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '1.5rem', fontWeight: 500, lineHeight: 1.3 }}>
              {title}
            </h3>

            {/* Description */}
            <p className="text-stone-600 mb-6 flex-1" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
              {description}
            </p>

            {/* Link */}
            <div className="flex items-center text-sage-700 group-hover:text-sage-800 transition-colors duration-300">
              <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                LEARN MORE
              </span>
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>

          {/* Hover Border Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sage-500 to-peach-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
