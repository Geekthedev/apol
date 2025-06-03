import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, BellRing } from 'lucide-react';
import Button from '../components/Button';

const Waitlist: React.FC = () => {
  useEffect(() => {
    document.title = 'Waitlist | APOL Designers';
    window.scrollTo(0, 0);
  }, []);

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
              <div className="h-20 w-20 bg-indigo-100 rounded-full flex items-center justify-center">
                <Clock className="h-12 w-12 text-indigo-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">You're on the Waitlist!</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Thank you for your interest in joining APOL Designers. Our community is currently at capacity (WhatsApp groups are limited to 1,024 members).
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
                <Users className="mr-2 h-5 w-5" />
                <span className="font-medium">Position in queue: #27</span>
              </div>
            </div>
            
            <div className="space-y-6 mb-8 text-left">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <BellRing className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">We'll notify you</h3>
                  <p className="text-gray-700">
                    As soon as a spot opens up, we'll send you an email with your invitation link. Make sure to check your inbox regularly!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Community turnover</h3>
                  <p className="text-gray-700">
                    We regularly review member activity and remove inactive members to make room for new participants. The typical wait time is 2-3 weeks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8 text-left">
              <h3 className="font-medium text-yellow-800 mb-2">While You Wait</h3>
              <p className="text-sm text-yellow-800 mb-2">
                Here are some ways to prepare for joining our community:
              </p>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
                <li>Update your portfolio and prepare work to share</li>
                <li>Think about specific questions you'd like to ask the community</li>
                <li>Consider what unique knowledge or skills you can contribute</li>
                <li>Follow us on social media for updates and design content</li>
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

export default Waitlist;