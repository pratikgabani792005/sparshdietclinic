import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-8 text-center" style={{ fontFamily: 'Stack Sans Notch', fontOpticalSizing: 'auto' }}>
            Privacy Policy
          </h1>
          
          <div className="prose prose-stone max-w-none space-y-8 text-stone-700">
            <p className="text-sm text-stone-500 text-center">Last Updated: November 26, 2025</p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">1. Introduction</h2>
              <p>
                Welcome to Sparsh Diet Clinic ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">2. Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address and telephone numbers provided through our contact forms.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">3. How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To respond to your inquiries and provide the services you request.</li>
                <li>To improve our website, products/services, marketing, and customer relationships.</li>
                <li>To manage our relationship with you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">5. Third-Party Links</h2>
              <p>
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-stone-800">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> sparshdietclinic20@gmail.com<br />
                <strong>Phone:</strong> +91 73595 52692
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
