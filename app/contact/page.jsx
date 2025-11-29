'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Inner Header */}
      <section className="inner-header bg-primary pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative" style={{ height: '250px', paddingTop: '8rem' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Contact Me
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-12 text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm passionate about working together on exciting projects and discovering fresh possibilities. I welcome
            you to reach out to me via email or
            social media to explore exciting opportunities and spark innovative ideas
          </p>
          <form onSubmit={handleSubmit} name="contact" className="space-y-6">
            <div>
              <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div>
              <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={8}
                className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 min-h-[200px]"
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

      {/* Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-brand-dark dark:text-white">
            Office Location
          </h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Birmingham City
          </p>
          <div className="relative w-full pb-[50%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190609.815724154!2d-1.8811741939726283!3d52.49664540740339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham!5e0!3m2!1sen!2suk!4v1738668665446!5m2!1sen!2suk"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark dark:bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl mb-8 font-medium">
            Follow me on social media for updates
          </p>
          <div className="flex justify-center items-center gap-6 mt-8">
            <a
              href="https://github.com/JustinasBraz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-secondary transition-all duration-500"
              aria-label="Follow Me On Github"
            >
              <Github className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/justinas-brazauskas-50004b23b/?originalSubdomain=uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-white hover:text-secondary transition-all duration-500"
              aria-label="Follow Me On LinkedIn"
            >
              <Linkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

