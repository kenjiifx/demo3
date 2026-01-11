'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <span className="text-sm font-bold uppercase tracking-wider">Get in Touch</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block">Start Your</span>
            <span className="block bg-gradient-to-r from-primary-orange to-orange-300 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 font-bold max-w-3xl mx-auto">
            Have questions? Want to schedule a tour? We're here to help you start your fitness journey!
          </p>
        </div>
      </section>

      {/* Contact Section - Creative Split Layout */}
      <section className="section-padding bg-white relative -mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form - Premium Design */}
            <div className="premium-card p-10 lg:p-12" id="form">
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-primary-orange/10 rounded-full mb-4">
                  <span className="text-primary-orange font-bold text-sm uppercase tracking-wider">Send Message</span>
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-2">Let's Connect</h2>
                <p className="text-lg text-gray-600">Fill out the form and we'll get back to you within 24 hours.</p>
              </div>
              
              {submitted && (
                <div className="mb-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold">Thank you! We'll get back to you soon.</span>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all font-semibold text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all font-semibold text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-black text-gray-900 mb-3 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-orange/20 focus:border-primary-orange outline-none transition-all resize-none font-semibold text-gray-900"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary text-lg"
                >
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info - Premium Cards */}
            <div className="space-y-8">
              <div className="premium-card p-10">
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full mb-4">
                    <span className="text-primary-blue font-bold text-sm uppercase tracking-wider">Contact Info</span>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-2">Get in Touch</h2>
                </div>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      title: 'Location',
                      content: '123 Fitness Street\nCity, State 12345\nUnited States',
                      gradient: 'from-primary-blue to-primary-blue-dark'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      ),
                      title: 'Phone',
                      content: '(555) 123-4567',
                      link: 'tel:+15551234567',
                      gradient: 'from-primary-orange to-primary-orange-light'
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      ),
                      title: 'Email',
                      content: 'info@powergym.com',
                      link: 'mailto:info@powergym.com',
                      gradient: 'from-primary-blue to-primary-blue-dark'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white flex-shrink-0 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-lg text-gray-600 hover:text-primary-orange transition-colors font-semibold block"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-600 font-semibold whitespace-pre-line">
                            {item.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="premium-card p-10">
                <h2 className="text-3xl font-black text-gray-900 mb-6">Hours of Operation</h2>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', time: '5:00 AM - 11:00 PM' },
                    { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
                    { day: 'Sunday', time: '7:00 AM - 9:00 PM' }
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="font-black text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600 font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                  <div className="mt-6 pt-6 border-t-2 border-gray-200">
                    <p className="text-sm text-gray-500 font-semibold">
                      *Premium members have 24/7 access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-r from-primary-orange via-orange-500 to-primary-orange-light">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">Ready to Transform Your Life?</h2>
          <p className="text-2xl md:text-3xl mb-10 text-orange-50 font-bold max-w-3xl mx-auto">
            Start your fitness journey today with a free trial. No credit card required!
          </p>
          <a href="#form" className="btn-secondary inline-block text-lg">
            <span>Sign up for a free trial!</span>
          </a>
        </div>
      </section>

      {/* Map Section - Premium */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
              <span className="text-primary-blue font-bold text-sm uppercase tracking-wider">Find Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="gradient-text">Visit</span> Our Gym
            </h2>
          </div>
          
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=1200&q=80"
              alt="PowerGym location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-12">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl text-center max-w-md mx-4">
                <h3 className="text-3xl font-black text-gray-900 mb-3">Visit Our Gym</h3>
                <p className="text-lg text-gray-600 mb-6 font-semibold">123 Fitness Street, City, State 12345</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}