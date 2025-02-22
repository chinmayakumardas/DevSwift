import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://facebook.com', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, url: 'https://twitter.com', color: 'hover:bg-blue-400' },
    { icon: FaLinkedinIn, url: 'https://linkedin.com', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, url: 'https://instagram.com', color: 'hover:bg-pink-600' },
    { icon: FaGithub, url: 'https://github.com', color: 'hover:bg-gray-600' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DevSwift
            </h3>
            <p className="text-gray-400">
              Transforming ideas into powerful digital solutions. Your trusted partner in software development.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/data-deletion" className="text-gray-400 hover:text-white hover:translate-x-2 transform transition-all duration-300 inline-block">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-purple-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <a href="mailto:chinmayakumardas2000@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  chinmayakumardas2000@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-gray-400" />
                <a href="tel:+916370073215" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 6370073215
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Patia, Bhubaneswar,<br />
                  Odisha, PIN: 751024
                </span>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transform transition-all duration-300 animate-gradient"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} DevSwift. All rights reserved.
            </p>
            <p className="text-gray-400 mt-2 md:mt-0 text-center md:text-right">
              Designed with ❤️ by DevSwift Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
