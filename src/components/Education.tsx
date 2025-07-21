import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech - Computer Science",
      institution: "Gitam University, Bengaluru",
      duration: "2022 - 2026",
      grade: "CGPA: 7.97",
      description: "Comprehensive computer science curriculum covering software engineering, algorithms, system design, and emerging technologies.",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Management", "System Design"],
      color: "from-neon-blue to-neon-purple",
      status: "Current"
    },
    {
      degree: "XII - Senior Secondary",
      institution: "D.A.V Public School, Jharkhand",
      duration: "2020 - 2022",
      grade: "82%",
      description: "Strong foundation in mathematics, physics, and computer science with focus on analytical thinking and problem-solving.",
      highlights: ["Mathematics", "Physics", "Computer Science", "English"],
      color: "from-neon-green to-neon-blue",
      status: "Completed"
    },
    {
      degree: "X - Secondary",
      institution: "D.A.V Public School, Jharkhand",
      duration: "2018 - 2020",
      grade: "Distinction",
      description: "Solid academic foundation with excellent performance across all subjects and active participation in co-curricular activities.",
      highlights: ["All Subjects", "Co-curricular Activities", "Leadership Skills", "Academic Excellence"],
      color: "from-neon-purple to-neon-pink",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="education" className="section-padding section-bg-1">
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
            Educational <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Building a strong foundation through quality education and continuous learning
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="timeline-dot"
                />

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-8 ml-8"
                >
                  <div className="lg:flex gap-8">
                    {/* Left Side - Header */}
                    <div className="lg:w-1/3 mb-6 lg:mb-0">
                      <div className={`bg-gradient-to-br ${edu.color} p-6 rounded-2xl text-white`}>
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 bg-white/20 rounded-xl backdrop-blur-sm"
                          >
                            <GraduationCap className="w-8 h-8" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold">{edu.degree}</h3>
                            <span className="text-xs px-2 py-1 bg-white/20 rounded-full">
                              {edu.status}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span className="text-white/90">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span className="text-white/90">{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5" />
                            <span className="text-white/90 font-semibold">{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="lg:w-2/3">
                      <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-6 h-6 text-gradient" />
                        <h4 className="text-xl font-bold text-white">About This Program</h4>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {edu.description}
                      </p>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4">
                          Key Highlights
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlightIndex}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"></div>
                              <span className="text-gray-300 font-medium">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Academic Excellence Banner */}
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
              Academic Excellence & Growth
            </motion.h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Consistent academic performance with a focus on practical application of theoretical knowledge
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">7.97</div>
                <div className="text-gray-300">Current CGPA</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">82%</div>
                <div className="text-gray-300">XII Grade</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">4+</div>
                <div className="text-gray-300">Years of Study</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">2026</div>
                <div className="text-gray-300">Graduation Year</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;