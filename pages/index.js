import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('summary');

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Your Name - Professional Resume</title>
        <meta name="description" content="Professional resume and portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex space-x-6 justify-center text-sm md:text-base">
            <li>
              <button 
                onClick={() => handleNavClick('summary')}
                className={`${activeSection === 'summary' ? 'text-accent font-medium' : 'text-gray-600'} hover:text-accent`}
              >
                Summary
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('experience')}
                className={`${activeSection === 'experience' ? 'text-accent font-medium' : 'text-gray-600'} hover:text-accent`}
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projects')}
                className={`${activeSection === 'projects' ? 'text-accent font-medium' : 'text-gray-600'} hover:text-accent`}
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('education')}
                className={`${activeSection === 'education' ? 'text-accent font-medium' : 'text-gray-600'} hover:text-accent`}
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('languages')}
                className={`${activeSection === 'languages' ? 'text-accent font-medium' : 'text-gray-600'} hover:text-accent`}
              >
                Languages
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Profile Section */}
        <section className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGERWXsh1We8g/profile-displayphoto-shrink_400_400/B4DZNoE.ahHgAg-/0/1732617955450?e=1746662400&v=beta&t=ppSlrWsZPoP4T1iTTtdEkO0b6AedRJvZQ7ND1hdEWc8"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">George Zyryanov</h1>
            <p className="text-xl text-secondary mb-4">Engineering Manager AQA / QA</p>
            
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-start">
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:george.zyryanov@gmail.com" className="text-accent hover:underline">
                  george.zyryanov@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600">LinkedIn</p>
                <a href="https://www.linkedin.com/in/george-zyryanov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  linkedin.com/george-zyryanov
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <span className="text-gray-700">Poland, Warsaw</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:+48571065204" className="text-accent hover:underline">
                  +48 571 065 204
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Executive Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Engineering Manager with 6 years of experience in QA and Automated QA, specializing in building and leading high-performing teams.
            Proven track record in improving development processes, reducing time-to-market, and maintaining high quality standards.
            Experienced in mentoring team members and fostering collaborative work environments in international settings.
          </p>
        </section>

        {/* Enterprise Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Work Experience - 6 Years</h2>
          
          <div className="space-y-12">
            {/* Orca Security - Manager */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-primary">Engineering Manager AQA / QA</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">Orca Security</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Nov 2021 - Nov 2023</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Oversaw both AQA and QA teams at a leading cybersecurity company valued at $1.8 billion.</li>
                <li>Led 5 full-time engineers across 2 countries to cut time-to-market by 25% without losing quality.</li>
                <li>Mentored team members, fostering a collaborative culture.</li>
              </ul>
            </div>

            {/* Orca Security - Senior */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-primary">Senior AQA / Senior QA</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">Orca Security</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Apr 2020 - Oct 2021</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Responsible for designing, implementing, and maintaining automated test frameworks.</li>
                <li>Conducted comprehensive manual testing with clear bug description.</li>
                <li>Contributed UX/UI improvement ideas to enhance end-user experience.</li>
              </ul>
            </div>

            {/* Gödel Technologies */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-primary">AQA / QA</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://uk.rs-online.com/web" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">RS Components</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Jan 2019 - Apr 2020</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Developed automated test scripts for web and microservices.</li>
                <li>Integrated PACT testing, E2E, and performance tests (both server-side and client-side).</li>
                <li>Persuaded client to adopt a new UI testing tool, improving testing speed and consistency.</li>
              </ul>
            </div>

            {/* EPAM */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-primary">Junior QA</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://www.workfusion.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">EPAM</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Jan 2018 - Jan 2019</span>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Served as part of agile Scrum teams for a client focusing on RPA scripts with Selenium.</li>
                <li>Led a critical month-long project onsite at one of the largest French banks in Singapore.</li>
                <li>Effectively communicated progress and challenges to stakeholders to foster informed decision-making.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Personal Projects */}
        <section id="projects" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Personal Projects</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {/* booksofceo.com */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-primary">Founder</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://booksofceo.com/people" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">booksofceo.com</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Dec 2024 - Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Built and designed MVP which uses OpenAI API to analyze podcast content.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">OpenAI API</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Web Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Education</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-primary">Bachelor in Global Economy and Marketing</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://bsu.by/en/rankings" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent">Belarusian State University</a>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">Sep 2012 - May 2017</span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Bachelor's Degree – Global Economy (5-year program)
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>3rd place in project pitch competition in English. Showcased analysis, research, and communication.</li>
                <li>Analyzed, gathered information and pitched to CEO of Geely Belarus a market fit solution.</li>
                <li>Competed in Google competition. Found client, built site, used AdWords. Ranked top 100 of 5000.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Language Competencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-600">Fluent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Speaking, reading, writing</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">Russian</span>
                    <span className="text-gray-600">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} George Zyryanov. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
} 