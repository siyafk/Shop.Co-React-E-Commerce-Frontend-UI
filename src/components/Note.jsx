import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      duration: 1,
    },
  },
};

const Note = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-200 overflow-hidden">
      <motion.div
        className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Left Side */}
        <motion.div variants={fadeUp}>
          <motion.h2
            className="text-3xl font-extrabold text-black mb-6"
            variants={zoomIn}
          >
            IMPORTANT NOTICE
          </motion.h2>

          <motion.h3
            className="text-lg font-semibold text-black mb-2"
            variants={fadeUp}
          >
            Demo Project
          </motion.h3>

          <motion.p
            className="text-gray-600 leading-relaxed text-base"
            variants={fadeUp}
          >
            This is a demo e-commerce website built to showcase web development
            skills. It is not a real online store and no actual transactions
            can be made.
            <br />
            <br />
            All product data is provided by{" "}
            <span className="font-semibold text-black">DummyJSON API</span>.
          </motion.p>
        </motion.div>

        {/* Right Side */}
        <motion.div variants={container}>
          <motion.h3
            className="text-lg font-semibold text-black mb-4"
            variants={fadeUp}
          >
            Tech Stack
          </motion.h3>

          <motion.ul
            className="list-disc list-inside space-y-2 text-gray-600 text-base"
            variants={fadeUp}
          >
            <li>
              <span className="text-black font-medium">Built with:</span>{" "}
              Next.js 14 (App Router)
            </li>
            <li>UI Components from shadcn/ui</li>
            <li>Styling with TailwindCSS</li>
            <li>State Management using Redux Toolkit</li>
            <li>API Integration with Axios</li>
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Footer Buttons */}
      <motion.div
        className="mt-16 flex justify-center gap-6 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <motion.a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition-all duration-300 ease-in-out shadow-lg hover:scale-105 active:scale-95"
          variants={fadeUp}
        >
          View Figma Template
        </motion.a>

        <motion.a
          href="#"
          className="border border-black text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-md hover:scale-105 active:scale-95"
          variants={fadeUp}
        >
          <FaGithub className="text-xl" />
          View Source Code
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Note;
