import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Guidelines: React.FC = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [canProceed, setCanProceed] = useState(false);
  
  useEffect(() => {
    document.title = 'Community Guidelines | APOL Designers';
    
    // Track time spent on page
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    
    // Track scrolling to bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      if (scrollPosition >= docHeight - 100) {
        setHasReachedBottom(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Allow proceeding after 30 seconds OR after scrolling to bottom
  useEffect(() => {
    if (timeSpent >= 30 || hasReachedBottom) {
      setCanProceed(true);
    }
  }, [timeSpent, hasReachedBottom]);

  return (
    <div className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Community Guidelines</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Welcome to APOL Designers</h2>
                <p className="text-gray-700 mb-4">
                  Before joining our WhatsApp community, please take a moment to read through our guidelines. 
                  These rules ensure that we maintain a supportive, respectful, and valuable space for all members.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Community Rules</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Be Respectful:</strong> Treat all members with respect and dignity. Harassment, discrimination, or disrespectful behavior of any kind will not be tolerated.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>No Spam:</strong> Do not send unsolicited promotional content. Share your work only in designated channels and when relevant.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Give Constructive Feedback:</strong> When offering critique, be specific, helpful, and kind. Focus on the work, not the person.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Stay On Topic:</strong> Keep conversations relevant to design topics. Use appropriate channels for specific discussions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Protect Privacy:</strong> Do not share confidential information or personal details of other members without explicit permission.
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits of Membership</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Design Feedback:</strong> Receive constructive feedback on your work from experienced designers.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Resource Sharing:</strong> Access to exclusive design resources, tools, templates, and educational content.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Networking:</strong> Connect with other designers for collaboration, mentorship, and career opportunities.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Community Events:</strong> Participate in virtual workshops, design challenges, and discussions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Job Opportunities:</strong> Early access to job postings, freelance gigs, and project collaborations.
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Membership Expectations</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Be Active:</strong> Engage regularly with the community. Inactive members may be removed to make space for others.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Give Back:</strong> Share your knowledge and expertise. Help others as others help you.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Respect Boundaries:</strong> Do not direct message members without permission, especially for solicitation.
                    </p>
                  </li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Moderation Policy</h2>
                <p className="text-gray-700 mb-4">
                  Our moderation team reserves the right to remove content or members who violate our guidelines. 
                  Repeated violations will result in permanent removal from the community.
                </p>
                <p className="text-gray-700">
                  We strive to create a diverse, inclusive environment where all designers can grow and thrive. 
                  By joining our community, you agree to uphold these standards and contribute positively.
                </p>
              </section>
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {!canProceed && (
                  <p>Please read the full guidelines before proceeding ({Math.max(30 - timeSpent, 0)} seconds remaining)</p>
                )}
                {canProceed && (
                  <p>Thank you for reading our guidelines!</p>
                )}
              </div>
              
              <div className="flex space-x-4">
                <Link to="/">
                  <Button variant="outline">Back to Home</Button>
                </Link>
                <Link to="/apply">
                  <Button variant="primary" disabled={!canProceed}>
                    Continue to Application
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guidelines;