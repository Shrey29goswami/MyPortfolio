import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Cpu, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "HTML", level: 75 },
        { name: "CSS", level: 70 },
        { name: "JavaScript", level: 72 },
        { name: "React", level: 60 },
        { name: "Next.js", level: 61 },
        { name: "TypeScript", level: 56 },
        { name: "Tailwind CSS", level: 55 }
      ],
      color: "from-neon-blue to-neon-purple"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Spring Boot", level: 75 },
        { name: "RESTful APIs", level: 60 },      
      ],
      color: "from-neon-green to-neon-blue"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "C", level: 60 },
        { name: "C++", level: 90 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 60 },
        { name: "TypeScript", level: 60 },
      ],
      color: "from-neon-purple to-neon-pink"
    },
    {
      title: "Databases",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MongoDB", level: 60 },
        { name: "MySQL", level: 85 },
        { name: "SQL", level: 90 },
      ],
      color: "from-neon-pink to-neon-green"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-8 h-8" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "IntelliJ IDEA", level: 68 },
        { name: "Eclipse", level: 65 },
        { name: "VS Code", level: 75 },
      ],
      color: "from-neon-green to-neon-blue"
    },
    {
      title: "Core Concepts",
      icon: <Cpu className="w-8 h-8" />,
      skills: [
        { name: "DBMS", level: 88 },
        { name: "Operating Systems", level: 82 },
        { name: "OOPs", level: 92 },
        { name: "System Design (LLD)", level: 85 },
        { name: "AI/ML", level: 68 },
        { name: "DSA", level: 95 }
      ],
      color: "from-neon-blue to-neon-purple"
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
    <section id="skills" className="section-padding section-bg-3">
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 bg-gradient-to-r ${category.color} rounded-2xl group-hover:shadow-2xl`}
                >
                  <div className="text-white">
                    {category.icon}
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Highlight */}
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
              Continuous Learning & Growth
            </motion.h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Always exploring new technologies and methodologies to stay at the forefront of software development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Problem Solving", "Team Collaboration", "Agile Development", 
                "Code Review", "Technical Leadership", "Innovation"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
