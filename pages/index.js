import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

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
        <title>George Zyryanov - Resume</title>
        <meta name="description" content="Professional resume and portfolio" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="https://my-person-images.s3.eu-north-1.amazonaws.com/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
              <a href="mailto:george.zyryanov@gmail.com" className="text-accent hover:underline inline-flex items-center">
                george.zyryanov@gmail.com
                <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <a href="https://www.linkedin.com/in/george-zyryanov/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center">
                linkedin
                <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <span className="text-gray-700">Poland, Warsaw</span>
              <span className="mx-2 md:mx-4 text-gray-400 hidden md:inline">|</span>
              <span className="w-full md:w-auto md:hidden"></span>
              <a href="tel:+48571065204" className="text-accent hover:underline inline-flex items-center">
                +48 571 065 204
                <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="mb-10 md:mb-16 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 pb-2 border-b border-gray-200">Hi! I'm George</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Focused on delivering exceptional product quality. I streamline QA/AQA processes with robust automation and CI/CD integrations, ensuring faster and more reliable releases. My 6 years of experience, strong communication, and collaborative style drive best practices across diverse teams.
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
                      <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                        Orca Security
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                      <span className="text-xs text-gray-600 italic ml-2">
                        - Cloud cybersecurity firm (~500 employees, ~$2B valuation) with partners including AWS, Azure, and Google Cloud.
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Nov 2021 - Nov 2023</span>
                </div>
                <ul className="list-disc list-outside text-gray-700 space-y-2 ml-8 mt-3">
                  <li className="pl-1">Spearheaded end-to-end QA and AQA initiatives at a $1.8B cybersecurity firm, creating robust automation frameworks and best-practice standards.</li>
                  <li className="pl-1">Provided hands-on mentorship in test methodologies, fostering a culture of continuous improvement and collaboration among QA engineers.</li>
                  <li className="pl-1">Designed and executed comprehensive QA strategies—covering APIs, frontend, backend, and integration testing—that consistently met evolving product demands without sacrificing quality.</li>
                </ul>
              
              {/* Senior position */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Senior AQA / Senior QA</h3>
                    <div className="mt-1 text-sm">
                      <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                        Orca Security
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Apr 2020 - Oct 2021</span>
                </div>
                <ul className="list-disc list-outside text-gray-700 space-y-2 ml-8 mt-3">
                  <li className="pl-1">Built and deployed containerized test suites that reduced time-to-market by 25% without compromising on product quality or reliability.</li>
                  <li className="pl-1">Engineered and maintained over 500 parallel automated tests using GitHub Actions and Docker, boosting execution speed 10x and integrating Slack alerts for real-time feedback.</li>
                  <li className="pl-1">Championed best practices through site speed monitoring, advanced bug-hunting techniques, and 1,000+ documented test cases, while hosting "Quality Assurance How To" sessions to foster continuous improvement and knowledge sharing.</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
                  <button 
                    onClick={() => setShowOrcaTech(!showOrcaTech)}
                    className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                  >
                    <span>Accomplishments and Technologies Used</span>
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
                    
                    <div className="mt-6 border-t border-gray-200 pt-5">
                      <h4 className="text-base font-semibold text-primary mb-4">Accomplishments and Achievements</h4>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🤖</span> AQA & CI/CD
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Developed, maintained and executed 500+ automated tests that ran in parallel using GitHub runners.</li>
                          <li className="pl-1">Made tests run on 5 machines with 2 threads each, enabling 10 parallel tests and increasing execution speed 10x times.</li>
                          <li className="pl-1">Configured all tests to run using Docker containers.</li>
                          <li className="pl-1">Implemented automated test triggers for every PR with informational windows showing test status and descriptive error logging.</li>
                          <li className="pl-1">Added Slack notifications for failed tests.</li>
                          <li className="pl-1">Added site speed monitoring with defined threshold metrics for critical pages.</li>
                          <li className="pl-1">Impltemented BDD approach for test automation. All tests were written using Gherkin language.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🔍</span> QA
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Developed and maintained Test Plans and Test Cases.</li>
                          <li className="pl-1">Worked on testing different products in parallel with constantly changing priorities.</li>
                          <li className="pl-1">Manually tested various software types: API, onboardings, FE, integration testing, BE.</li>
                          <li className="pl-1">Created testing scenarios using Linux instances to upload files and malware for scan verification.</li>
                          <li className="pl-1">Developed a checklist for testing new environments before production use.</li>
                          <li className="pl-1">Participated in testing GOV environments with high standards and different approaches.</li>
                          <li className="pl-1">Provided UI design feedback and pitched improved ideas to product owners.</li>
                          <li className="pl-1">Developed a testing strategy that helped increase delivery times by 25% without affecting quality.</li>
                          <li className="pl-1">Implemented a system where each front-end team had a dedicated QA who documented their expertise.</li>
                          <li className="pl-1">Created detailed Test Plans and Test Cases for Frontend and APIs.</li>
                          <li className="pl-1">Used various bug hunting techniques including exploratory testing, API testing, boundary testing, browser testing, automation for pixel-level testing, form validation, authorization bypass testing, cookie manipulation, DB stress testing, log analysis, and network traffic analysis.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">👨‍🏫</span> Product Quality Advocate
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Planned, developed, scheduled and hosted "Quality Assurance How To" meetings.</li>
                          <li className="pl-1">Held open mic sessions for developers to share ideas on improving approaches.</li>
                          <li className="pl-1">Developed QA/AQA responsibilities documents.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">👥</span> Team Leadership
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Created a skill assessment process to identify QA engineers best suited for roles.</li>
                          <li className="pl-1">Developed mock situations to train QAs in managing workloads and maintaining quality standards.</li>
                          <li className="pl-1">Mentored manual QA engineers in test automation, building their skills for independent work.</li>
                          <li className="pl-1">Continuously planned quarterly work for 3 manual QA engineers and 2 test automation engineers.</li>
                          <li className="pl-1">Implemented continuous process improvements, analyzing bug patterns to create faster response processes.</li>
                          <li className="pl-1">Collaborated with various teams on every major feature development.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🗣️</span> Communication
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Developed strong relationships with DevOps team, ensuring support for initiatives.</li>
                          <li className="pl-1">Built trust with 3 Frontend development teams who valued input on quality issues.</li>
                          <li className="pl-1">Established effective communication with C-level management, gaining approval for requests.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">📝</span> Documentation
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Created and documented 1000+ test cases in qase.io.</li>
                          <li className="pl-1">Developed QA/AQA responsibilities documents.</li>
                          <li className="pl-1">Maintained "how-to" documentation for new features to ensure continuity of work.</li>
                        </ul>
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
                    <a href="https://uk.rs-online.com/web" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                      RS Components
                      <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                    <span className="text-xs text-gray-600 italic ml-2">
                      - Global distributor of electronic products, employs ~8,900 people and reported revenues of ~£2.94 billion in 2024.
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Jan 2019 - Apr 2020</span>
              </div>
              <ul className="list-disc list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1">Developed automated test scripts for web and microservices.</li>
                <li className="pl-1">Integrated PACT testing, E2E, and performance tests (both server-side and client-side).</li>
                <li className="pl-1">Persuaded client to adopt a new UI testing tool, improving testing speed and consistency.</li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowRSTech(!showRSTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>Accomplishments and Technologies Used</span>
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
                  
                  <div className="mb-5">
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
                  
                  <div className="mt-6 border-t border-gray-200 pt-5">
                      <h4 className="text-base font-semibold text-primary mb-4">Accomplishments and Achievements</h4>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🤖</span> AQA
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Implemented and used a custom version of WDIO test automation framework</li>
                          <li className="pl-1">Used Gitlab for Ci/Cd automation.</li>
                          <li className="pl-1">Developed and Maintained Automated Tests.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🔍</span> QA
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Developed and Maintained Test Cases and Test Suites.</li>
                          <li className="pl-1">Developed Test Plan</li>
                          <li className="pl-1">Example.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">👨‍🏫</span> Product Quality Advocate
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Participated and pitched ideas on Quality Advocates Meeting.</li>
                          <li className="pl-1">Presented a new testing tool to the memembers of QA department.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🗣️</span> Communication
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Worked as a part of cross-functional SCRUM team [2 BE, 2 FE, 1 AQA/QA, BA, Product Manager].</li>
                          <li className="pl-1">Actively participated in SCRUM rituals.</li>
                          <li className="pl-1">Gathered information and intelligence across various departments.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">📝</span> Documentation
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Wrote testing documentation including "How To" guides.</li>
                        </ul>
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
                    <a href="https://www.workfusion.com" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                      WorkFusion
                      <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                    <span className="text-xs text-gray-600 italic ml-2">
                      - A leading provider of automation solutions, specializing in robotic process automation (RPA) and intelligent automation.
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Jan 2018 - Jan 2019</span>
              </div>
              <ul className="list-disc list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1">Served as part of agile Scrum teams for a client focusing on RPA scripts with Selenium.</li>
                <li className="pl-1">Led a critical month-long project onsite at one of the largest French banks in Singapore.</li>
                <li className="pl-1">Effectively communicated progress and challenges to stakeholders to foster informed decision-making.</li>
              </ul>
              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowWorkfusionTech(!showWorkfusionTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>Accomplishments and Technologies Used</span>
                  {showWorkfusionTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              </div>
              
              {showWorkfusionTech && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                  <div className="mb-5">
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
                  
                  <div className="mt-6 border-t border-gray-200 pt-5">
                      <h4 className="text-base font-semibold text-primary mb-4">Accomplishments and Achievements</h4>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🤖</span> Automation
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Automated business processes using latest WorkFusion RPA tech.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🔍</span> Business Intelligence and Project Management
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Worked as a BA on one of the major banking projects. Worked closely with stakeholders to understand business needs, created tasks for developers.</li>
                          <li className="pl-1">Because of great communication skills - chosen out of 10 engineers to go on a business trip to Singapore.</li>
                          <li className="pl-1">Created / Updated tasks in Jira.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">👨‍🏫</span> Training for customers
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Designed and hosted educational sessions for bank workers on how to use the RPA system.</li>
                          <li className="pl-1">Created PowerPoint presentations with "How To" to reduce complications.</li>
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                          <span className="mr-2">🗣️</span> Communication
                        </h5>
                        <ul className="list-disc list-outside text-sm text-gray-700 space-y-1 ml-6">
                          <li className="pl-1">Actively participated in SCRUM rituals.</li>
                          <li className="pl-1">Gathered information and intelligence across various departments.</li>
                        </ul>
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
                  <a href="https://booksofceo.com/people" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent mr-2 inline-flex items-center">
                    booksofceo.com
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
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
                  <span>Accomplishments and Technologies Used</span>
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
                  <a href="https://bsu.by/en/rankings" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent mr-2 inline-flex items-center">
                    Belarusian State University
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                  <span className="text-sm text-gray-600 md:text-right whitespace-nowrap">Sep 2012 - May 2017</span>
                </div>
              </div>
              <p className="text-gray-700 mb-2">
                Bachelor's Degree – Global Economy (5-year program)
              </p>
              <ul className="list-disc list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1">3rd place in project pitch competition in English. Showcased analysis, research, and communication.</li>
                <li className="pl-1">Analyzed, gathered information and pitched to CEO of Geely Belarus a market fit solution.</li>
                <li className="pl-1">Participated in Google competition. Found client, built site, used AdWords. Ranked top 100 of 5000.</li>
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
          <p className="mb-2">© {new Date().getFullYear()} George Z. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
} 