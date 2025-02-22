import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        clearProps: "all"
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="min-h-screen bg-gray-50">
      {/* About Header */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="about-content text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DevSwift</h1>
            <p className="text-xl text-gray-200">
              Located in the heart of Bhubaneswar, DevSwift is your trusted partner for innovative software solutions. 
              With a passion for technology and a commitment to excellence, we transform complex challenges into elegant digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="about-content bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="text-lg text-gray-600 space-y-4">
            <p>
              Founded in Bhubaneswar, DevSwift has emerged as a leading software development company in Odisha. 
              Our journey began with a simple mission: to provide innovative, scalable, and reliable software solutions 
              that help businesses thrive in the digital age.
            </p>
            <p>
              Today, we're proud to serve clients across India with our expertise in web development, mobile applications, 
              and cloud solutions. Our team of skilled developers, designers, and project managers works tirelessly to 
              deliver solutions that not only meet but exceed our clients' expectations.
            </p>
            <p>
              Based in Patia, Bhubaneswar, we combine local insights with global best practices to create software 
              that makes a difference. Our commitment to quality and innovation has made us a trusted partner for 
              businesses looking to transform their digital presence.
            </p>
          </div>
        </div>

        {/* Team Values */}
        <div className="about-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
            <p className="text-gray-600">
              We embrace cutting-edge technologies and creative solutions to solve complex business challenges.
              Our innovative approach ensures that your business stays ahead in the digital world.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-indigo-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality</h3>
            <p className="text-gray-600">
              Our commitment to excellence ensures that every project meets the highest standards of quality and performance.
              We follow industry best practices and rigorous testing procedures.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-purple-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Collaboration</h3>
            <p className="text-gray-600">
              We believe in building strong partnerships with our clients to create solutions that truly matter.
              Your success is our success, and we work together to achieve your goals.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="about-content bg-gradient-to-r from-blue-800 to-indigo-900 text-white rounded-xl shadow-lg p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
