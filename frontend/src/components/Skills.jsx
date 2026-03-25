import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';
import { MdOutlineCode } from 'react-icons/md';
import SectionBackdrop from './SectionBackdrop';

/* ─── Skill Icon Pill ────────────────────────────────────────────────── */
const SkillIndicator = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-3 p-3 rounded-xl
      bg-white/55 dark:bg-gray-800/50 backdrop-blur-xl
      border border-white/50 dark:border-white/10
      shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
  >
    <Icon className={`text-2xl ${color} transition-transform duration-300 group-hover:scale-110`} />
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
  </motion.div>
);

/* ─── Soft Skill Pill ────────────────────────────────────────────────── */
const SoftSkill = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    transition={{ duration: 0.2 }}
    className="flex items-center justify-center p-4 rounded-xl
      bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl
      border border-white/50 dark:border-white/10
      shadow-sm hover:shadow-lg hover:shadow-primary/10
      hover:border-primary/40 dark:hover:border-primary/40
      transition-all duration-300 cursor-default text-center"
  >
    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">{name}</span>
  </motion.div>
);

/* ─── Skill Card Container ───────────────────────────────────────────── */
const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4 }}
    className="p-6 rounded-2xl
      bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl
      border border-white/50 dark:border-white/10
      shadow-xl hover:shadow-2xl hover:shadow-primary/10
      hover:border-primary/30 dark:hover:border-primary/30
      transition-all duration-300"
  >
    <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-green-400 inline-block" />
      {title}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {skills.map((skill) => (
        <SkillIndicator key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
);

/* ─── Main Component ─────────────────────────────────────────────────── */
const Skills = () => {
  const programmingLanguages = [
    { name: 'C', icon: FaHtml5,         color: 'text-orange-400' },
    { name: 'C++', icon: FaCss3Alt,         color: 'text-blue-400' },
    { name: 'Java',       icon: FaJava,        color: 'text-red-500'   },
    { name: 'Python',     icon: FaPython,      color: 'text-blue-400'  },
    { name: 'JavaScript', icon: FaJs,         color: 'text-yellow-400' },
    {name: 'JQuery', icon: SiTypescript, color: 'text-blue-500'  },
    {name: 'PHP', icon: FaDatabase, color: 'text-blue-300'  },  
  ];

  const frameworks = [
    {name:'Html', icon: FaHtml5, color: 'text-orange-400' },
    {name:'Css', icon: FaCss3Alt, color: 'text-blue-400' },
    { name: 'React',       icon: FaReact,       color: 'text-cyan-400'  },
    { name: 'Node.js',     icon: FaNodeJs,      color: 'text-green-500' },
    { name: 'Express',     icon: SiExpress,     color: 'text-gray-500 dark:text-gray-400' },
    { name: 'Tailwind CSS',icon: SiTailwindcss, color: 'text-teal-400'  },
  ];

  const toolsAndTech = [
    { name: 'MongoDB', icon: SiMongodb,  color: 'text-green-500'  },
    {name: 'Postman', icon: FaDatabase, color: 'text-blue-300'  },
    {name: "postgreSQL", icon: FaDatabase, color: 'text-blue-300'  },
    { name: 'SQL DBs', icon: FaDatabase, color: 'text-blue-300'   },
    { name: 'Git',     icon: FaGitAlt,  color: 'text-orange-500'  },
  
  ];

  const softSkills = [
    'Problem Solving', 'Team Collaboration', 'Effective Communication',
    'Time Management', 'Adaptability', 'Agile Methodology',
  ];

  return (
    <section
      id="skills"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        bg-gradient-to-br from-gray-50 via-white to-gray-100
        dark:from-gray-900 dark:via-gray-900 dark:to-gray-800
        transition-colors"
    >
      {/* ── Background blobs (same as Hero) ── */}
      <SectionBackdrop accent="blue" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2
              bg-primary/10 dark:bg-primary/20 rounded-full
              border border-primary/30 mb-6"
          >
            <MdOutlineCode className="text-primary" />
            <span className="text-sm font-medium text-primary">What I work with</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
              Technical{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Skills
            </span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full"
          />
        </div>

        {/* ── Skill Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <SkillCard title="Languages"            skills={programmingLanguages} delay={0}   />
          <SkillCard title="Frameworks & Libraries" skills={frameworks}          delay={0.15} />
          <SkillCard title="Tools & Technologies"  skills={toolsAndTech}        delay={0.3} />
        </div>

        {/* ── Soft Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Soft Skills
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <SoftSkill name={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
