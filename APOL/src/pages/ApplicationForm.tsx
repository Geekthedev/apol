import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

interface FormData {
  fullName: string;
  email: string;
  designerType: string;
  experience: string;
  portfolio: string;
  reasonToJoin: string;
  referral: string;
  acceptRules: boolean;
}

const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    designerType: '',
    experience: '',
    portfolio: '',
    reasonToJoin: '',
    referral: '',
    acceptRules: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Application Form | APOL Designers';
    window.scrollTo(0, 0);
  }, [currentStep]);
  
  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      if (!formData.designerType) newErrors.designerType = 'Please select your designer type';
    }
    
    if (step === 2) {
      if (!formData.experience) newErrors.experience = 'Please select your experience level';
      if (!formData.reasonToJoin || formData.reasonToJoin.length < 50) {
        newErrors.reasonToJoin = 'Please share why you want to join (minimum 50 characters)';
      }
    }
    
    if (step === 3) {
      if (!formData.acceptRules) newErrors.acceptRules = 'You must agree to the community rules';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleNext = () => {
    if (validateStep(currentStep)) {
      window.scrollTo(0, 0);
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        
        // Check if we should add to waitlist (random for demo)
        const isWaitlisted = Math.random() > 0.7;
        
        if (isWaitlisted) {
          navigate('/waitlist');
        } else {
          navigate('/confirmation');
        }
      }, 1500);
    }
  };
  
  const stepLabels = ['Basic Info', 'Professional Details', 'Agreement'];
  
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
            <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Join APOL Designers Community</h1>
            
            <ProgressBar 
              currentStep={currentStep} 
              totalSteps={3} 
              labels={stepLabels}
            />
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="designerType" className="block text-sm font-medium text-gray-700 mb-1">
                      What type of designer are you?*
                    </label>
                    <select
                      id="designerType"
                      name="designerType"
                      value={formData.designerType}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.designerType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your design specialty</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Graphic Designer">Graphic Designer</option>
                      <option value="Web Designer">Web Designer</option>
                      <option value="Motion Designer">Motion Designer</option>
                      <option value="Product Designer">Product Designer</option>
                      <option value="Brand Designer">Brand Designer</option>
                      <option value="3D Designer">3D Designer</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.designerType && (
                      <p className="mt-1 text-sm text-red-600">{errors.designerType}</p>
                    )}
                  </div>
                </motion.div>
              )}
              
              {/* Step 2: Professional Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Professional Details</h2>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience*
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.experience ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your experience level</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-600">{errors.experience}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio URL (optional)
                    </label>
                    <input
                      type="text"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="https://yourportfolio.com"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Share your portfolio, Dribbble, Behance, or LinkedIn profile
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="reasonToJoin" className="block text-sm font-medium text-gray-700 mb-1">
                      Why do you want to join our community?*
                    </label>
                    <textarea
                      id="reasonToJoin"
                      name="reasonToJoin"
                      value={formData.reasonToJoin}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.reasonToJoin ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us why you're interested in joining and what you hope to gain or contribute (minimum 50 characters)"
                    />
                    {errors.reasonToJoin && (
                      <p className="mt-1 text-sm text-red-600">{errors.reasonToJoin}</p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">
                      {formData.reasonToJoin.length}/50 characters minimum
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="referral" className="block text-sm font-medium text-gray-700 mb-1">
                      How did you hear about us? (optional)
                    </label>
                    <input
                      type="text"
                      id="referral"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Social media, friend, event, etc."
                    />
                  </div>
                </motion.div>
              )}
              
              {/* Step 3: Agreement */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Agreement</h2>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">By joining APOL Designers, you agree to:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Treat all community members with respect and dignity</p>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Not share the group invite link with others without permission</p>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Avoid spam, self-promotion, or off-topic discussions</p>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Provide constructive feedback and support to fellow designers</p>
                      </li>
                      <li className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">Participate actively and contribute positively to discussions</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="acceptRules"
                        name="acceptRules"
                        type="checkbox"
                        checked={formData.acceptRules}
                        onChange={handleCheckbox}
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="acceptRules" className="text-sm font-medium text-gray-700">
                        I have read and agree to the community guidelines and code of conduct*
                      </label>
                      {errors.acceptRules && (
                        <p className="mt-1 text-sm text-red-600">{errors.acceptRules}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800">
                      <strong>Note:</strong> Applications are reviewed manually to ensure our community remains 
                      high-quality and spam-free. You'll receive an invite link via email once approved.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div> // Empty div for spacing
                )}
                
                {currentStep < 3 ? (
                  <Button 
                    type="button" 
                    variant="primary" 
                    onClick={handleNext}
                  >
                    Continue
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationForm;