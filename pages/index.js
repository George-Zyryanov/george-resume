import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function Home() {
  const [activeSection, setActiveSection] = useState('summary');
  const [showOrcaTech, setShowOrcaTech] = useState(false);
  const [showRSTech, setShowRSTech] = useState(false);
  const [showWorkfusionTech, setShowWorkfusionTech] = useState(false);
  const [showBooksCEOTech, setShowBooksCEOTech] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Head>
        <title>Your Name - Professional Resume</title>
        <meta name="description" content="Professional resume and portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </Head>

      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <nav className="max-w-5xl mx-auto px-3 md:px-6 py-3 md:py-4 overflow-x-auto">
          <ul className="flex space-x-4 md:space-x-6 justify-start md:justify-center text-xs md:text-sm whitespace-nowrap">
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

      <main className="max-w-5xl w-full mx-auto px-4 md:px-6 py-6 md:py-8 bg-white shadow-md my-4 md:my-8">
        {/* Profile Section */}
        <section className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-36 h-36 md:w-48 md:h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGERWXsh1We8g/profile-displayphoto-shrink_400_400/B4DZNoE.ahHgAg-/0/1732617955450?e=1746662400&v=beta&t=ppSlrWsZPoP4T1iTTtdEkO0b6AedRJvZQ7ND1hdEWc8"
              alt="Profile Photo"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">George Zyryanov</h1>
            <p className="text-lg md:text-xl text-secondary mb-3">Senior AQA / QA Engineer</p>
            
            <div className="flex flex-wrap justify-center md:justify-start items-center text-sm md:text-base gap-y-2">
              <a href="mailto:george.zyryanov@gmail.com" className="text-accent hover:underline">
                george.zyryanov@gmail.com
              </a>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <a href="https://www.linkedin.com/in/george-zyryanov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                linkedin
              </a>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <span className="text-gray-700">Poland, Warsaw</span>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <a href="tel:+48571065204" className="text-accent hover:underline">
                +48 571 065 204
              </a>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="mb-10 md:mb-16 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 pb-2 border-b border-gray-200">Executive Summary</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Engineering Manager with 6 years of experience in QA and Automated QA, specializing in building and leading high-performing teams.
            Proven track record in improving development processes, reducing time-to-market, and maintaining high quality standards.
            Experienced in mentoring team members and fostering collaborative work environments in international settings.
          </p>
        </section>

        {/* Enterprise Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Work Experience - 6 Years</h2>
          
          <div className="space-y-12">
            {/* Orca Security - Both positions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Manager position */}
              <div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Engineering Manager AQA / QA</h3>
                    <div className="mt-1 text-sm">
                      <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent">
                        Orca Security
                      </a>
                      <span className="text-xs text-gray-600 italic ml-2">
                        - Cloud cybersecurity firm (~500 employees, ~$2B valuation) with partners including AWS, Azure, and Google Cloud.
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Nov 2021 - Nov 2023</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                  <li>Oversaw both AQA and QA teams at a leading cybersecurity company valued at $1.8 billion.</li>
                  <li>Led 5 full-time engineers across 2 countries to cut time-to-market by 25% without losing quality.</li>
                  <li>Mentored team members, fostering a collaborative culture.</li>
                </ul>
              
              {/* Senior position */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Senior AQA / Senior QA</h3>
                    <div className="mt-1 text-sm">
                      <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent">
                        Orca Security
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Apr 2020 - Oct 2021</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Responsible for designing, implementing, and maintaining automated test frameworks.</li>
                  <li>Conducted comprehensive manual testing with clear bug description.</li>
                  <li>Contributed UX/UI improvement ideas to enhance end-user experience.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
                  <button 
                    onClick={() => setShowOrcaTech(!showOrcaTech)}
                    className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                  >
                    <span>More details about Tools and Technology Used</span>
                    {showOrcaTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>
                </div>
                
                {showOrcaTech && (
                  <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Programming Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          <i className="devicon-javascript-plain mr-1"></i> JavaScript
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-typescript-plain mr-1"></i> TS
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          <i className="devicon-python-plain mr-1"></i> Python
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          <i className="devicon-bash-plain mr-1"></i> Bash
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          <i className="devicon-nodejs-plain mr-1"></i> Node.js
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Testing & CI/CD</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                          <i className="devicon-playwright-plain mr-1"></i> Playwright
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          <i className="devicon-webdriverio-plain mr-1"></i> WebdriverIO
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          <i className="devicon-githubactions-plain mr-1"></i> GitHub Actions
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Cloud & Infrastructure</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          <i className="devicon-amazonwebservices-original mr-1"></i> AWS
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-googlecloud-plain mr-1"></i> GCP
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-azure-plain mr-1"></i> Azure
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">DevOps & Monitoring</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-docker-plain mr-1"></i> Docker
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="mr-1">🔧</i> Site24x7
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          <i className="devicon-grafana-original mr-1"></i> Grafana
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                          <span className="mr-1">🔧</span> DataDog
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          <i className="devicon-django-plain mr-1"></i> Django
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Browsers & Development</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-chrome-plain mr-1"></i> Chrome
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                          <i className="devicon-firefox-plain mr-1"></i> Firefox
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-safari-plain mr-1"></i> Safari
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Test Management & Collaboration</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="mr-1">🔧</i> qase.io
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-jira-plain mr-1"></i> Jira
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-confluence-plain mr-1"></i> Confluence
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Other Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          <span className="mr-1">🔧</span> YAML
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          <i className="devicon-mysql-plain mr-1"></i> SQL
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          <span className="mr-1">🔧</span> LaunchDarkly
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            {/* RS Components */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">AQA / QA</h3>
                  <div className="mt-1 text-sm">
                    <a href="https://uk.rs-online.com/web" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent">
                      RS Components
                    </a>
                    <span className="text-xs text-gray-600 italic ml-2">
                      - Global distributor of electronic products, employs ~8,900 people and reported revenues of ~£2.94 billion in 2024.
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Jan 2019 - Apr 2020</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                <li>Developed automated test scripts for web and microservices.</li>
                <li>Integrated PACT testing, E2E, and performance tests (both server-side and client-side).</li>
                <li>Persuaded client to adopt a new UI testing tool, improving testing speed and consistency.</li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowRSTech(!showRSTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>More details about Tools and Technology Used</span>
                  {showRSTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              </div>
              
              {showRSTech && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Programming & Testing</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        <i className="devicon-javascript-plain mr-1"></i> JavaScript
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        <i className="devicon-nodejs-plain mr-1"></i> Node.js
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> WebdriverIO
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        <i className="devicon-jmeter-original mr-1"></i> JMeter
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> XPath
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-css3-plain mr-1"></i> CSS
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">DevOps & Collaboration</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                        <i className="devicon-gitlab-plain mr-1"></i> GitLab
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> JFrog
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-jira-plain mr-1"></i> Jira
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Confluence
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Microsoft Teams
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        <i className="devicon-slack-plain mr-1"></i> Slack
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* EPAM */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">Junior QA</h3>
                  <div className="mt-1 text-sm">
                    <a href="https://www.workfusion.com" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent">
                      WorkFusion
                    </a>
                    <span className="text-xs text-gray-600 italic ml-2">
                      - A leading provider of automation solutions, specializing in robotic process automation (RPA) and intelligent automation.
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Jan 2018 - Jan 2019</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-3">
                <li>Served as part of agile Scrum teams for a client focusing on RPA scripts with Selenium.</li>
                <li>Led a critical month-long project onsite at one of the largest French banks in Singapore.</li>
                <li>Effectively communicated progress and challenges to stakeholders to foster informed decision-making.</li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowWorkfusionTech(!showWorkfusionTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>More details about Tools and Technology Used</span>
                  {showWorkfusionTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              </div>
              
              {showWorkfusionTech && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> XML
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        <i className="devicon-java-plain mr-1"></i> Java
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        <i className="devicon-junit-plain mr-1"></i> JUnit
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-jira-plain mr-1"></i> Jira
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Confluence
                      </span>
                    </div>
                  </div>
                </div>
              )}
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
                <h3 className="text-xl font-semibold text-primary">Founder / Developer / Designer</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://booksofceo.com/people" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent mr-2">booksofceo.com</a>
                  <span className="text-sm text-gray-600 md:text-right whitespace-nowrap">Dec 2024 - Present</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Built and designed application which uses OpenAI API to analyze podcast content.
              </p>
              
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowBooksCEOTech(!showBooksCEOTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>More details about Tools and Technology Used</span>
                  {showBooksCEOTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              </div>
              
              {showBooksCEOTech && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">AWS Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        <i className="devicon-amazonwebservices-original mr-1"></i> AWS
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Amplify
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Lightsail
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> EC2
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Route53
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> CloudFormation
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> VPC
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> S3
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> RDS
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Frontend & Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-react-original mr-1"></i> React
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        <i className="devicon-nextjs-original mr-1"></i> Next.js
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Cursor AI
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">APIs & Database</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> YouTube API
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Amazon API
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> OpenAI API
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-mysql-plain mr-1"></i> MySQL
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Analytics</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-google-plain mr-1"></i> Google Analytics
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Education</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-primary">Bachelor in Global Economy and Marketing</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://bsu.by/en/rankings" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent mr-2">Belarusian State University</a>
                  <span className="text-sm text-gray-600 md:text-right whitespace-nowrap">Sep 2012 - May 2017</span>
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
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">English:</span>
                  <span className="text-gray-600">Fluent (Speaking, reading, writing)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">Polish:</span>
                  <span className="text-gray-600">Intermediate (B1 level)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">Russian:</span>
                  <span className="text-gray-600">Native</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8 w-full">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} George Zyryanov. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
} 