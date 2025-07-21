import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText, Mic, BarChart3, Users, Car, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "PersonaChat",
      subtitle: "Emotion-Driven AI Chatbot App",
      description: "Personalized chatbot mimicking any individual's style and behavior with voice commands, WhatsApp-style UI, and Gemini API integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Web Speech API", "OpenAI API"],
      icon: <Mic className="w-8 h-8" />,
      github: "https://github.com/Shrey29goswami",
      live: "#",
      documentation: "#",
      gradient: "from-neon-blue to-neon-purple",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Sortify",
      subtitle: "Sorting Visualizer App",
      description: "Interactive visualization of 25+ sorting algorithms with animations, MongoDB session storage, and jQuery DOM effects.",
      technologies: ["React.js", "JavaScript", "MongoDB", "jQuery", "HTML", "CSS"],
      icon: <BarChart3 className="w-8 h-8" />,
      github: "https://github.com/Shrey29goswami",
      live: "#",
      documentation: "#",
      gradient: "from-neon-green to-neon-blue",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "LinkedIn Clone",
      subtitle: "Full-Stack Social Platform",
      description: "Complete LinkedIn clone with authentication, dynamic post feed, cloud media uploads, and responsive UI.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "ShadCN UI", "Clerk", "Cloudinary"],
      icon: <Users className="w-8 h-8" />,
      github: "https://github.com/Shrey29goswami",
      live: "#",
      documentation: "#",
      gradient: "from-neon-purple to-neon-pink",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Rola",
      subtitle: "Ride Sharing Service (Ongoing)",
      description: "CLI-based ride-booking system using SOLID principles, design patterns, Dijkstra's algorithm for routing, and comprehensive features.",
      technologies: ["C++", "OOPs", "LLD", "Design Patterns", "Algorithms"],
      icon: <Car className="w-8 h-8" />,
      github: "https://github.com/Shrey29goswami",
      live: "#",
      documentation: "#",
      gradient: "from-neon-pink to-neon-green",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600"
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
    <section id="projects" className="section-padding section-bg-2">
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            A showcase of my technical expertise and creative problem-solving abilities
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="project-card"
            >
              {/* Project Image */}
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm"
                  >
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-gradient font-semibold">
                  {project.subtitle}
                </p>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <Github size={18} />
                  Code
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.documentation}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  <FileText size={18} />
                  Docs
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Shrey29goswami"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5"
          >
            <Github size={24} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;