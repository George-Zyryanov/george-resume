import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export default function Home() {
  const [activeSection, setActiveSection] = useState('summary');
  const [showOrcaTech, setShowOrcaTech] = useState(false);
  const [showRSTech, setShowRSTech] = useState(false);
  const [showWorkfusionTech, setShowWorkfusionTech] = useState(false);
  const [showBooksCEOTech, setShowBooksCEOTech] = useState(false);
  const [showPaceTech, setShowPaceTech] = useState(false);

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
        <style>{`
          @keyframes pulse-border {
            0% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
            }
            70% {
              box-shadow: 0 0 0 6px rgba(99, 102, 241, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
            }
          }
        `}</style>
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
            <li>
              <a 
                href="https://on-path-books-s3.s3.eu-north-1.amazonaws.com/GZyryanov+Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-accent border border-accent px-2 py-1 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-accent hover:text-white active:scale-95 animate-pulse-border"
                style={{
                  animation: 'none',
                }}
                onMouseEnter={(e) => e.currentTarget.style.animation = 'pulse-border 1.5s infinite'}
                onMouseLeave={(e) => e.currentTarget.style.animation = 'none'}
              >
                Download PDF Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-5xl w-full mx-auto px-4 md:px-6 py-6 md:py-8 bg-white shadow-md my-4 md:my-8">
        {/* Profile Section */}
        <section className="mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Photo Container */}
          <div className="w-36 h-36 md:w-40 md:h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGERWXsh1We8g/profile-displayphoto-shrink_200_200/B4DZNoE.ahHgAY-/0/1732617955450?e=1752105600&v=beta&t=Nxs0tEyAeCA5rFG5AcDIo25xI48-FWtVdZtbYA3hc0s"
              alt="George Zyryanov"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Content Container - Strictly Aligned */}
          <div className="w-full text-center md:text-left md:pt-2">
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">George Zyryanov</h1>
            
            {/* Title */}
            <h2 className="text-xl text-gray-600 mb-4">Senior AQA / QA Engineer</h2>
            
            {/* Contact Info - All aligned on same edge */}
            <div className="flex flex-row items-center justify-center md:justify-start space-x-4">
              <a 
                href="https://www.linkedin.com/in/george-zyryanov/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-accent hover:text-accent-dark"
              >
                <FaLinkedin size={18} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              
              <span className="text-gray-300">|</span>
              
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt size={18} className="mr-2" />
                <span>Poland, Warsaw</span>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section id="summary" className="mb-10 md:mb-16 scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 pb-2 border-b border-gray-200">Hi! I'm George</h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          <span className="font-bold">Automated and Manual Software Quality Assurance</span> expert with 6 years of production experience in cybersecurity, ecommerce and banking domains. A data-driven professional who specializes in high quality standards, test planning, bug investigation & mitigation. Skilled in CI/CD, containerization, and cross-functional communication.
          </p>
          
          {/* Added Functional Expertise section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-primary mb-3">FUNCTIONAL EXPERTISE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
              <div className="md:pr-8">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">API & Web Test Automation:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">CI/CD & Containerization:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">BDD & Agile Testing:</span>
                  </li>
                </ul>
              </div>
              <div className="md:pl-8">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">Quality & Process Lead:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">Team & Stakeholder Comms:</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-900 mr-2">●</span>
                    <span className="font-bold">Test Strategy & Docs:</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Experience */}
        <section id="experience" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">FUNCTIONAL EXPERTISE DEMONSTRATED</h2>
          
          <div className="space-y-12">
            {/* Orca Security - Both positions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Manager position */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">Engineering Manager AQA / QA</h3>
                  <div className="mt-1 text-sm">
                    <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                      Orca Security
                      <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                    <span className="text-xs text-gray-600 italic ml-2">
                      A cloud cybersecurity firm with approximately ~500 employees and a valuation of ~$2 billion. Notable partners include Amazon Web Services, Microsoft Azure, and Google Cloud.
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Nov 2021 - Mar 2024</span>
              </div>
              <ul className="list-none list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">API & Web Test Automation:</span> Uses JavaScript, Node.js (<a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Playwright</a>, <a href="https://webdriver.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">WebdriverIO</a>) for scalable test suites. E.g. Maintained 500+ parallel tests on <a href="https://github.com/features/actions" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHub Actions</a> (<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Docker</a>), cutting regression ~10x. Added REST/GraphQL coverage (schema validation, boundary checks) to catch defects early. Crafts cross-browser (Chrome, Firefox, Safari) and API-level tests (Python) for stable releases.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">CI/CD & Containerization:</span> Builds automatically triggered pipelines with tests. E.g. Configured 5 runners (2 threads each) for 10 concurrent tests, speeding CI drastically. Adds site speed monitoring (<a href="https://www.site24x7.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Site24x7</a>) and <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Slack</a> bot alerts for failures/performance dips.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Team & Stakeholder Comms:</span> Bridges DevOps, QA, and product owners for better resource allocation. E.g. Mentored 3 manual QA and 2 automation QAs via mock scenarios for shifting priorities. Led "Quality Assurance How To" sessions, earning trust from front-end teams and C-levels.
                  </div>
                </li>
              </ul>

              {/* Senior position */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-primary">Senior AQA Engineer / Senior QA (Remote)</h3>
                    <div className="mt-1 text-sm">
                      <a href="https://orca.security" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                        Orca Security
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                  </div>
                  <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">Apr 2020 - Oct 2021</span>
                </div>
                <ul className="list-none list-outside text-gray-700 space-y-2 ml-8 mt-3">
                  <li className="pl-1 flex">
                    <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                    <div>
                      <span className="font-bold">Quality & Process Lead:</span> Oversees QA since 2020, driving continuous improvement and robust testing. Analyzes bug patterns to speed releases by 25% without sacrificing quality. Organizes workshops to foster a quality-first culture.
                    </div>
                  </li>
                  <li className="pl-1 flex">
                    <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                    <div>
                      <span className="font-bold">BDD & Agile Testing:</span> Implements Behavior-Driven Development (<a href="https://cucumber.io/docs/gherkin/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Gherkin</a>) for accessible tests and agile sprints. E.g. Shifted multiple teams to BDD suites, enabling quick adoption despite changing priorities. Aligns dev teams on ROI-focused coverage.
                    </div>
                  </li>
                  <li className="pl-1 flex">
                    <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                    <div>
                      <span className="font-bold">Test Strategy & Docs:</span> Creates test plans/checklists (<a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Jira</a>, <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Confluence</a>, <a href="https://qase.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">qase.io</a>) guiding manual and automated QA. E.g. Documented 1000+ test cases and environment-readiness steps. Employs exploratory, boundary, form validation, auth bypass, DB stress, and network analysis. Drafts QA/AQA frameworks clarifying roles during onboarding and integration.
                    </div>
                  </li>
                </ul>
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
                        <li className="pl-1">Verified and approved over 25+ new client accounts before handover.</li>
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

            {/* Pace Forwarding */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary">AQA – QA / Software Engineer</h3>
                  <div className="mt-1 text-sm">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary hover:text-accent inline-flex items-center">
                      Pace Forwarding
                      <FaExternalLinkAlt className="ml-1 text-xs" />
                    </a>
                  </div>
                </div>
                <span className="text-sm text-gray-600 mt-2 md:mt-0 md:text-right whitespace-nowrap">June 2024 - Feb 2025</span>
              </div>
              <ul className="list-none list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Full-Stack Development:</span> Built a Next.js/TypeScript web app with a MySQL backend on AWS (RDS, S3, Amplify), managing everything from schema design to deployment. Developed Playwright E2E and API auto tests.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">API Integration & DevOps:</span> Integrated APIs to pull in external data feeds for logistics management. Set up CI/CD with GitHub and AWS Amplify for one-click deployments, and handled all server configuration myself.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Quality Assurance:</span> Ran manual and Postman-based API tests on Chrome each iteration, catching and fixing UI/UX edge cases.
                  </div>
                </li>
              </ul>

              <div className="mt-4 flex justify-center">
                <button 
                  onClick={() => setShowPaceTech(!showPaceTech)}
                  className="flex items-center text-sm font-medium text-accent hover:text-accent-dark focus:outline-none transition-colors"
                >
                  <span>Technologies Used</span>
                  {showPaceTech ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>
              </div>
              
              {showPaceTech && (
                <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200 animate-fadeIn">
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Frontend & Development</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-nextjs-original mr-1"></i> Next.js
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-typescript-plain mr-1"></i> TypeScript
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                        <i className="devicon-playwright-plain mr-1"></i> Playwright
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
                        <span className="mr-1">🔧</span> RDS
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> S3
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Amplify
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Database & APIs</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        <i className="devicon-mysql-plain mr-1"></i> MySQL
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Logistics API
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">
                        <span className="mr-1">🔧</span> Postman
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Version Control & CI/CD</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                        <i className="devicon-github-original mr-1"></i> Git/GitHub
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
              <ul className="list-none list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">API & Web Test Automation:</span> Developed automated scripts for web apps and microservices using JavaScript, Node.js, and a custom Webdriver.io framework. E.g. Integrated <a href="https://pact.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">PACT</a> tests for service-level validation, ran E2E and performance tests with <a href="https://jmeter.apache.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">JMeter</a>, and introduced a new UI testing tool to boost speed and consistency.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">CI/CD & Containerization:</span> Employed <a href="https://about.gitlab.com/topics/ci-cd/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitLab pipelines</a> for continuous integration. E.g. Ran both Client-Side and Server-Side tests, ensuring stable test automation workflows across SCRUM teams.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Quality & Process Lead:</span> Documented test plans and suites (Jira/Confluence), advocated improved QA processes, and delivered "How To" guides. E.g. Pitched new testing approaches at QA department meetings, aligned priorities with cross-functional squads, and consistently gathered feedback from developers for iterative improvements.
                  </div>
                </li>
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
                  <h3 className="text-lg md:text-xl font-semibold text-primary">QA Automation Engineer</h3>
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
              <ul className="list-none list-outside text-gray-700 space-y-2 ml-8 mt-3">
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Quality & Process Lead:</span> Led a high-stakes, month-long automation project onsite at one of the largest French banks in Singapore, defining clear quality benchmarks and ensuring on-time deliveries under strict compliance.
                  </div>
                </li>
                <li className="pl-1 flex">
                  <span className="text-gray-900 mr-2 flex-shrink-0">●</span>
                  <div>
                    <span className="font-bold">Team & Stakeholder Comms:</span> Communicated progress and challenges to stakeholders proactively, gathering buy-in for technical decisions and facilitating open collaboration across departments.
                  </div>
                </li>
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
            {/* University Education */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-primary">Bachelor in Global Economy</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  <a href="https://bsu.by/en/rankings" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:text-accent mr-2 inline-flex items-center">
                    Belarusian State University
                    <FaExternalLinkAlt className="ml-1 text-xs" />
                  </a>
                  <span className="text-sm text-gray-600 md:text-right whitespace-nowrap">Belarus, Minsk</span>
                </div>
              </div>
            </div>

            {/* Additional Professional Development */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4">Additional Professional Development</h3>
              
              <div className="space-y-6">


                {/* Playwright with Python */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700">Playwright Python and Pytest for Web Automation Testing</span>
                      <a href="https://coursera.org/share/7d7c61b7bb5b4b46f1cb25e42ba341f9" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center ml-1">
                        (Certificate)
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                      <span className="mx-2">–</span>
                      <a href="https://www.coursera.org/learn/packt-playwright-python-and-pytest-for-web-automation-testing-la7nu" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center">
                        Coursera
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                    <span className="text-sm text-gray-600">2025</span>
                  </div>
                </div>

                {/* Project Management Bootcamp */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700">Project Management Bootcamp </span>
                      <a href="https://lexfriedmanbooks-s3.s3.eu-north-1.amazonaws.com/PMTraining-COC_George-Zyryanov_4-5-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center ml-1">
                        (Certificate)
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                      <span className="mx-2">–</span>
                      <a href="https://www.pmtraining.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center">
                        PM Training
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                    <span className="text-sm text-gray-600">2024</span>
                  </div>
                </div>

                {/* Web Application Development */}
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700">Web Application Development with JavaScript </span>
                      <a href="https://www.linkedin.com/in/george-zyryanov/details/education/1635466600425/single-media-viewer/?profileId=ACoAABr6MG4B1dRi2X3TTDxh5cIXK62r0k1-ZXk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center ml-1">
                        (Certificate)
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                      <span className="mx-2">–</span>
                      <a href="https://www.it-academy.by/course/front-end-developer/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-flex items-center">
                        IT Academy
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                    <span className="text-sm text-gray-600">2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section id="languages" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b border-gray-200">Language Competencies</h2>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
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