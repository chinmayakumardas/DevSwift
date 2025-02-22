import { motion } from 'framer-motion';

const DataDeletion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-24 max-w-4xl"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Data Deletion Policy</h1>
      <div className="space-y-8 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Introduction</h2>
          <p className="mb-4">
            At DevSwift, we respect your right to control your personal data. This Data Deletion Policy outlines how you can request the deletion of your personal information from our systems and how we handle such requests.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Your Right to Data Deletion</h2>
          <p className="mb-4">You have the right to request the deletion of your personal data when:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The personal data is no longer necessary for the purpose it was collected</li>
            <li>You withdraw your consent for data processing</li>
            <li>You object to the processing of your data</li>
            <li>The personal data was unlawfully processed</li>
            <li>Legal obligations require the deletion of data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. How to Request Data Deletion</h2>
          <p className="mb-4">You can request data deletion through the following methods:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Submit a request through our contact form</li>
            <li>Send an email to privacy@devswift.com</li>
            <li>Contact our Data Protection Officer</li>
            <li>Use the "Delete My Data" option in your account settings</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Information Required</h2>
          <p className="mb-4">When requesting data deletion, please provide:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Full name and contact information</li>
            <li>Account details (if applicable)</li>
            <li>Specific data you want to be deleted</li>
            <li>Reason for deletion (optional)</li>
            <li>Proof of identity</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Our Response Process</h2>
          <p className="mb-4">Upon receiving your request:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We will acknowledge your request within 48 hours</li>
            <li>Verify your identity to ensure data security</li>
            <li>Process your request within 30 days</li>
            <li>Notify you once the deletion is complete</li>
            <li>Provide a detailed report of deleted data upon request</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">6. Data We May Retain</h2>
          <p className="mb-4">We may retain certain data if:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Required by law or legal obligations</li>
            <li>Necessary for legitimate business purposes</li>
            <li>Part of aggregated or anonymized datasets</li>
            <li>Essential for security and fraud prevention</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">7. Contact Information</h2>
          <p className="mb-4">
            For questions about our Data Deletion Policy or to submit a deletion request:
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

export default DataDeletion;
