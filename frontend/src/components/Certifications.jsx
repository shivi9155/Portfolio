import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCertificate, FaTimes } from 'react-icons/fa';
import { MdOutlineCardMembership } from 'react-icons/md';
import axios from 'axios';
import SectionBackdrop from './SectionBackdrop';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const CertificationCard = ({ cert, onOpen }) => {
  const hasValidLink = cert.link && cert.link !== '#';

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      onClick={() => onOpen(cert)}
      className="bg-white/65 dark:bg-gray-800/55 backdrop-blur-xl p-6 rounded-[1.75rem] border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col gap-4 h-full">
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700/30 border border-gray-200 dark:border-gray-700">
          <img
            src={cert.image || 'https://via.placeholder.com/400x250?text=Certificate'}
            alt={cert.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-primary shadow-sm">
            <FaCertificate size={20} />
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2 gap-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">{cert.name}</h3>
            {hasValidLink && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="text-gray-400 hover:text-primary transition-colors p-1"
                aria-label={`Open ${cert.name} certificate`}
              >
                <FaExternalLinkAlt size={16} />
              </a>
            )}
          </div>
          <p className="text-primary font-semibold mb-1">{cert.provider}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.date}</p>

          {hasValidLink && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-primary/10 dark:bg-primary/20 px-4 py-2 text-sm font-semibold text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all"
            >
              View Certificate
              <FaExternalLinkAlt size={12} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCert, setSelectedCert] = useState(null);

  const fallbackCertifications = [
    {
      _id: '1',
      name: 'Full Stack Development with MERN',
      provider: 'thingQbtor',
      date: 'Dec 2025',
      image: '/public/Fulltcak.jpeg',
      link: 'https://drive.google.com/file/d/1UqVrLF9jZAIfGCpPla9ARIvKvf2S1NxY/view?usp=drive_link',
    },
    {
      _id: '2',
      name: 'Machine Learning and Image Processing',
      provider: 'thingQbator',
      date: 'Dec 2025',
      image: '/public/MachineL.jpeg',
      link: 'https://drive.google.com/file/d/18Ux9FgXb5XNEP5cJaJvjHXg6HE-sTJmg/view?usp=drive_link',
    },
    {
      _id: '3',
      name: 'Computational Theory',
      provider: 'Infosys',
      date: 'Aug 2025',
      image: '/public/CT.jpeg',
      link: 'https://drive.google.com/file/d/18fbckPiJ3nqPWQGsEbLGIoXYVbT18EOF/view?usp=drive_link',
    },
    {
      _id: '4',
      name: 'Data Structures and Algorithms Certification',
      provider: 'LPU',
      date: 'July 2025',
      image: '/public/DSA.jpeg',
      link: 'https://drive.google.com/file/d/1apAsdsRYowR3aRltBxrlACdAHmyl_z1L/view?usp=drive_link',
    },
    {
      _id: '5',
      name: 'Master Generative AI & Generative AI tools (ChatGPT & more)',
      provider: 'NPTEL',
      date: 'Aug 2025',
      image: '/public/MG.jpeg',
      link: 'https://drive.google.com/file/d/1Ar9RdeKkrnejS3hU038pvEqiBx7cc8YB/view?usp=drive_link',
    },

    {
      _id: '6',
      name: 'Cloud Computing Certification',
      provider: 'NPTEL',
      date: 'Apr 2025',
      image: '/public/NPTEL.jpeg',
      link: 'https://drive.google.com/file/d/1exlykyZCXYVM0UgJFekRwn4d_CIbdQp-/view?usp=drive_link',
    },
  ];

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/certifications');
        if (data && data.length > 0) {
          setCertifications(data);
        } else {
          setCertifications(fallbackCertifications);
        }
      } catch (error) {
        console.error('Error fetching certifications:', error);
        setCertifications(fallbackCertifications);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  useEffect(() => {
    if (!selectedCert) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <>
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-dark transition-colors">
        {/* Background decoration */}
        <SectionBackdrop accent="green" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/30 mb-6"
            >
              <MdOutlineCardMembership className="text-primary" />
              <span className="text-sm font-medium text-primary">Recognition & Learning</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
                My{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">
                Certifications
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-4"
            />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md h-32 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certifications.map((cert) => (
                <CertificationCard key={cert._id} cert={cert} onOpen={setSelectedCert} />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-white/10 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/60 text-white hover:bg-primary transition-colors"
                aria-label="Close certificate preview"
              >
                <FaTimes size={16} />
              </button>

              <div className="grid lg:grid-cols-[1.4fr_0.8fr] max-h-[90vh]">
                <div className="bg-gray-100 dark:bg-gray-950 overflow-auto">
                  <img
                    src={selectedCert.image || 'https://via.placeholder.com/900x600?text=Certificate'}
                    alt={selectedCert.name}
                    className="w-full h-full object-contain max-h-[70vh] lg:max-h-[90vh]"
                  />
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                      Certificate Preview
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {selectedCert.name}
                    </h3>
                    <p className="text-primary font-semibold mb-1">{selectedCert.provider}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{selectedCert.date}</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {selectedCert.link && selectedCert.link !== '#' && (
                      <a
                        href={selectedCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                      >
                        Open Original Certificate
                        <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedCert(null)}
                      className="inline-flex items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 px-4 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:border-primary hover:text-primary transition-colors"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
