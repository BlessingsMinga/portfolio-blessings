"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    setShowResult(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "5f59528a-c45b-428b-b8c4-5ddf5d2489dd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Error submitting form. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowResult(false), 5000);
    }
  }, []);

  const dismissResult = useCallback(() => {
    setShowResult(false);
  }, []);

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h4 className="mb-2 text-3xl">Connect with me</h4>
          <h2 className="text-7xl font-bold text-blue-600">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
            I'm always open to new opportunities, collaborations, and
            interesting projects. If you have any questions, comments, or
            feedback, please use the form below.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full p-3 outline-none border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                name="name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 outline-none border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                name="email"
                autoComplete="email"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="sr-only">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Enter your message"
              required
              className="w-full p-4 outline-none border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
              name="message"
            />
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className="py-3 px-8 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-full mx-auto hover:bg-blue-700 focus-visible:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
              {!isSubmitting && (
                <ArrowRight className="w-4" aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </motion.form>

        {/* Animated Result Message */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              role="alert"
              aria-live="polite"
            >
              <div
                className={`px-6 py-4 rounded-full shadow-lg flex items-center ${
                  result.includes("Successfully")
                    ? "bg-green-500"
                    : "bg-red-500"
                } text-white`}
              >
                <span>{result}</span>
                <button
                  onClick={dismissResult}
                  className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Dismiss notification"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;