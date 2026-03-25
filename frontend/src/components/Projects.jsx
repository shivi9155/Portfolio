import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { MdOutlineCode } from 'react-icons/md';
import SectionBackdrop from './SectionBackdrop';
import ecourtflowImage from '../assets/E-courtflow.jpeg';
import realEstateImage from '../assets/image.jpeg';
import doodledeskImage from '../assets/Doodledesk.jpeg';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ProjectCard = ({ project }) => {
  const renderList = (text) => {
    return (
      <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed list-disc list-inside space-y-1 marker:text-primary">
        {text.split('\n').map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl rounded-[1.75rem] overflow-hidden shadow-xl border border-white/50 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative overflow-hidden h-48 sm:h-64">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image || 'https://via.placeholder.com/600x400'}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-6 flex-grow">
          {/* Challenge */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
              🚧 Challenge
            </h4>
            {renderList(project.challenge)}
          </div>

          {/* Action */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
              ⚙️ Action
            </h4>
            {renderList(project.action)}
          </div>

          {/* Result */}
          <div>
            <h4 className="text-xs font-bold text-green-500 uppercase tracking-widest mb-1">
              📈 Result
            </h4>
            {renderList(project.result)}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
    _id: '1',
    title: 'E-CourtFlow',
    image: ecourtflowImage,

    challenge: `Managing court cases manually led to delays, lack of transparency, and inefficient tracking of case progress across multiple stages.
                Difficulty in handling large volumes of case data and ensuring proper role-based access for judges, lawyers, and admins.
                Frequent errors in case scheduling, updates, and document management due to lack of a centralized system.`,

    action: `Designed and built a case lifecycle management system using the MERN stack (MongoDB, Express.js, React.js, Node.js).
              Implemented role-based authentication using JWT tokens, ensuring secure access for different users.
Developed structured workflows and dynamic routing for case stages, along with optimized backend controllers and APIs.
Integrated real-time updates and efficient database schema design to handle case data smoothly.`,

    result: `Reduced manual intervention by ~40–45%, improving overall efficiency in case handling.
Achieved faster case tracking and updates, leading to better transparency and user experience.
Enhanced system performance with optimized queries and scalable architecture.
Provided a centralized platform for managing cases, improving accuracy and reducing errors.`,

    liveLink: '#',
    githubLink: 'https://github.com/shivi9155/e-CourtFlow',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST API'],
  },
   {
  _id: '2',
  title: 'Real Estate Hub',
  image: realEstateImage,

  challenge: `Difficulty in managing and displaying large volumes of property listings efficiently.
Lack of a centralized platform for users to search, filter, and compare properties easily.
Ensuring secure user authentication and role-based access for buyers, sellers, and admins.
Handling real-time updates for property availability and user interactions.`,

  action: `Built a full-stack Real Estate platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Implemented JWT-based authentication and role-based access control for secure user management.
Designed dynamic property listing features with advanced search and filtering options.
Developed RESTful APIs, optimized backend controllers, and structured database schemas for efficient data handling.
Integrated responsive UI and smooth navigation for an enhanced user experience.`,

  result: `Improved property search efficiency and user engagement with advanced filtering and real-time updates.
Reduced manual effort by providing a centralized platform for property management.
Enhanced system performance and scalability through optimized queries and backend architecture.
Delivered a seamless and user-friendly experience, increasing usability for buyers and sellers.`,

  liveLink: '#',
  githubLink: 'https://github.com/shivi9155/RealEsatateHub',
  tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'REST API'],
},
{
  _id: '3',
  title: 'Daycare Management System',
  image: doodledeskImage,

  challenge: `Managing daycare operations manually led to inefficiencies in tracking children, staff, and daily activities.
Difficulty in maintaining attendance records, schedules, and communication between staff and parents.
Lack of a centralized system to handle child information, billing, and activity updates.
Ensuring secure handling of sensitive child and parent data.`,

  action: `Developed a web-based Daycare Management System using HTML, Tailwind CSS, JavaScript, jQuery, and PHP.
Implemented dynamic UI interactions and DOM manipulation using jQuery for real-time updates.
Built backend functionality using PHP for handling data processing, form submissions, and server-side logic.
Designed modules for attendance tracking, child record management, and scheduling.
Integrated structured database operations for efficient data storage and retrieval.`,

  result: `Streamlined daycare operations by digitizing attendance, scheduling, and record management.
Reduced manual errors and improved accuracy in maintaining child and staff data.
Enhanced communication flow through organized and accessible information.
Provided a simple, user-friendly interface for efficient daycare management.`,

  liveLink: '#',
  githubLink: 'https://github.com/shivi9155/INT-219-220',
  tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'jQuery', 'PHP'],
}
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors">
      
      {/* Background blobs (same as Hero) */}
      <SectionBackdrop accent="mixed" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
          >
            <MdOutlineCode className="text-primary" />
            <span className="text-sm font-medium text-primary">My Creative Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
              Featured{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Projects
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-4"
          />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent works built using modern web technologies.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </motion.div>

        {/* Scroll indicator (mirrors Hero) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center gap-2 mt-20"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">View more below</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
