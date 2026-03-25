import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaChessQueen } from 'react-icons/fa';
import { MdOutlineCode, MdWork } from 'react-icons/md';
import shivaniPhoto from '../assets/Shivani.jpeg';
import resumeFile from '../assets/resume.pdf';

const heroStats = [
  { label: 'DSA Problems', value: '350+' },
  { label: 'Certifications', value: '6' },
  { label: 'Projects Built', value: '3+' },
];

const floatingCards = [
  { title: 'MERN Stack', detail: 'React, Node.js, MongoDB', position: 'top-10 -left-2 md:-left-10', delay: 0.2 },
  { title: 'DSA Focus', detail: 'Recursion, DP, Graphs', position: 'bottom-12 -right-2 md:-right-12', delay: 0.35 },
  { title: 'Problem Solving', detail: 'Contests and coding practice', position: 'top-1/2 -right-6 md:-right-16', delay: 0.5 },
];

const Hero = () => {
  // Typing animation effect for subtitle
  const [text, setText] = React.useState('');
  const fullText = "Computer Science Engineering Student at LPU";
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(74,222,128,0.12),transparent_28%)]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-blue-400/5 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-16 right-[12%] w-48 h-48 border border-primary/20 rounded-[2rem] bg-white/20 dark:bg-white/5 backdrop-blur-md shadow-2xl"
          animate={{ rotate: [16, -6, 16], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        />
        <motion.div
          className="absolute bottom-20 left-[10%] w-36 h-36 border border-green-400/20 rounded-full bg-green-400/10 blur-sm"
          animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[28%] left-[8%] w-24 h-24 border border-sky-300/30 rotate-45 rounded-3xl"
          animate={{ rotate: [45, 135, 45], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1400),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 900),
            }}
            animate={{
              y: [null, -30, 30, -30],
              x: [null, 30, -30, 30],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30"
          >
            <MdOutlineCode className="text-primary" />
            <span className="text-sm font-medium text-primary">Available for opportunities</span>
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-primary font-semibold tracking-wide uppercase flex items-center gap-2"
            >
              <span className="w-8 h-px bg-primary"></span>
              Hi, I'm
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent leading-tight"
            >
              Shivani Sharma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {text}
              <span className="animate-pulse">|</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-4"
          >
            <p className="leading-relaxed">
              I am passionate about software development and enjoy solving real-world problems through code.
            </p>
            <p className="leading-relaxed">
              I have experience working with <span className="text-primary font-semibold">C++</span>, <span className="text-primary font-semibold">Java</span>, and <span className="text-primary font-semibold">JavaScript</span>, and I am currently exploring full-stack web development using the <span className="text-primary font-semibold">MERN stack</span>. I love learning new technologies and applying my knowledge by building practical projects.
            </p>
            <p className="leading-relaxed">
              I am also focused on strengthening my skills in <span className="text-primary font-semibold">data structures and algorithms</span>, which helps me improve my problem-solving and logical thinking abilities.
            </p>
            <p className="leading-relaxed">
              I am a quick learner, a team player, and always eager to take on new challenges and opportunities to grow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl px-5 py-4 shadow-lg"
              >
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{item.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 pt-2"
          >
            <a
              href="https://github.com/shivi9155"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sharmashivani9155/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:shivani.sharma9155@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            >
              <FaEnvelope size={20} />
            </a>
            <div className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300">
              <FaChessQueen size={20} />
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-4 flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={resumeFile}
              download="Shivani_Sharma_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary rounded-full font-medium transition-all flex items-center gap-2 group"
            >
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image/Headshot with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center w-full"
        >
          <div className="relative w-full max-w-[32rem] min-h-[30rem] md:min-h-[36rem] flex items-center justify-center">
            <motion.div
              className="absolute inset-10 rounded-[2.75rem] bg-gradient-to-br from-primary/20 via-transparent to-green-400/20 blur-3xl"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />

            <motion.div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full border border-green-400/20"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            />

            {floatingCards.map((card) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: card.delay, duration: 0.6 }}
                className={`absolute ${card.position} hidden md:block rounded-2xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl px-4 py-3 shadow-xl`}
              >
                <p className="text-sm font-bold text-gray-900 dark:text-white">{card.title}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{card.detail}</p>
              </motion.div>
            ))}

            <motion.div
              animate={{ y: [0, -12, 0], rotateY: [0, 10, 0], rotateX: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative group w-72 md:w-[26rem]"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/35 via-sky-400/30 to-green-400/35 rounded-[2.5rem] blur-2xl opacity-90" />
              <div className="relative rounded-[2.5rem] border border-white/60 dark:border-white/10 bg-white/55 dark:bg-gray-900/55 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),transparent_35%,transparent_65%,rgba(74,222,128,0.18))]" />
                <div className="relative p-4 md:p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-400/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">Portfolio</span>
                  </div>

                  <div className="relative rounded-[2rem] overflow-hidden border border-white/50 dark:border-white/10">
                    <motion.img
                      src={shivaniPhoto}
                      alt="Shivani Sharma"
                      loading="lazy"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full aspect-[4/5] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">Shivani Sharma</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack and DSA Learner</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-primary text-white p-3 rounded-2xl shadow-lg">
                        <MdWork size={20} />
                      </div>
                      <div className="bg-green-500 text-white p-3 rounded-2xl shadow-lg">
                        <MdOutlineCode size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
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
    </section>
  );
};

export default Hero;
