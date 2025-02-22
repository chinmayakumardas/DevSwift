import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-item', {
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        clearProps: "all"
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={servicesRef} className="min-h-screen bg-gray-50">
      {/* Services Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              We offer comprehensive software solutions tailored to your business needs. 
              From web development to mobile applications, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Web Development */}
          <div className="service-item bg-white rounded-xl shadow-lg p-8">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom web applications built with modern technologies like React, Node.js, and Python. 
              We create responsive, scalable, and user-friendly solutions.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Custom Web Applications</li>
              <li>• E-commerce Solutions</li>
              <li>• Progressive Web Apps (PWA)</li>
              <li>• API Development & Integration</li>
            </ul>
          </div>

          {/* Mobile Development */}
          <div className="service-item bg-white rounded-xl shadow-lg p-8">
            <div className="text-indigo-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Mobile Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android. 
              We use React Native and Flutter for efficient multi-platform development.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• iOS Applications</li>
              <li>• Android Applications</li>
              <li>• Cross-platform Solutions</li>
              <li>• Mobile App Maintenance</li>
            </ul>
          </div>

          {/* Cloud Services */}
          <div className="service-item bg-white rounded-xl shadow-lg p-8">
            <div className="text-purple-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Cloud Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive cloud solutions using AWS, Azure, and Google Cloud. 
              We help you migrate, scale, and optimize your cloud infrastructure.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Cloud Migration</li>
              <li>• DevOps Services</li>
              <li>• Serverless Architecture</li>
              <li>• Cloud Security</li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Consulting */}
          <div className="service-item bg-white rounded-xl shadow-lg p-8">
            <div className="text-green-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">IT Consulting</h3>
            <p className="text-gray-600 mb-4">
              Strategic technology consulting to help your business grow and transform digitally.
              We provide expert guidance on technology selection and implementation.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Digital Transformation</li>
              <li>• Technology Assessment</li>
              <li>• Process Optimization</li>
              <li>• IT Strategy Planning</li>
            </ul>
          </div>

          {/* Maintenance */}
          <div className="service-item bg-white rounded-xl shadow-lg p-8">
            <div className="text-red-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Maintenance & Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive maintenance and support services for your applications.
              We ensure your systems run smoothly and stay up-to-date.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• 24/7 Technical Support</li>
              <li>• Performance Monitoring</li>
              <li>• Security Updates</li>
              <li>• Bug Fixes & Patches</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
