import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Users, Presentation, Eye, Camera, Crown, Target, FileText, ExternalLink } from 'lucide-react';

const CoCurricular: React.FC = () => {
  const activities = [
    {
      category: "Leadership",
      icon: <Crown className="w-8 h-8" />,
      color: "from-neon-blue to-neon-purple",
      achievements: [
        {
          title: "President of Speaking Club",
          description: "Led public speaking and leadership development events, mentoring students in communication skills",
          icon: <Presentation className="w-6 h-6" />,
          impact: "50+ Students Mentored",
          hasLOR: true
        }
      ]
    },
    {
      category: "Academic Competitions",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-neon-green to-neon-blue",
      achievements: [
        {
          title: "1st Prize - Poster Presentation (National Science Day)",
          description: "Won first place in scientific poster presentation showcasing innovative research",
          icon: <Medal className="w-6 h-6" />,
          impact: "National Level"
        },
        {
          title: "1st Prize - Poster Presentation (National Mathematics Day)",
          description: "Secured first position in mathematics poster presentation competition",
          icon: <Medal className="w-6 h-6" />,
          impact: "National Level"
        },
        {
          title: "2nd Prize - MathsRun Quiz Competition",
          description: "Achieved second place in competitive mathematics quiz challenge",
          icon: <Award className="w-6 h-6" />,
          impact: "University Level"
        },
        {
          title: "2nd Prize - Lens Making Competition",
          description: "Won second place in technical lens making and design competition",
          icon: <Award className="w-6 h-6" />,
          impact: "Technical Excellence"
        }
      ]
    },
    {
      category: "Creative & Technical",
      icon: <Camera className="w-8 h-8" />,
      color: "from-neon-purple to-neon-pink",
      achievements: [
        {
          title: "Snapchat Lens Creator",
          description: "Created viral Snapchat lens with massive reach and engagement",
          icon: <Eye className="w-6 h-6" />,
          impact: "500K+ Views, 6K+ Users"
        }
      ]
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="cocurricular" className="section-padding section-bg-3">
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
            Co-Curricular <span className="text-gradient">Excellence</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Beyond academics - leadership, competitions, and creative achievements
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {activities.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} rounded-2xl p-8 mb-8`}>
                <div className="flex items-center gap-6 text-white">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold">{category.category}</h3>
                    <p className="text-white/80">Excellence in {category.category.toLowerCase()}</p>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-card p-8 group"
                  >
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl text-white flex-shrink-0 group-hover:shadow-2xl`}
                      >
                        {achievement.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-3">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-gradient" />
                          <span className="text-sm font-semibold text-gradient">
                            {achievement.impact}
                          </span>
                        </div>
                        {achievement.hasLOR && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open('/assets/Shrey.final.docx', '_blank')}
                            className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-magic-blue to-magic-purple text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                          >
                            <FileText className="w-4 h-4" />
                            View Letter of Recommendation
                            <ExternalLink className="w-3 h-3" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Impact & Recognition</h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Demonstrating leadership, creativity, and excellence across diverse fields
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">4</div>
                <div className="text-gray-300">Competition Wins</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">500K+</div>
                <div className="text-gray-300">Lens Views</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">1</div>
                <div className="text-gray-300">Leadership Role</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold text-gradient mb-2">6K+</div>
                <div className="text-gray-300">Active Users</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Skills Developed Through Co-Curricular Activities
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Leadership", "Public Speaking", "Team Management", "Creative Thinking",
              "Problem Solving", "Communication", "Event Planning", "Technical Innovation"
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white/10 text-white rounded-full font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoCurricular;