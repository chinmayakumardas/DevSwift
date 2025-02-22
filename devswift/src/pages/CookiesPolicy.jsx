import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CookiesPolicy = () => {
  const policyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cookies-animate', {
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        clearProps: "all"
      });
    }, policyRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={policyRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="cookies-animate text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookies Policy</h1>
            <p className="text-xl text-gray-200">
              Last updated: February 22, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us recognize your device and remember certain information about your preferences or actions.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Types of Cookies We Use</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Essential Cookies</h3>
                <p className="text-gray-600">
                  Required for basic website functionality. These cookies ensure our website works properly.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600">
                  Help us understand how visitors interact with our website to improve user experience.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Preference Cookies</h3>
                <p className="text-gray-600">
                  Remember your settings and preferences for a better browsing experience.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Marketing Cookies</h3>
                <p className="text-gray-600">
                  Track your browsing habits to deliver targeted advertising and marketing.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                You can control and manage cookies in various ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</span>
                  <span className="text-gray-600">Browser Settings: Configure your browser to block or alert you about cookies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</span>
                  <span className="text-gray-600">Cookie Consent: Use our cookie consent banner to manage your preferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</span>
                  <span className="text-gray-600">Third-Party Tools: Use privacy tools to control tracking cookies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-red-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Impact of Disabling Cookies</h2>
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-gray-600">
                Please note that blocking or deleting cookies may impact your experience on our website:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Some features may not function properly</li>
                <li>Your preferences may not be saved</li>
                <li>You may need to log in again on each visit</li>
                <li>Personalized content may not be available</li>
              </ul>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update our Cookies Policy from time to time. Any changes will be posted on this page 
              with an updated revision date. We encourage you to periodically review this page for the 
              latest information on our cookie practices.
            </p>
          </div>

          {/* Contact Information */}
          <div className="cookies-animate bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Questions?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our use of cookies, please contact us at:
            </p>
            <div className="text-gray-600">
              <p className="flex items-center space-x-2">
                <span className="text-indigo-600">✉</span>
                <span>Email: chinmayakumardas2000@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-indigo-600">📞</span>
                <span>Phone: +91 6370073215</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-indigo-600">📍</span>
                <span>Address: Patia, Bhubaneswar, Odisha, PIN: 751024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
