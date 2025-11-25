import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingDown, TrendingUp, Minus } from 'lucide-react';

export function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const weightKg = parseFloat(weight);
      const heightM = parseFloat(height) / 100;
      const bmiValue = weightKg / (heightM * heightM);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight');
      } else {
        setCategory('Obese');
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return 'sage';
    if (bmi < 18.5) return 'blue';
    if (bmi >= 18.5 && bmi < 25) return 'green';
    if (bmi >= 25 && bmi < 30) return 'yellow';
    return 'red';
  };

  const getBMIIcon = () => {
    if (!bmi) return null;
    if (bmi < 18.5) return <TrendingDown className="w-6 h-6" />;
    if (bmi >= 18.5 && bmi < 25) return <Minus className="w-6 h-6" />;
    return <TrendingUp className="w-6 h-6" />;
  };

  const colorMap = {
    sage: 'bg-sage-100 text-sage-800 border-sage-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    yellow: 'bg-amber-100 text-amber-800 border-amber-200',
    red: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-white to-stone-50 rounded-3xl p-8 lg:p-10 shadow-lg border border-stone-100"
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sage-100 to-peach-100 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-sage-700" />
        </div>
        <h3 style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '2rem', fontWeight: 400, color: '#292524' }}>
          BMI Calculator
        </h3>
      </div>

      <p className="text-stone-600 mb-8" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
        Calculate your Body Mass Index to understand your current health status and get personalized recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Weight Input */}
        <div>
          <label className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.02em' }}>
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="70"
            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
            style={{ fontSize: '1rem' }}
          />
        </div>

        {/* Height Input */}
        <div>
          <label className="block text-stone-700 mb-2" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.02em' }}>
            Height (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="170"
            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-all duration-300"
            style={{ fontSize: '1rem' }}
          />
        </div>
      </div>

      <motion.button
        whileHover={{ boxShadow: '0 0 25px rgba(152, 185, 141, 0.7)' }}
        whileTap={{ scale: 0.98 }}
        onClick={calculateBMI}
        className="w-full py-3.5 text-white rounded-xl transition-all duration-300 mb-6 cursor-pointer"
        style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.02em', backgroundColor: '#557155', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' , cursor: 'pointer'}}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#402211'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#557155'}
      >
        Calculate BMI
      </motion.button>

      {/* Result */}
      {bmi !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className={`rounded-xl p-6 border-2 ${colorMap[getBMIColor() as keyof typeof colorMap]}`}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm opacity-80 mb-1" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>
                YOUR BMI
              </p>
              <p style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto', fontSize: '2.5rem', fontWeight: 600, lineHeight: 1 }}>
                {bmi}
              </p>
            </div>
            <div className="opacity-60">
              {getBMIIcon()}
            </div>
          </div>
          <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            {category}
          </p>
          <p className="mt-3 opacity-80" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
            {category === 'Normal Weight'
              ? 'Great! You are in a healthy weight range. Maintain your current lifestyle.'
              : 'Book a consultation to receive a personalized nutrition plan tailored to your goals.'}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
