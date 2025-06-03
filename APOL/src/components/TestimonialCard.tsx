import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  image: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, image, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
    </motion.div>
  );
};

export default TestimonialCard;