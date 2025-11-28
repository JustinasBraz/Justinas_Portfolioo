'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: null, message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form name="contact" className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          disabled={isSending}
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
          className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          disabled={isSending}
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
          className="w-full text-base py-5 px-4 border border-gray-300 dark:border-gray-600 min-h-[200px] focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          disabled={isSending}
        />
      </div>
      
      {/* Status Message */}
      {status.message && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
          }`}
        >
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSending}
        className="w-full bg-brand-dark hover:bg-primary text-white border border-transparent hover:border-white transition-all duration-500 py-6 text-lg font-bold rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSending ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

