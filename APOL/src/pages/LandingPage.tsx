import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Users, FileText, Award, Zap, PenTool, Palette, Layout } from 'lucide-react';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'APOL Designers Community';
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white pt-20"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Join APOL Designers—Where Creativity Meets Excellence
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-indigo-200 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A curated WhatsApp community for serious designers looking to connect, collaborate and grow
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/guidelines">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="mr-4 bg-white text-indigo-600 hover:bg-gray-100"
                >
                  Learn More
                </Button>
              </Link>
              <Link to="/apply">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="mt-4 sm:mt-0"
                >
                  Apply to Join
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Join Our Community?</h2>
            <p className="text-xl text-gray-600">Connect with like-minded designers and take your career to the next level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={MessageSquare}
              title="Expert Feedback"
              description="Get constructive criticism and advice from experienced designers who understand your challenges."
              delay={0.1}
            />
            <FeatureCard 
              icon={FileText}
              title="Exclusive Resources"
              description="Access design templates, tools, and materials shared only within our community."
              delay={0.2}
            />
            <FeatureCard 
              icon={Users}
              title="Networking"
              description="Build meaningful relationships with peers, mentors, and potential collaborators."
              delay={0.3}
            />
            <FeatureCard 
              icon={Award}
              title="Growth Opportunities"
              description="Learn about job openings, freelance gigs, and partnership possibilities before they go public."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Join over 500+ designers who are already part of our thriving community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Johnson"
              role="UI/UX Designer at Dropbox"
              quote="Being part of this community has transformed my career. The feedback I've received has been invaluable, and I've made connections that led to amazing opportunities."
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={0.1}
            />
            <TestimonialCard 
              name="Michael Chen"
              role="Product Designer"
              quote="The resources shared here are gold. I've learned more in 3 months than I did in a year at my previous job. The community is supportive and genuinely wants everyone to succeed."
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={0.2}
            />
            <TestimonialCard 
              name="Priya Sharma"
              role="Freelance Graphic Designer"
              quote="As a freelancer, this group has been my virtual design team. The critique sessions helped me refine my style, and I've even collaborated with other members on projects."
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Designer Types Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is This Community For?</h2>
            <p className="text-xl text-indigo-200">We welcome designers of all disciplines who are serious about their craft</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PenTool className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Designers</h3>
              <p className="text-indigo-200">Creating seamless digital experiences and intuitive interfaces</p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Palette className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Graphic Designers</h3>
              <p className="text-indigo-200">Crafting visual assets from logos to marketing materials</p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Motion Designers</h3>
              <p className="text-indigo-200">Bringing designs to life through animation and movement</p>
            </motion.div>
            
            <motion.div 
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Layout className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Designers</h3>
              <p className="text-indigo-200">Designing beautiful, functional, and responsive websites</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Apply today and connect with a network of designers who are passionate about their craft and ready to support each other.
            </p>
            <Link to="/apply">
              <Button variant="primary" size="lg" className="inline-block">
                Apply to Join
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;