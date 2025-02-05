'use client'
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const frontendProjects = [
    {
      title: "E-commerce Platform",
      description: "Minimal shopping experience with seamless checkout",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      tech: ["React", "D3.js", "Material UI"],
      link: "#"
    }
  ];

  const backendProjects = [
    {
      title: "API Gateway",
      description: "Microservices architecture with load balancing",
      tech: ["Node.js", "Express", "Redis"],
      link: "#"
    },
    {
      title: "Auth Service",
      description: "Secure authentication and authorization system",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      link: "#"
    }
  ];

  const ProjectSection = ({ title, projects }: { title: string; projects: { title: string; description: string; tech: string[]; link: string }[] }) => (
    <div className="mb-7">
      <p className="text-neutral-500 mb-8 text-sm tracking-wider">{title}</p>
      <div className="grid gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative py-8 border-t border-neutral-800 cursor-pointer bg-neutral-900 p-6 rounded-lg shadow-md"
          >
            <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
            <div className="relative">
              <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-lg font-light text-neutral-400 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm text-neutral-500 bg-neutral-800 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <ExternalLink
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                size={20}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center">
        <div className="text-neutral-500 text-sm tracking-widest animate-pulse">
          LOADING
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-neutral-200 selection:bg-neutral-800 selection:text-white
      ${isLoading ? 'blur-lg' : 'blur-0'} transition-all duration-1000`}>
      {/* Navigation and About sections remain the same */}
      <nav className={`fixed top-0 left-0 right-0 px-6 py-8 bg-black/80 backdrop-blur-md z-50
        transition-all duration-1000 ${isLoading ? 'opacity-0 -translate-y-4 blur-lg' : 'opacity-100 translate-y-0 blur-0'}`}>
        <div className="max-w-xl mx-auto flex justify-center space-x-12">
          <a
            href="#about"
            className={`text-sm hover:text-white transition-colors ${
              activeSection === 'about' ? 'text-white' : 'text-neutral-500'
            }`}
          >
            ABOUT
          </a>
          <a
            href="#work"
            className={`text-sm hover:text-white transition-colors ${
              activeSection === 'work' ? 'text-white' : 'text-neutral-500'
            }`}
          >
            WORK
          </a>
          <a
            href="#contact"
            className={`text-sm hover:text-white transition-colors ${
              activeSection === 'contact' ? 'text-white' : 'text-neutral-500'
            }`}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className={`min-h-screen flex items-center px-6 transition-all duration-1000 delay-300
        ${isLoading ? 'opacity-0 translate-y-4 blur-lg' : 'opacity-100 translate-y-0 blur-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-neutral-500 mb-4 text-sm tracking-wider">FULL-STACK DEVELOPER</p>
            <h1 className="text-4xl md:text-6xl font-light mb-8">
              Himanshu Sahu
              <span className="text-neutral-500">.</span>
            </h1>
            <p className="text-xl font-light leading-relaxed mb-8 text-neutral-400">
              Building elegant Websites with a focus on clean code and intuitive design.
            </p>
            <ul className="space-y-4 text-neutral-500 font-light">
              <li className="flex items-center space-x-4">
                <span className="h-[1px] w-4 bg-neutral-800"></span>
                <span>Based in India</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="h-[1px] w-4 bg-neutral-800"></span>
                <span>Specializing in React & Node.js</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="h-[1px] w-4 bg-neutral-800"></span>
                <span>Exploring GenAI and Python</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="h-[1px] w-4 bg-neutral-800"></span>
                <span>Available for freelance projects</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={`min-h-screen px-6 transition-all duration-1000 delay-500
        ${isLoading ? 'opacity-0 translate-y-4 blur-lg' : 'opacity-100 translate-y-0 blur-0'}`}>
        <div className="max-w-5xl mx-auto">
          <ProjectSection title="FRONTEND" projects={frontendProjects} />
          <ProjectSection title="BACKEND" projects={backendProjects} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`min-h-screen py-7 px-6 transition-all duration-1000 delay-700
        ${isLoading ? 'opacity-0 translate-y-4 blur-lg' : 'opacity-100 translate-y-0 blur-0'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-neutral-500 mb-4 text-sm tracking-wider">GET IN TOUCH</p>
            <p className="text-xl font-light leading-relaxed mb-8">
              Currently available for freelance projects and full-time opportunities.
              Let's build something great together.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center group cursor-pointer"
            >
              <span className="text-sm tracking-wider mr-2 group-hover:mr-4 transition-all">
                himanshusahudev@gmail.com
              </span>
              <span className="h-[1px] w-10 bg-current group-hover:w-20 transition-all"></span>
            </a>
          </div>
        </div>
      </section>

      {/* Fixed Social Links */}
      <div className={`fixed bottom-8 right-8 flex flex-col space-y-4 transition-all duration-1000 delay-1000
        ${isLoading ? 'opacity-0 translate-x-4 blur-lg' : 'opacity-100 translate-x-0 blur-0'}`}>
        <a
          href="#"
          className="text-neutral-500 hover:text-white transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;