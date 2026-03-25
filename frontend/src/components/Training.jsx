import React from 'react';
import { motion } from 'framer-motion';
import { MdModelTraining } from 'react-icons/md';
import SectionBackdrop from './SectionBackdrop';

const trainingPoints = [
  'Completed summer training in Basics of DSA, covering Arrays, Linked Lists, Stacks, Queues, Trees, and Graphs.',
  'Practiced coding problems focusing on time and space complexity optimization.',
  'Improved algorithmic thinking using recursion, sorting, searching, and dynamic programming.',
];

const Training = () => {
  return (
    <section
      id="training"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors"
    >
      <SectionBackdrop accent="green" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
          >
            <MdModelTraining className="text-primary" />
            <span className="text-sm font-medium text-primary">Focused Learning</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
              Summer{' '}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
              Training
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl rounded-[2rem] border border-white/50 dark:border-white/10 shadow-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Training Program</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Basics of DSA
              </h3>
              <p className="text-lg font-semibold text-primary/80">Lovely Professional University</p>
            </div>

            <div className="self-start rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 px-4 py-3 text-sm font-semibold text-primary">
              Jun 2025 - Jul 2025
            </div>
          </div>

          <div className="space-y-4">
            {trainingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex gap-3 text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-green-400 flex-shrink-0" />
                <p>{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
