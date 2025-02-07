'use client'
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Linkedin, Twitter, Mail } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    document.documentElement.style.scrollBehavior = 'smooth';

    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = 'auto';
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Minimal shopping experience with seamless checkout and intuitive user interface.",
      link: "https://ecommerce-demo.example.com"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform for monitoring business metrics.",
      link: "https://analytics-demo.example.com"
    },
    {
      title: "API Gateway",
      description: "High-performance microservices architecture with intelligent load balancing.",
      link: "https://api-demo.example.com"
    },
    {
      title: "Auth Service",
      description: "Enterprise-grade authentication system with advanced security features.",
      link: "https://auth-demo.example.com"
    }
  ];

  const ProjectCard = ({ project }: { project: Project }) => (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border-b border-neutral-800 py-8 group transition-all"
    >
      <div className="flex items-start justify-between transition-all duration-300">
        <div className="space-y-2 flex-grow">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">
              {project.title}
            </h2>
            <ExternalLink
              size={16}
              className="text-neutral-500 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 motion-reduce:transform-none"
            />
          </div>
          <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors pr-8">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-2xl font-light text-white animate-pulse">
            HS<span className="text-neutral-500">.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-neutral-200 selection:bg-neutral-800 selection:text-white flex flex-col items-center
      ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-neutral-800">
        <div className="max-w-2xl mx-auto flex justify-between items-center px-6 py-4">
          <p className="text-sm font-medium">HS<span className="text-neutral-500">.</span></p>
          <div className="flex space-x-8">
            <a href="#about" className="text-sm text-neutral-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-neutral-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-neutral-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-2xl px-6">
        {/* About Section */}
        <section id="about" className="pt-32">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-12">
            <p className="text-neutral-500 text-sm tracking-wider">FULL-STACK DEVELOPER</p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:himanshusahudev@gmail.com"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">
            Himanshu Sahu
            <span className="text-neutral-500">.</span>
          </h1>
          <p className="text-xl font-light leading-relaxed mb-12 text-neutral-400">
            Building elegant websites with a focus on clean code and intuitive design.
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <p className="text-neutral-500 mb-8 text-sm tracking-wider">PROJECTS</p>
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <p className="text-neutral-500 mb-4 text-sm tracking-wider">GET IN TOUCH</p>
          <p className="text-xl font-light leading-relaxed mb-8">
            Currently available for freelance projects and full-time opportunities.
            Let&apos;s build something great together.
          </p>
          <a
            href="mailto:himanshusahudev@gmail.com"
            className="inline-flex items-center group hover:text-white transition-colors"
          >
            <span className="text-sm tracking-wider mr-2 group-hover:mr-4 transition-all">
              himanshusahudev@gmail.com
            </span>
            <span className="h-[1px] w-10 bg-current group-hover:w-20 transition-all"></span>
          </a>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;