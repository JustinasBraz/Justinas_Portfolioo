'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkillCard from './components/SkillCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  React as ReactIcon, 
  Database, 
  GitBranch,
  Terminal,
  Github
} from 'lucide-react'
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs } from 'react-icons/si'

export default function Home() {
  const skills = [
    { icon: SiHtml5, label: 'HTML5' },
    { icon: SiCss3, label: 'CSS3' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiReact, label: 'React' },
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: Database, label: 'DataBase' },
    { icon: GitBranch, label: 'Git' },
    { icon: Github, label: 'Github' },
    { icon: Terminal, label: 'Terminal' },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero relative overflow-hidden">
        {/* Futuristic Background with Various Patterns */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/60"></div>
          
          {/* Geometric grid pattern */}
          <div className="absolute inset-0 hero-grid-pattern opacity-20"></div>
          
          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 hero-hexagon-pattern opacity-15"></div>
          
          {/* Circuit board pattern */}
          <div className="absolute inset-0 hero-circuit-pattern opacity-10"></div>
          
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/30 to-primary/60"></div>
          
          {/* Animated gradient orbs with different patterns - only primary colors */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/25 rounded-full blur-3xl animate-pulse-slow hero-orb-1"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/35 rounded-full blur-3xl animate-pulse-slow hero-orb-2" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl animate-pulse-slow hero-orb-3" style={{ animationDelay: '2s' }}></div>
          
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 hero-diagonal-lines opacity-10"></div>
          
          {/* Dot matrix pattern */}
          <div className="absolute inset-0 hero-dot-matrix opacity-15"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-flex">
            {/* Left Column - Text */}
            <div className="flex-1 animate-fade-in relative z-10">
              <h1 className="relative">
                <span className="relative z-10">Junior Full Stack Developer</span>
                <span className="absolute -z-10 top-0 left-0 text-primary/20 blur-sm text-5xl md:text-6xl" style={{ fontSize: '3.5rem' }}>
                  Junior Full Stack Developer
                </span>
              </h1>
              <p className="relative z-10">
                I am a full-stack developer based in Birmingham.
                My passion is to create modern and functional web applications from design to implementation.
                I specialize in HTML, CSS, JavaScript, React, and Node.js.
              </p>
              <div className="pt-4 relative z-10">
                <a href="#contact">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group rounded-md"
                  >
                    <span className="relative z-10">Get in Touch</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Column - Image with Futuristic Effects */}
            <div className="hero-image-wrapper relative z-10">
              <div className="relative w-full aspect-square overflow-visible hero-image">
                {/* Glow effect behind image - only primary colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-primary/20 rounded-[3.5rem] blur-2xl scale-110 -z-10 animate-pulse-slow"></div>
                
                {/* Image container with modern effects */}
                <div className="relative w-full h-full rounded-[3.5rem] overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/portrait-me.jpg"
                    alt="Justinas Portrait"
                    fill
                    className="object-cover scale-105 transition-transform duration-700 hover:scale-100"
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  
                  {/* Gradient overlay for modern look - only primary colors */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-primary/30"></div>
                  
                  {/* Animated border glow - only primary colors */}
                  <div className="absolute inset-0 rounded-[3.5rem] border-2 border-primary/50 animate-pulse"></div>
                </div>
                
                {/* Floating particles effect - only primary colors */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/40 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Frame Decoration */}
        <div className="frame-decoration relative z-10">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,0 Q600,100 1200,0 L1200,100 L0,100 Z" fill="white" className="dark:fill-gray-900" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-brand-dark dark:text-white">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-brand-dark dark:text-white mb-4">About Me</h2>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Hi, my name is Justinas Brazauskas. I'm a skilled full stack developer with experience in building
                e-commerce platforms,
                web applications using cutting-edge technologies like the MERN stack, HTML, CSS, JavaScript, React,
                Node.js, Express, and MongoDB.
                I specialize in creating responsive and user-friendly interfaces to ensure an exceptional user
                experience. Let's create something amazing together!
              </p>
            </div>
            <div className="relative h-96 w-full max-w-[500px] rounded-[3.5rem] overflow-hidden shadow-xl">
              <Image
                src="/about-me.jpg"
                alt="About Me"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Author Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full max-w-[500px] rounded-[3.5rem] overflow-hidden shadow-xl order-2 md:order-1">
              <Image
                src="/author-me.jpg"
                alt="Author"
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h3 className="text-3xl font-bold text-brand-dark dark:text-white">
                Author Information
              </h3>
              <div className="w-16 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Besides coding, I have a passion for hiking and swimming. These activities not only keep me
                energized and balanced but also inspire my creativity and enhance my overall personality. I truly
                believe that engaging in such activities is essential for a productive and fulfilling life.
                I am excited to bring my diverse set of skills and interests to the table and collaborate on
                exciting projects.
                Together, we can discover fresh possibilities and achieve remarkable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark dark:text-white">
              Skills & Tools
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-brand-dark dark:text-gray-300">
              I use a variety of skills, tools, and technologies to bring your products to life!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                label={skill.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark dark:text-white">
              Projects
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-brand-dark dark:text-gray-300">
              Check out some of the things I've created!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col text-center">
              <div className="relative w-full h-[350px] mb-4 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/tutor-web.png"
                  alt="Tutor Responsive Web Design"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-800"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark dark:text-white hover:text-primary transition-colors duration-500">
                Tutor Responsive Web Design
              </h3>
              <p className="text-base mb-8 leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                I developed this tutor application with a fully responsive design using HTML5 and CSS3,
                incorporating Flexbox and Grid for layout. Additionally, I implemented some JavaScript for the
                hamburger menu and smooth scrolling in the navbar.
              </p>
              <a 
                href="https://tutorwebsitecreative.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-block"
              >
                <Button className="bg-brand-dark hover:bg-primary text-white border border-transparent hover:border-white transition-all duration-500">
                  View Project
                </Button>
              </a>
            </div>
            <div className="bg-light dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col text-center">
              <div className="relative w-full h-[350px] mb-4 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/proshop.png"
                  alt="Welcome To ProShop"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-800"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark dark:text-white hover:text-primary transition-colors duration-500">
                Welcome To ProShop
              </h3>
              <p className="text-base mb-8 leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                An e-commerce website was developed using the MERN stack, with React
                used on the frontend. Users
                can browse, search, add to cart, create orders, and pay via PayPal. The website has an admin
                panel for managing products and users. The backend was developed using Express, Mongoose, and
                Multer.
              </p>
              <a 
                href="https://proshop-1912.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-block"
              >
                <Button className="bg-brand-dark hover:bg-primary text-white border border-transparent hover:border-white transition-all duration-500">
                  View Project
                </Button>
              </a>
            </div>
            <div className="bg-light dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col text-center">
              <div className="relative w-full h-[350px] mb-4 mt-4 rounded-lg overflow-hidden">
                <Image
                  src="/app.png"
                  alt="Tracalorie App"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-800"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-dark dark:text-white hover:text-primary transition-colors duration-500">
                Tracalorie App
              </h3>
              <p className="text-base mb-8 leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                This is the Webpack version of the Tracalorie app from Modern JS. It is
                an app for tracking
                calories, meals, and workouts.
              </p>
              <a 
                href="https://tracalory.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-block"
              >
                <Button className="bg-brand-dark hover:bg-primary text-white border border-transparent hover:border-white transition-all duration-500">
                  View Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-[750px] mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark dark:text-white">
              Contact Me
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about working together on exciting projects and discovering fresh possibilities. I welcome
              you to reach out to me via email or
              social media to explore exciting opportunities and spark innovative ideas
            </p>
          </div>
          <form name="contact" className="space-y-6" onSubmit={(e) => {
            e.preventDefault()
            alert('Thank you for your message! I will get back to you soon.')
            e.target.reset()
          }}>
            <div>
              <Input
                name="name"
                type="text"
                required
                placeholder="Name"
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <Textarea
                name="message"
                required
                placeholder="Message"
                rows={8}
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 min-h-[200px] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-brand-dark hover:bg-primary text-white border border-transparent hover:border-white transition-all duration-500 py-6 text-lg font-bold rounded-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}

