import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] pt-20">

      <motion.div
        className="bg-black text-white rounded-3xl max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-md">
          Stay up to date about our latest offers
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-full">
            <span className="text-gray-400 mr-2 text-xl">📧</span>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-transparent focus:outline-none text-black placeholder:text-gray-500"
            />
          </div>
          <button className="bg-white text-black font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-20 px-6 pb-16 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-black">SHOP.CO</h3>
          <p className="mt-3 text-gray-600">
            We have clothes that suit your style and that you're proud to wear — from women to men.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-700">
            <FaTwitter className="hover:text-black transition" />
            <FaFacebookF className="hover:text-black transition" />
            <FaInstagram className="hover:text-black transition" />
            <FaGithub className="hover:text-black transition" />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-black mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-black mb-3">Help</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-black mb-3">FAQ</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-black mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Dev Tutorials</li>
            <li>Blog</li>
            <li>YouTube</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300 gap-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-gray-500">Shop.co © {new Date().getFullYear()}, All rights reserved</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
          <img src="/visa.svg" alt="Visa" className="h-6" />
          <img src="/mastercard.svg" alt="MasterCard" className="h-6" />
          <img src="/paypal.svg" alt="PayPal" className="h-6" />
          <img src="/stripe.svg" alt="Stripe" className="h-6" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
