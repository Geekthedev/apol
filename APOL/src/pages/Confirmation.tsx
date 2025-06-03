import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Copy, ExternalLink } from 'lucide-react';
import Button from '../components/Button';

const Confirmation: React.FC = () => {
  useEffect(() => {
    document.title = 'Application Successful | APOL Designers';
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = () => {
    const whatsappLink = 'hhttps://chat.whatsapp.com/BfoBEXuZGwk8fYn9IQ7VNK';
    navigator.clipboard.writeText(whatsappLink);
    alert('WhatsApp link copied to clipboard!');
  };

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to APOL Designers!</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Your application has been approved. You can now join our WhatsApp community using the link below.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-800">WhatsApp Group Link</span>
                <button 
                  onClick={copyToClipboard}
                  className="text-indigo-600 hover:text-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full p-1"
                  aria-label="Copy WhatsApp link"
                >
                  <Copy size={18} />
                </button>
              </div>
              <a 
                href="https://chat.whatsapp.com/BfoBEXuZGwk8fYn9IQ7VNK" 
                target="_blank" 
                rel="noreferrer"
                className="mt-2 block text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
              >
                Join WhatsApp Group <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
            
            <div className="space-y-4 mb-8">
              <h2 className="text-xl font-semibold text-gray-900">Next Steps</h2>
              
              <ol className="text-left space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                  <p className="text-gray-700">Click the WhatsApp link above to join the group</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                  <p className="text-gray-700">Introduce yourself to the community</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                  <p className="text-gray-700">Check out the pinned messages for important resources</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 text-indigo-800 font-medium rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</span>
                  <p className="text-gray-700">Start engaging with other designers</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8 text-left">
              <h3 className="font-medium text-yellow-800 mb-2">Important Notes</h3>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
                <li>The WhatsApp link is valid for 48 hours</li>
                <li>Please do not share this link with others</li>
                <li>You'll receive a welcome email with additional information</li>
              </ul>
            </div>
            
            <Link to="/">
              <Button variant="primary">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Confirmation;