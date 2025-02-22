import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Home = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.animate-section', {
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        clearProps: "all"
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={homeRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-section max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              DevSwift is your trusted partner in building innovative software solutions. 
              We combine cutting-edge technology with creative excellence to deliver exceptional results.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-blue-900 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="animate-section text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose DevSwift?</h2>
          <p className="text-xl text-gray-600">
            We deliver excellence through innovation, quality, and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="animate-section bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovative Solutions</h3>
            <p className="text-gray-600">
              We stay ahead of the curve with cutting-edge technologies and creative approaches to solve complex challenges.
            </p>
          </div>

          <div className="animate-section bg-white p-8 rounded-xl shadow-lg">
            <div className="text-indigo-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Secure & Reliable</h3>
            <p className="text-gray-600">
              Security is our priority. We implement robust measures to protect your data and ensure reliable performance.
            </p>
          </div>

          <div className="animate-section bg-white p-8 rounded-xl shadow-lg">
            <div className="text-purple-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600">
              We understand the importance of time-to-market and deliver high-quality solutions within your timeline.
            </p>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="animate-section bg-white rounded-xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Technologies We Excel In</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">React</div>
              <div className="text-gray-600">Modern Web Apps</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-600 mb-2">Node.js</div>
              <div className="text-gray-600">Backend Solutions</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">Python</div>
              <div className="text-gray-600">AI & Data Science</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">Flutter</div>
              <div className="text-gray-600">Mobile Apps</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="animate-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to bring your vision to life
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-gradient-to-r from-blue-800 to-indigo-900 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
