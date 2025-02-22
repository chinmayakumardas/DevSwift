import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Legal = () => {
  const [activeSection, setActiveSection] = useState('terms');
  const legalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.legal-animate', {
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        clearProps: "all"
      });
    }, legalRef);

    return () => ctx.revert();
  }, []);

  const sections = {
    terms: {
      title: 'Terms of Service',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">
            By accessing and using DevSwift's website and services, you agree to be bound by these Terms of Service.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Services</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Custom software development</li>
              <li>Web application development</li>
              <li>Mobile application development</li>
              <li>UI/UX design services</li>
              <li>Technical consulting</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">User Obligations</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
              <li>Comply with applicable laws</li>
              <li>Respect intellectual property</li>
            </ul>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">
            DevSwift is committed to protecting your privacy and personal data.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Information We Collect</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Personal identification information</li>
              <li>Contact information</li>
              <li>Usage data and preferences</li>
              <li>Technical information</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">How We Use Your Data</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide and improve services</li>
              <li>Communicate with you</li>
              <li>Process transactions</li>
              <li>Ensure security</li>
            </ul>
          </div>
        </div>
      )
    },
    cookies: {
      title: 'Cookies Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">
            We use cookies to enhance your browsing experience and understand how you interact with our website.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Types of Cookies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Essential Cookies</h4>
                <p className="text-gray-600">Required for basic functionality</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800">Analytics Cookies</h4>
                <p className="text-gray-600">Track website usage patterns</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Preference Cookies</h4>
                <p className="text-gray-600">Remember your settings</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800">Marketing Cookies</h4>
                <p className="text-gray-600">Enable targeted advertising</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    deletion: {
      title: 'Data Deletion Policy',
      content: (
        <div className="space-y-6">
          <p className="text-gray-600">
            You have the right to request deletion of your personal data from our systems.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">What We Delete</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Account information</li>
              <li>Personal data</li>
              <li>Usage history</li>
              <li>Communication records</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Exceptions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Legal compliance records</li>
              <li>Financial transaction records</li>
              <li>Security-related information</li>
            </ul>
          </div>
        </div>
      )
    }
  };

  return (
    <div ref={legalRef} className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="legal-animate text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl text-gray-200">
              Last updated: February 22, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Tabs */}
          <div className="legal-animate flex flex-wrap gap-4 mb-12">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="legal-animate bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {sections[activeSection].title}
            </h2>
            {sections[activeSection].content}
          </div>

          {/* Contact Section */}
          <div className="legal-animate bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Questions?</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our legal policies, please contact us:
            </p>
            <div className="text-gray-600">
              <p className="flex items-center space-x-2">
                <span className="text-blue-600">✉</span>
                <span>Email: chinmayakumardas2000@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-blue-600">📞</span>
                <span>Phone: +91 6370073215</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-blue-600">📍</span>
                <span>Address: Patia, Bhubaneswar, Odisha, PIN: 751024</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
