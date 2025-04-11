"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Twitter, GraduationCap, Award, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Function to handle smooth scrolling when clicking on navigation links
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for header height
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Offset for header height
              behavior: 'smooth'
            });
            // Update active section when clicking a link
            setActiveSection(targetId);
          }
        }
      });
    });

    // Function to check which section is currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Adding offset to detect the section earlier

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (
          sectionId &&
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Call it once on mount to set initial active section
    handleScroll();

    // Cleanup event listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for header height
                behavior: 'smooth'
              });
            }
          }
        });
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Helper function to determine if a section is active
  const isActiveSection = (sectionId: string): boolean => {
    return activeSection === sectionId;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/80 border-b">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Aditya Andar Rahim</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className={`${isActiveSection('about') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              About
            </a>
            <a
              href="#experience"
              className={`${isActiveSection('experience') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`${isActiveSection('education') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Education
            </a>
            <a
              href="#projects"
              className={`${isActiveSection('projects') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Projects
            </a>
            <a
              href="#skills"
              className={`${isActiveSection('skills') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Skills
            </a>
            <a
              href="#contact"
              className={`${isActiveSection('contact') ? 'text-gray-900 font-medium' : 'text-gray-600'} hover:text-gray-900 transition-colors`}
            >
              Contact
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center max-w-4xl mx-auto">
              <div className="w-full md:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Aditya Andar Rahim</h1>
                <p className="text-xl text-gray-600 mb-1">@adityandar</p>
                <p className="text-xl text-gray-600 mb-8">
                  Flutter Mobile Engineer building exceptional mobile experiences with a focus on performance and user
                  satisfaction.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Flutter</Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Dart</Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">BLoC</Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Clean Architecture</Badge>
                  <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">Firebase</Badge>
                </div>
                <div className="flex gap-4">
                  <Button onClick={() => window.open('mailto:adityandar@gmail.com', '_blank')}>
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative w-64 h-80 rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src="/prof_pic.jpg"
                    alt="Aditya Andar Rahim"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                    <div className="flex justify-center space-x-4">
                      <a href="https://github.com/adityandar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/adityandar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="mailto:adityandar@gmail.com" target="_blank" className="text-white hover:text-gray-200 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <p className="text-gray-700 mb-4">
                  As a technology enthusiast with a Bachelor's degree in Informatics and two years of experience as a
                  Flutter Mobile Engineer, I strive for continuous improvement and am deeply committed to delivering
                  excellence.
                </p>
                <p className="text-gray-700 mb-4">
                  My professional journey has taught me the importance of seamless collaboration with product and design
                  teams, resulting in remarkable features that elevate user experiences.
                </p>
                <p className="text-gray-700">
                  With a strong focus on honing my coding skills and a collaborative spirit, I am dedicated to creating
                  impactful digital experiences that drive meaningful change.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>Palangka Raya, Indonesia</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-2" />
                    <span>adityandar@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section - Compact Timeline */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-800"></div>
                <div className="mb-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold">Flutter Mobile Engineer</h3>
                    <div className="text-sm text-gray-500">May 2022 - Present</div>
                  </div>
                  <div className="text-gray-600 mb-1">DEALLS JOBS • Jakarta, ID (Remote)</div>
                </div>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1">
                  <li>
                    Architected and shipped 4+ features while contributing to 7+ additional features, improving app
                    performance and user experience.
                  </li>
                  <li>
                    Implemented REST API caching, reducing redundant requests and significantly boosting data retrieval
                    speed.
                  </li>
                  <li>
                    Designed and managed feature flag implementations for controlled rollouts and A/B testing, enabling
                    seamless deployments and risk mitigation across 5+ features.
                  </li>
                  <li>
                    Authored and maintained 7+ technical documents covering development, features, and system
                    architecture, improving team efficiency and knowledge sharing.
                  </li>
                  <li>
                    Engineered complex and responsive UIs, ensuring seamless adaptability across devices for an optimal
                    user experience.
                  </li>
                  <li>
                    Conducted thorough code reviews, providing valuable feedback to teammates to maintain code quality
                    and foster a culture of continuous improvement.
                  </li>
                </ul>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-800"></div>
                <div className="mb-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold">Flutter Mobile Engineer - Internship</h3>
                    <div className="text-sm text-gray-500">Feb 2022 – May 2022</div>
                  </div>
                  <div className="text-gray-600 mb-1">SEJUTACITA • Jakarta, ID (Remote)</div>
                </div>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1">
                  <li>
                    Successfully implemented features, ensuring optimal functionality and user experience through
                    thorough testing.
                  </li>
                  <li>
                    Gained practical experience in Flutter development, expanding skills in building efficient and
                    responsive user interfaces.
                  </li>
                  <li>
                    Assisted in bug fixing and troubleshooting, actively participating in issues resolving to enhance
                    overall app performance.
                  </li>
                  <li>
                    Acquired hands-on experience in using version control systems like Git for efficient code management
                    and collaboration.
                  </li>
                </ul>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gray-800"></div>
                <div className="mb-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-xl font-bold">Project Officer - Student Activity / Events</h3>
                    <div className="text-sm text-gray-500">Jan 2021 – Sep 2021</div>
                  </div>
                  <div className="text-gray-600 mb-1">JAVA BUSINESS COMPETITION 2021 • Bandung, ID (Remote)</div>
                </div>
                <ul className="list-disc list-outside ml-5 text-gray-700 space-y-1">
                  <li>
                    Efficiently led and coordinated a committee of 88 members for the Java Business Competition 2021.
                  </li>
                  <li>
                    Demonstrated leadership by initiating project concepts, planning timelines, collaborating with core
                    board members.
                  </li>
                  <li>Managed remote teams with seamless communication and coordination across divisions.</li>
                  <li>Oversaw project execution, maintaining high-quality standards and efficient task delegation.</li>
                  <li>
                    Hosted three competitions engaging 80+ teams and an international webinar with 1600+ registrants.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section - Redesigned */}
        <section id="education" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gray-800 text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                    <GraduationCap size={48} className="mb-3" />
                    <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
                    <p className="text-gray-300 mt-2">Informatics</p>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">TELKOM UNIVERSITY</h4>
                        <p className="text-gray-600">Bandung, Indonesia</p>
                      </div>
                    </div>
                    <div className="space-y-3 ml-16">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600">2019 - 2023</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-gray-500 mr-2" />
                        <span className="text-gray-600">
                          GPA: <span className="font-semibold">3.86/4.0</span>
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        Completed a comprehensive computer science program with a focus on software development and
                        programming fundamentals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mechanic Calculator Project */}
              <Card className="overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image
                    src="/mc.png"
                    alt="Mechanic Calculator App"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.adityandar.mechanic_calculator&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Mechanic Calculator</h3>
                        <p className="text-gray-500 text-sm">Mobile Application</p>
                      </div>
                      <span className="text-gray-600 hover:text-gray-900">
                        <ExternalLink size={20} />
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      A specialized calculator application for mechanics, providing quick access to common automotive
                      calculations and conversions. Used for a gaming community (Jogjagamers.org)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Flutter</Badge>
                      <Badge variant="outline">Dart</Badge>
                      <Badge variant="outline">Play Store</Badge>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* BASAKU Project */}
              <Card className="overflow-hidden">
                <div className="relative h-56 w-full">
                  <Image src="/basaku.png" alt="BASAKU App" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">BASAKU</h3>
                      <p className="text-gray-500 text-sm">Mobile Application (Freelance)</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Developed a waste bank mobile application from scratch using Dart and Flutter, with Provider as the
                    state management solution. Collaborated closely with the backend team for effective data management
                    and integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Flutter</Badge>
                    <Badge variant="outline">Dart</Badge>
                    <Badge variant="outline">Provider</Badge>
                    <Badge variant="outline">HTTP</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack & Tools</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Skill Category 1 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Languages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Dart</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Golang</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Javascript</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>PHP</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 2 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Frameworks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Flutter</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Laravel</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Nest JS</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Echo</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 3 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Principle</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Clean Architecture</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>OOP</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>SOLID</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>BLoC</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 4 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Firebase</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>CI/CD</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>GitHub</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Codemagic</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Supabase</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 5 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Project Management</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Jira</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Confluence</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Lark</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 6 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">API & Networking</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>REST</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>gRPC</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Swagger</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Postman</span>
                    </li>
                  </ul>
                </div>

                {/* Skill Category 7 */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">Technical Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Feature Flag</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>API Caching</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Maps</span>
                    </li>
                  </ul>
                </div>

                {/* Currently Learning */}
                <div className="bg-white p-6 rounded-lg border shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-2 py-1 text-yellow-900">
                    LEARNING
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Backend Development</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Golang</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-gray-800 mr-2"></div>
                      <span>Node.js</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Redesigned */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Contact Card - Email */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-gray-600 mb-4">Feel free to reach out anytime</p>
                  <a href="mailto:adityandar@gmail.com" className="text-gray-800 font-medium hover:underline">
                    adityandar@gmail.com
                  </a>
                </div>

                {/* Contact Card - Location */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">Currently based in</p>
                  <p className="text-gray-800 font-medium">Palangka Raya, Indonesia</p>
                  <p className="text-gray-600 text-sm mt-2">(Can relocate)</p>
                </div>

                {/* Contact Card - Social */}
                <div className="bg-white rounded-lg shadow-sm border p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Linkedin className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Social Profiles</h3>
                  <p className="text-gray-600 mb-4">Let's connect online</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/adityandar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href="https://linkedin.com/in/adityandar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                    <a
                      href="https://twitter.com/adityandar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">Interested in working together? Let's discuss your project!</p>
                <Button size="lg" className="px-8" onClick={() => window.open('mailto:adityandar@gmail.com', '_blank')}>
                  <Mail className="mr-2 h-4 w-4" /> Send an Email
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Compact */}
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <h2 className="text-lg font-bold">adityandar</h2>
              <div className="text-gray-500">|</div>
              <p className="text-gray-600">Flutter Mobile Engineer</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
