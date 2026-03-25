import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { MdSchool, MdStars } from 'react-icons/md';
import SectionBackdrop from './SectionBackdrop';

const TimelineItem = ({ title, institution, duration, location, details, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-6 relative group"
  >
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl border border-white/50 dark:border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 shadow-lg group-hover:shadow-primary/20">
        <Icon size={20} />
      </div>
      <div className="w-0.5 h-full bg-gradient-to-b from-gray-200 to-transparent dark:from-gray-700 dark:to-transparent absolute top-12 bottom-0 group-last:hidden"></div>
    </div>
    <div className="pb-10 flex-1">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
      <h4 className="text-md font-semibold text-primary/80 mb-1">{institution}</h4>
      {location && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{location}</p>}
      <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary mb-3 inline-block border border-primary/20">
        {duration}
      </span>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">{details}</p>
    </div>
  </motion.div>
);

const AchievementCard = ({ ach, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    whileHover={{ y: -5 }}
    className="relative p-6 rounded-[1.75rem] bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
  >
    <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <FaTrophy size={26} className="text-primary" />
    </div>
    <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 mb-4 border border-green-200/50 self-start">
      {ach.rank}
    </span>
    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{ach.title}</h3>
    <p className="text-sm font-semibold text-primary mb-1">{ach.event}</p>
    <p className="text-xs text-gray-500 font-mono mb-4">{ach.date}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">{ach.details}</p>
  </motion.div>
);

const Education = () => {
  return (
    <div className="transition-colors overflow-hidden">
      <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <SectionBackdrop accent="blue" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
            >
              <MdSchool className="text-primary" />
              <span className="text-sm font-medium text-primary">Academic Foundation</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Education</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              title="BTech in Computer Science & Engineering"
              institution="Lovely Professional University"
              location="Hagwara, Punjab"
              duration="Aug 2023 - Present"
              details="Bachelor of Technology in Computer Science and Engineering with a CGPA of 7.76."
              icon={FaGraduationCap}
              delay={0}
            />
            <TimelineItem
              title="Intermediate"
              institution="NS DAV Public School"
              location="Sitamarhi, Bihar"
              duration="Mar 2022 - Mar 2023"
              details="PCM stream with 78%."
              icon={FaGraduationCap}
              delay={0.1}
            />
            <TimelineItem
              title="Matriculation"
              institution="DAV Public School"
              location="RunniSaidpur, Bihar"
              duration="Mar 2021 - Mar 2022"
              details="Completed matriculation with 88.8%."
              icon={FaGraduationCap}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
        <SectionBackdrop accent="green" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
            >
              <MdStars className="text-primary" />
              <span className="text-sm font-medium text-primary">Milestones & Wins</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Achievements</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'LeetCode Challenge Milestones',
                event: 'LeetCode',
                date: 'Ongoing',
                rank: '9 Achievement Badges',
                details: 'Completed 50 Days, 100 Days, and 150 Days Coding Challenges, earning 9 achievement badges.',
              },
              {
                title: '350+ DSA Problems Solved',
                event: 'LeetCode',
                date: 'Ongoing',
                rank: '350+ Problems',
                details: 'Solved 350+ Data Structures and Algorithms problems across arrays, strings, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and greedy algorithms.',
              },
              {
                title: 'Contest Participation',
                event: 'Competitive Programming',
                date: 'Ongoing',
                rank: 'Active Participant',
                details: 'Participated in online coding contests to improve algorithmic thinking, problem-solving speed, and accuracy.',
              },
              {
                title: '50+ Problems Solved',
                event: 'CodeChef',
                date: 'Ongoing',
                rank: '50+ Problems',
                details: 'Solved 50+ coding problems, strengthening fundamentals in DSA and competitive programming.',
              },
            ].map((ach, i) => (
              <AchievementCard key={i} ach={ach} i={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
