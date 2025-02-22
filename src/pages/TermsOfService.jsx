import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-24 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Terms of Service</h1>
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using DevSwift's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            The Service and its original content, features, and functionality are owned by DevSwift and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. User Account</h2>
          <p className="mb-4">When creating an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You are responsible for safeguarding your account password</li>
            <li>You agree not to disclose your password to any third party</li>
            <li>You must notify us immediately upon becoming aware of any breach of security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Acceptable Use</h2>
          <p className="mb-4">You agree not to use the Service:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>For any unlawful purpose or to violate any laws</li>
            <li>To transmit harmful or malicious code</li>
            <li>To impersonate or attempt to impersonate DevSwift or others</li>
            <li>To interfere with or disrupt the service or servers</li>
            <li>To collect or track personal information of others</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall DevSwift, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">8. Contact Information</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: chinmayakumardas2000@gmail.com</p>
            <p>Address: Patia, Bhubaneswar, Odisha, PIN: 751024</p>
            <p>Phone: +91 6370073215</p>
          </div>
        </section>

        <section>
          <p className="text-sm text-gray-500">Last Updated: February 22, 2025</p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;
