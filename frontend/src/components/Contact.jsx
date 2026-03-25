import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import SectionBackdrop from './SectionBackdrop';

const contacts = [
  {
    icon: FaLinkedin,
    title: 'LinkedIn',
    content: 'linkedin.com/in/shivani-sharma',
    link: 'https://www.linkedin.com/in/sharmashivani9155/',
    color: 'text-blue-500',
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: 'sharma.shivani@gmail.com',
    // link: 'mailto:shivani@example.com',
    color: 'text-primary',
  },
  {
    icon: FaGithub,
    title: 'GitHub',
    content: 'github.com/shivani-sharma',
    link: 'https://github.com/shivi9155',
    color: 'text-gray-900 dark:text-gray-100',
  },
  {
    icon: FaPhoneAlt,
    title: 'Phone',
    content: '9155087332',
    link: 'tel:+919155087332',
    color: 'text-green-500',
  },
];

const Contact = () => (
  <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
    
    {/* Background Pattern */}
    <SectionBackdrop accent="mixed" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
        >
          <MdOutlineMail className="text-primary" />
          <span className="text-sm font-medium text-primary">Let's Connect</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">Get In </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-6"
        />
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Feel free to reach out — I'm always open to new opportunities, collaborations, and conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {contacts.map((item, i) => (
          <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-8 rounded-[1.75rem] bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className={`w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon size={26} className={item.color} />
            </div>
            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
              {item.title}
            </h4>
            <p className={`text-sm font-semibold break-all ${item.color}`}>
              {item.content}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
