import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-24 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Introduction</h2>
          <p className="mb-4">
            At DevSwift, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. By using our services, you consent to the practices described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">2.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and payment information</li>
            <li>Company information (if applicable)</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">2.2 Usage Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and actions taken</li>
            <li>Time and date of visits</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. How We Use Your Information</h2>
          <p className="mb-4">We use the collected information for various purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Data Protection</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Third-Party Services</h2>
          <p className="mb-4">
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your information</li>
            <li>Object to processing of your information</li>
            <li>Request transfer of your information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p>Email: chinmayakumardas2000@gmail.com</p>
            <p>Address: Patia, Bhubaneswar, Odisha, PIN: 751024</p>
            <p>Phone: +91 6370073215</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">8. Updates to This Policy</h2>
          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          <p className="text-sm text-gray-500">Last Updated: February 22, 2025</p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
