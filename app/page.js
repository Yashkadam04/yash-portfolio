"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-900 text-white min-h-screen px-6">

      {/* NAVBAR */}
      <nav className="flex justify-between py-6">
        <h1 className="text-xl font-bold">Yash Kadam</h1>
        <div className="flex gap-4">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mt-16"
      >
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Yash Kadam</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Full Stack Developer | AI Enthusiast
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="resume.pdf" className="bg-blue-500 px-5 py-2 rounded">
            Download Resume
          </a>
          <a href="#projects" className="border px-5 py-2 rounded">
            View Work
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="mt-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400">
          I am a B.Tech student with strong skills in full stack development and AI.
          I build scalable applications and love solving real-world problems.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Java", "React", "Node.js", "Python", "MySQL", "MongoDB"].map((s) => (
            <span key={s} className="bg-gray-800 px-4 py-2 rounded-lg">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-24">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">SmartShelfX</h3>
            <p className="text-gray-400 mt-2">
              AI inventory system with demand forecasting.
            </p>
            <a href="#" className="text-blue-400 mt-2 inline-block">GitHub →</a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">Green AI Framework</h3>
            <p className="text-gray-400 mt-2">
              ML models comparison based on energy efficiency.
            </p>
            <a href="#" className="text-blue-400 mt-2 inline-block">GitHub →</a>
          </motion.div>

        </div>
      </section>

      {/* GITHUB STATS */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold">GitHub Stats</h2>
        <img
          className="mx-auto mt-6"
          src="https://github-readme-stats.vercel.app/api?username=Yashkadam04&show_icons=true&theme=dark"
        />
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-24 text-center pb-10">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-gray-400">yashkadam1215@gmail.com</p>

        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </section>

    </main>
  );
}