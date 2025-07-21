import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, Sparkles, Code, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  const greetings = [
    { text: "Hello", color: "from-magic-blue to-magic-teal" },
    { text: "Hiii", color: "from-magic-purple to-magic-pink" },
    { text: "Suprabhat", color: "from-magic-pink to-magic-blue" },
    { text: "Vanakkam", color: "from-magic-teal to-magic-purple" },
    { text: "Namaste", color: "from-magic-indigo to-magic-violet" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/Shrey29goswami', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <Linkedin size={24} />, href: 'https://linkedin.com/in/shrey-goswami-417856259', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter size={24} />, href: 'https://x.com/ShreyGoswami29', label: 'Twitter', color: 'hover:text-blue-300' },
  ];

  const stats = [
    { number: '380+', label: 'DSA Problems', icon: <Code className="w-5 h-5" /> },
    { number: '4+', label: 'Major Projects', icon: <Sparkles className="w-5 h-5" /> },
    { number: '7.97', label: 'CGPA', icon: <Heart className="w-5 h-5" /> },
    { number: '5⭐', label: 'HackerRank C++', icon: <Github className="w-5 h-5" /> },
  ];

  return (
    <section id="hero" className="hero-bg flex items-center justify-center relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-magic-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-magic-pink/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-magic-blue/15 rounded-full blur-2xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main profile image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-magic-purple via-magic-pink to-magic-blue p-2 shadow-magic">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-magic-purple/20 to-magic-pink/20">
                    <img
                      src="/assets/sh126.jpg"
                      alt="Shrey Goswami"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating elements around image */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-magic-blue to-magic-teal rounded-full flex items-center justify-center shadow-glow-md"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    rotate: -360,
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-r from-magic-pink to-magic-purple rounded-full flex items-center justify-center shadow-glow-md"
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>

                {/* Status indicator */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-8 right-8 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg"
                >
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                </motion.div>
              </motion.div>

              {/* Magic particles around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.cos(i * 60 * Math.PI / 180) * 100, 0],
                    y: [0, Math.sin(i * 60 * Math.PI / 180) * 100, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 15 + i * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 2
                  }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-magic-purple to-magic-pink rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            className="text-center lg:text-left hero-content"
          >
            {/* Dynamic Greeting */}
            <div className="mb-8 h-20 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGreeting}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-center lg:text-left"
                >
                  <div className={`text-4xl md:text-6xl font-bold bg-gradient-to-r ${greetings[currentGreeting].color} bg-clip-text text-transparent mb-2`}>
                    {greetings[currentGreeting].text}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                <span className="block text-gradient">Shrey Goswami</span>
              </h1>
              <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gradient-alt mb-4">
                Final Year CSE Grad. && An Aspiring Software Engineer
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed opacity-80"
            >
              Passionate about creating innovative solutions that bridge technology and user experience. 
              Building the future, one line of code at a time.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-3"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-3"
              >
                <Download size={20} />
                View My Work
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 glass-effect rounded-xl transition-all duration-300 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="text-magic-purple">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gradient">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm opacity-70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="scroll-indicator"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-3 opacity-60"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 glass-effect rounded-full"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;