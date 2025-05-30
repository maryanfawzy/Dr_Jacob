import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-light min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-primary font-heading text-2xl font-bold">Dr. Jacob<span className="text-accent">Habashi</span></a>
          
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-dark hover:text-primary transition-colors">Home</a>
            <a href="#photos" className="text-dark hover:text-primary transition-colors">Photos</a>
            <a href="#research" className="text-dark hover:text-primary transition-colors">Research</a>
            <a href="#about" className="text-dark hover:text-primary transition-colors">About Me</a>
            <a href="#contact" className="text-dark hover:text-primary transition-colors">Contact Me</a>
          </div>
          
          <button className="md:hidden text-dark" aria-label="Toggle Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
            style={{ width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          ></div>
        </div>
      </nav>
      
      {/* Mobile menu - hidden by default */}
      <div className="fixed inset-0 bg-dark/95 z-50 flex flex-col items-center justify-center hidden">
        <button className="absolute top-4 right-4 text-white" aria-label="Close Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col space-y-6 text-center">
          <a href="#home" className="text-white text-2xl hover:text-primary transition-colors">Home</a>
          <a href="#photos" className="text-white text-2xl hover:text-primary transition-colors">Photos</a>
          <a href="#research" className="text-white text-2xl hover:text-primary transition-colors">Research</a>
          <a href="#about" className="text-white text-2xl hover:text-primary transition-colors">About Me</a>
          <a href="#contact" className="text-white text-2xl hover:text-primary transition-colors">Contact Me</a>
        </div>
      </div>
      
      {/* Main content */}
      <main className="pt-16">
        {/* Hero section */}
        <section id="home" className="section bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Dr. Jacob Habashi
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-gray-700 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Dr. Jacob Habashi is an experienced Assistant Professor of Accounting with a Ph.D. in Advanced Accounting, a passion for research and innovation, and over 11 years of corporate and 8 years of academic experience.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <a 
                    href="https://www.linkedin.com/in/jacob-habashi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn Profile
                  </a>
                </motion.div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full overflow-hidden shadow-xl"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    duration: 0.8
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">JH</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Activities section */}
        <section id="activities" className="section bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Key Activities
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Internship Opportunities",
                  description: "Created internship opportunities with 5 companies annually",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Metaverse Teaching",
                  description: "Developed immersive metaverse teaching tools",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  title: "Hybrid Curriculum",
                  description: "Led hybrid curriculum transformation",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                }
              ].map((activity, index) => (
                <motion.div 
                  key={index}
                  className="card animated-card bg-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Research section */}
        <section id="research" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Research & Publications
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Using Immersive Media 'Metaverse'...",
                  description: "Exploring the application of metaverse technologies in accounting education",
                  link: "#"
                },
                {
                  title: "Using the Government Blockchain in Cryptocurrency",
                  description: "Analysis of blockchain applications in government financial systems",
                  link: "#"
                },
                {
                  title: "Using AI to Personalize Learning in Accounting Education",
                  description: "Springer Nature (2025)",
                  link: "#"
                }
              ].map((research, index) => (
                <motion.div 
                  key={index}
                  className="card animated-card h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <h3 className="text-xl font-bold mb-3">{research.title}</h3>
                  <p className="text-gray-600 mb-4">{research.description}</p>
                  <a href={research.link} className="text-primary hover:text-primary/80 inline-flex items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Agenda section */}
        <section id="agenda" className="section bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Upcoming Agenda
            </motion.h2>
            
            <div className="relative overflow-x-auto hide-scrollbar pb-4">
              <div className="flex space-x-6 min-w-max">
                {[
                  {
                    title: "ASBA Conference",
                    date: "March 2025",
                    description: "Presenting research on accounting education innovations"
                  },
                  {
                    title: "Teaching and Learning with AI Conference",
                    date: "May 2025",
                    description: "Keynote speaker on AI applications in accounting education"
                  }
                ].map((event, index) => (
                  <motion.div 
                    key={index}
                    className="card w-80 flex-shrink-0"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full inline-block mb-3">
                      {event.date}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Photos section */}
        <section id="photos" className="section bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Photos
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Highlights from recent conferences and academic events.
            </motion.p>
            
            <div className="mb-12">
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6">Conference Appearances</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "AAA Annual Meetings (2023–2024)",
                      count: "3 photos"
                    },
                    {
                      title: "PwC Faculty Forums",
                      count: "2 photos"
                    },
                    {
                      title: "ASBA, KPMG, and AI Conferences",
                      count: "4 photos"
                    }
                  ].map((gallery, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h4 className="font-bold mb-2">{gallery.title}</h4>
                      <p className="text-gray-600">{gallery.count}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Experience section */}
        <section id="experience" className="section bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Experience
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Over 11 years of corporate and 8 years of academic experience.
            </motion.p>
            
            <div className="max-w-3xl mx-auto">
              <div className="timeline-container">
                {[
                  {
                    period: "2021–Present",
                    title: "Assistant Professor of Accounting",
                    company: "Dillard University",
                    description: "Teaching accounting courses and conducting research on innovative educational methods using AI, AR, and VR technologies."
                  },
                  {
                    period: "Previous",
                    title: "Accounting Faculty",
                    company: "AIU",
                    description: "Developed and taught accounting curriculum with focus on practical applications."
                  },
                  {
                    period: "Previous",
                    title: "Financial Analyst",
                    company: "GMC",
                    description: "Analyzed financial data and prepared reports for executive decision-making."
                  },
                  {
                    period: "Previous",
                    title: "Financial Controller",
                    company: "JW Marriott",
                    description: "Managed financial operations and reporting for the hospitality organization."
                  },
                  {
                    period: "Previous",
                    title: "Accounting Manager",
                    company: "El-Manahery Foods",
                    description: "Oversaw accounting department and financial reporting processes."
                  }
                ].map((job, index) => (
                  <motion.div 
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="timeline-dot"></div>
                    <div className="mb-1 font-bold text-primary">{job.period}</div>
                    <div className="timeline-content">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="text-gray-600 font-medium mb-2">{job.company}</div>
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Vision section */}
        <section id="vision" className="section bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Habits & Future Vision
            </motion.h2>
            
            <div className="max-w-3xl mx-auto text-center">
              <motion.p 
                className="text-lg text-gray-700 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                "Dr. Habashi is passionate about technology in education, mentoring future business leaders, and researching AI, AR, and VR's impact on accounting and finance education."
              </motion.p>
              
              <motion.div
                className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
                animate={{ 
                  boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 30px rgba(59, 130, 246, 0.5)", "0px 0px 0px rgba(59, 130, 246, 0)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact section */}
        <section id="contact" className="section bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Me
            </motion.h2>
            
            <motion.p 
              className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Have questions or want to collaborate? Feel free to reach out.
            </motion.p>
            
            <div className="max-w-2xl mx-auto">
              <motion.form 
                className="bg-white rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Message subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full md:w-auto"
                >
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-white font-heading text-2xl font-bold">Dr. Jacob<span className="text-accent">Habashi</span></a>
              <p className="mt-2 text-gray-400 max-w-md">
                Assistant Professor of Accounting with a passion for research and innovation in education.
              </p>
            </div>
            
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Jacob.habashi77@gmail.com
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Dillard University
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Dr. Jacob Habashi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
