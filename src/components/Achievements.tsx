import React from 'react';
import { motion } from 'framer-motion';
import { Award, AlignCenterVertical as Certificate, Star, Trophy, Brain, Code } from 'lucide-react';

const Achievements: React.FC = () => {
  const certificates = [
    {
      title: "Full Stack Web Development",
      issuer: "30DaysCoding",
      date: "January 2025",
      description: "Comprehensive certification covering modern web development technologies and best practices",
      icon: <Code className="w-6 h-6" />,
      color: "from-neon-blue to-neon-purple"
    },
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI (Coursera)",
      date: "February 2025",
      description: "Advanced certification in neural networks, deep learning algorithms, and AI implementation",
      icon: <Brain className="w-6 h-6" />,
      color: "from-neon-purple to-neon-pink"
    }
  ];

  const achievements = [
    {
      title: "LeetCode Problem Solver",
      description: "Solved 380+ Data Structures and Algorithms problems",
      metric: "380+",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-neon-green to-neon-blue"
    },
    {
      title: "HackerRank 5⭐ C++",
      description: "Achieved 5-star rating in C++ programming challenges",
      metric: "5⭐",
      icon: <Star className="w-8 h-8" />,
      color: "from-neon-yellow to-neon-pink"
    },
    {
      title: "Speaking Club President",
      description: "Led public speaking and leadership development initiatives",
      metric: "Leader",
      icon: <Award className="w-8 h-8" />,
      color: "from-neon-purple to-neon-green"
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
    <section id="achievements" className="section-padding section-bg-2">
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
            Achievements & <span className="text-gradient">Certificates</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Recognition of dedication, skill development, and continuous learning
          </motion.p>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3"
          >
            <Certificate className="w-8 h-8 text-gradient" />
            Professional Certificates
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${cert.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 bg-white/20 rounded-xl backdrop-blur-sm"
                    >
                      {cert.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-2xl font-bold">{cert.title}</h4>
                      <p className="text-white/90 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">{cert.date}</p>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center flex items-center justify-center gap-3"
          >
            <Trophy className="w-8 h-8 text-gradient" />
            Key Achievements
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card text-center group"
              >
                <div className={`bg-gradient-to-r ${achievement.color} p-8 text-white rounded-t-2xl`}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-4 bg-white/20 rounded-2xl mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="text-4xl font-black mb-2">{achievement.metric}</div>
                  <h4 className="text-xl font-bold">{achievement.title}</h4>
                </div>
                <div className="p-8">
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Validation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-12 text-center">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Validated Skills & Recognition
            </motion.h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Continuous skill validation through competitive programming and professional certifications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">380+</div>
                <div className="text-gray-300">Problems Solved</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">5⭐</div>
                <div className="text-gray-300">HackerRank C++</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                <div className="text-gray-300">Certifications</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">1</div>
                <div className="text-gray-300">Leadership Role</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;