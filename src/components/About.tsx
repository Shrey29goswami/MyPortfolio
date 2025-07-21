import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, and database management",
      color: "from-neon-blue to-neon-purple"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Experienced in implementing AI solutions and neural networks for real-world applications",
      color: "from-neon-purple to-neon-pink"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "System Design",
      description: "Strong foundation in low-level design patterns and scalable system architecture",
      color: "from-neon-pink to-neon-green"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "President of Speaking Club, leading public speaking and leadership initiatives",
      color: "from-neon-green to-neon-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding section-bg-1">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white mb-8"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            I'm a passionate Computer Science student at Gitam University with a strong foundation in 
            full-stack development and artificial intelligence.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Currently pursuing B.Tech in Computer Science with a CGPA of 7.97, I specialize in 
                  creating innovative solutions that combine cutting-edge technology with exceptional user experience.
                </p>
                
                <p className="text-lg">
                  My journey spans from developing emotion-driven AI chatbots to building scalable web applications. 
                  I'm particularly passionate about system design, having implemented ride-sharing services using 
                  advanced design patterns and algorithms.
                </p>

                <p className="text-lg">
                  Beyond coding, I actively contribute to the tech community through leadership roles and 
                  competitive programming, having solved 380+ problems on LeetCode and achieved 5⭐ in C++ on HackerRank.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8">
              <div className="relative mb-8">
                <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden">
                  <img
                    src="/assets/sh128.png"
                    alt="Shrey Goswami coding"
                    className="w-full h-80 object-contain scale - 100"
                  />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Code className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-gradient mb-1">2022</div>
                  <div className="text-gray-300 text-sm">Started Journey</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-2xl font-bold text-gradient mb-1">4+</div>
                  <div className="text-gray-300 text-sm">Major Projects</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 text-center group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 bg-gradient-to-r ${highlight.color} rounded-2xl mb-6 group-hover:shadow-2xl`}
              >
                <div className="text-white">
                  {highlight.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="glass-card p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-gradient" />
              <h3 className="text-3xl font-bold text-white">Ready to Collaborate</h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Always exploring new technologies and methodologies to stay at the forefront of software development
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-3"
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;