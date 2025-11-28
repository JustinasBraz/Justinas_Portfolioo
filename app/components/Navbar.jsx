'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Check initial theme
    const darkMode = localStorage.getItem('darkMode') === 'true' || 
                     (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for navbar
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offset = 80 // Navbar height
          const targetPosition = targetElement.offsetTop - offset
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
          setMobileMenuOpen(false)
        }
      }
    }
    
    // Add click handlers to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md rounded-b-lg'
          : 'bg-transparent'
      }`}
      style={{ borderRadius: scrolled ? '0 0 8px 8px' : '0' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Justinas Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex ml-auto mr-4">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <a 
                  href="#home" 
                  className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                    activeSection === 'home' 
                      ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#about" 
                  className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                    activeSection === 'about' 
                      ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  About
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#skills" 
                  className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                    activeSection === 'skills' 
                      ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  Skills
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#projects" 
                  className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                    activeSection === 'projects' 
                      ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  Projects
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a 
                  href="#contact" 
                  className={`px-4 py-2 rounded-full text-lg font-medium transition-colors ${
                    activeSection === 'contact' 
                      ? 'text-primary bg-primary/10 dark:bg-primary/20' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-white hover:backdrop-blur-sm'
                  }`}
                >
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-white rounded-full p-2 hover:bg-white/20 dark:hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-300"
              >
                <Github className="h-7 w-7" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-white rounded-full p-2 hover:bg-white/20 dark:hover:bg-white/20 hover:backdrop-blur-sm transition-all duration-300"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="text-gray-700 dark:text-gray-300"
            >
              {isDark ? (
                <Sun className="h-7 w-7" />
              ) : (
                <Moon className="h-7 w-7" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mobile-menu-items absolute top-full left-0 w-full bg-black/80 dark:bg-black/95 backdrop-blur-sm opacity-95 py-12 px-8 text-center shadow-lg border-t border-white/10 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-6">
            <a
              href="#home"
              className="text-white text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-white text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex justify-center space-x-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

