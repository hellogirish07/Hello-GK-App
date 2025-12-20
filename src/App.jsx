// src/App.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.995 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.995 },
  };

  return (
    <div className=" app-gradient min-h-screen text-gray-800 ">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* spacing for fixed top nav */}
      <div className="h-24 md:h-28" />

      <main className="max-w-4xl mx-auto px-4 py-6 pb-32 md:pb-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-[60vh]"
          >
            {currentPage === "home" && <Home />}
            {currentPage === "about" && <About />}
            {currentPage === "resume" && <Resume />}
            {currentPage === "projects" && <Projects />}
            {currentPage === "contact" && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
