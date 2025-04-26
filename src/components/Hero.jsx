import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/Pfp.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      className="bg-zinc-100 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 flex-col md:flex-row gap-12">
        
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-black leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            FIND STUFF <br /> THAT YOU NEED
          </motion.h1>

          <motion.p
            className="text-gray-600 mt-6 text-base md:text-lg max-w-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Browse through our diverse range of meticulously crafted products,
            thoughtfully designed to celebrate your individuality and cater to
            your unique taste and lifestyle.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <Link
              to="/shop"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
            >
              Shop Now
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-10 mt-10 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div>
              <p className="text-2xl font-bold text-black">200+</p>
              <p className="text-gray-600 text-sm">International Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">2000+</p>
              <p className="text-gray-600 text-sm">High-Quality Products</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-black">30000+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
        >
          <img
            src={Image}
            alt="Hero Graphic"
            className="w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
