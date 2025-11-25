import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WeightLoss } from './pages/services/WeightLoss';
import { WeightGain } from './pages/services/WeightGain';
import { Diabetes } from './pages/services/Diabetes';
import { CholesterolThyroid } from './pages/services/CholesterolThyroid';
import { KidneyLiver } from './pages/services/KidneyLiver';
import { BalancedDiet } from './pages/services/BalancedDiet';
import { Therapeutic } from './pages/services/Therapeutic';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the element is rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/weight-loss" element={<WeightLoss />} />
          <Route path="/service/weight-gain" element={<WeightGain />} />
          <Route path="/service/diabetes" element={<Diabetes />} />
          <Route path="/service/cholesterol-thyroid" element={<CholesterolThyroid />} />
          <Route path="/service/kidney-liver" element={<KidneyLiver />} />
          <Route path="/service/balanced-diet" element={<BalancedDiet />} />
          <Route path="/service/therapeutic" element={<Therapeutic />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
