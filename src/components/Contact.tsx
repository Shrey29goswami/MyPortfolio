import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter, Send, MapPin, MessageCircle, Sparkles, Users } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "reachshreygoswami@gmail.com",
      href: "mailto:reachshreygoswami@gmail.com",
      color: "from-neon-blue to-neon-purple"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8340254329",
      href: "tel:+918340254329",
      color: "from-neon-green to-neon-blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
      color: "from-neon-purple to-neon-pink"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/shrey-goswami-417856259",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Shrey29goswami",
      color: "hover:bg-gray-800"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "X",
      href: "https://x.com/ShreyGoswami29",
      color: "hover:bg-blue-500"
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
    <section id="contact" className="section-padding section-bg-1">
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
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Let's connect and discuss opportunities, collaborations, or just have a great conversation about technology
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-10">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-gradient" />
                <h3 className="text-3xl font-bold text-white">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/10 hover:border-white/20"
                  >
                    <div className={`p-4 bg-gradient-to-r ${info.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                      <div className="text-white font-semibold text-lg">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Users className="w-6 h-6 text-gradient" />
                  Follow Me
                </h4>
                <div className="flex gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 glass-effect rounded-2xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/30`}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-8 h-8 text-gradient" />
                <h3 className="text-3xl font-bold text-white">
                  Send a Message
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-neon-blue focus:border-transparent bg-white/5 text-white transition-all duration-300 hover:border-white/30"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-neon-blue focus:border-transparent bg-white/5 text-white transition-all duration-300 hover:border-white/30"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-neon-blue focus:border-transparent bg-white/5 text-white transition-all duration-300 hover:border-white/30"
                    placeholder="Let's discuss..."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-6 py-4 border border-white/20 rounded-2xl focus:ring-2 focus:ring-neon-blue focus:border-transparent bg-white/5 text-white transition-all duration-300 resize-none hover:border-white/30"
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-5"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center border-t border-white/10 pt-12"
        >
          <p className="text-gray-400 text-lg">
            © 2025 Shrey Goswami. Built with React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-gray-500 mt-2">
            Designed with ❤️ for the developer community
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;