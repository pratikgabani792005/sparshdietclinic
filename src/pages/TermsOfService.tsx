import { motion } from 'motion/react';

export function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-8 text-center" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>
            Terms of Service
          </h1>
          
          <div className="prose prose-stone max-w-none space-y-8 text-stone-700">
            <p className="text-sm text-stone-500 text-center">Last Updated: November 26, 2025</p>

            <section className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h2 className="text-xl font-bold mb-4 text-red-800 flex items-center">
                ⚠️ Medical Disclaimer - Please Read Carefully
              </h2>
              <p className="text-red-900 font-medium">
                The content provided on this website, including text, graphics, images, and other material, is for informational purposes only. It is NOT intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Sparsh Diet Clinic website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">2. Use of Website</h2>
              <p>
                This website is provided "as is" and is intended for general information regarding diet and nutrition services. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">3. Limitation of Liability</h2>
              <p>
                In no event will Sparsh Diet Clinic, its owners, employees, or developers be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
              <p className="mt-4">
                This website is currently in a developmental phase. We do not guarantee that the site will be free from errors, bugs, or interruptions. You acknowledge that your use of the site is at your sole risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">4. Intellectual Property</h2>
              <p>
                The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">5. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. You should check this page regularly. Your continued use of the Site after any such change constitutes your acceptance of the new Terms of Service.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
