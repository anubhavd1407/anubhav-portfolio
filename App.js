import React, { useState } from "react";
import { Mail, Linkedin, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-lg transition">
    {image && (
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
    )}
    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
        View Case Study
      </a>
    )}
  </div>
);

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} font-sans transition-colors duration-300`}>
      {/* Dark mode toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow hover:scale-105 transition-transform"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
        <nav className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Anubhav Dwivedi</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("about")}>About</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("projects")}>Projects</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("testimonials")}>Testimonials</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("resume")}>Resume</li>
            <li className="cursor-pointer hover:text-blue-600" onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 px-4"
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">Anubhav Dwivedi</h1>
        <p className="text-xl font-medium text-gray-600 dark:text-gray-300">Senior Technical Program Manager</p>
        <p className="mt-4 max-w-xl text-lg text-gray-500 dark:text-gray-400">
          Delivering scalable IT solutions through agile leadership and program execution.
        </p>
      </motion.section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20">...</section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 border-b-2 border-gray-200 pb-2 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="IBM to Azure Migration"
              description="Led migration of on-prem infrastructure to Microsoft Azure for GS1 Canada, improving scalability and reducing operational risk."
            />
            <ProjectCard 
              title="MMGLN/MMGTIN/2D Application Build"
              description="Built GS1 Canada’s MMGLN/MMGTIN/2D applications from the ground up to support enhanced global product identification."
            />
            <ProjectCard 
              title="ERP Implementation – Wuxly Movement"
              description="Implemented ERP system, streamlining operations and reducing cost by 24% through aligned digital transformation."
            />
            <ProjectCard 
              title="SAP R3 to HANA Migration – Accenture"
              description="Managed SAP data and process migration from R3 to HANA, ensuring data integrity and high-performance access."
            />
            <ProjectCard 
              title="Disaster Recovery Implementation"
              description="Established DR processes and automated recovery workflows at GS1 Canada, achieving compliance and reliability."
            />
            <ProjectCard 
              title="IAM Implementation and Migration"
              description="Overhauled IAM framework and migrated user roles for secure access management across GS1 platforms."
            />
            <ProjectCard 
              title="ECCnet Registry Rebuild"
              description="Led a full re-platforming of Canada's largest product registry to a microservices architecture with unified data model."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-5xl mx-auto px-6 py-20">...</section>

      {/* Resume Section */}
      <section id="resume" className="max-w-5xl mx-auto px-6 py-20">...</section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-20 px-6">...</section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 text-center py-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Anubhav Dwivedi. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
