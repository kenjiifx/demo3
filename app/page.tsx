import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section - Full Screen Creative Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-gray-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Creative Typography */}
            <div className="space-y-8 text-white">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
                <span className="text-sm font-semibold">Transform Your Life Today</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1]">
                <span className="block">Get Fit</span>
                <span className="block bg-gradient-to-r from-primary-orange to-orange-300 bg-clip-text text-transparent">
                  with PowerGym
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-bold text-blue-100 leading-relaxed">
                Personal training and group classes for all levels.
              </p>
              
              <p className="text-lg md:text-xl text-blue-200 leading-relaxed max-w-xl">
                At PowerGym, we believe that fitness is a journey, not a destination. Our philosophy centers around empowering individuals of all fitness levels to achieve their personal best. We combine cutting-edge equipment, expert trainers, and a supportive community to create an environment where every workout counts and every member matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/programs" className="btn-primary text-center">
                  <span>View Programs</span>
                </Link>
                <Link href="/contact" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all duration-300 text-center">
                  Free Trial
                </Link>
              </div>
            </div>
            
            {/* Right Image - Creative Overlap */}
            <div className="relative lg:h-[600px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/20 to-primary-blue/20 rounded-3xl transform rotate-6 blur-2xl" />
              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                  alt="Gym workout"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl hidden lg:block">
                <div className="text-4xl font-black text-primary-orange mb-1">10K+</div>
                <div className="text-sm text-gray-600 font-semibold">Active Members</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Features Section - Asymmetrical Grid */}
      <section className="section-padding bg-white relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary-blue to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-orange/10 rounded-full mb-6">
              <span className="text-primary-orange font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Elevate Your</span> Fitness
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium facilities and expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Expert Trainers',
                description: 'Our certified trainers bring years of experience and personalized attention to help you reach your goals.',
                gradient: 'from-primary-orange to-orange-400'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Community Support',
                description: 'Join a welcoming community of fitness enthusiasts who motivate and inspire each other every day.',
                gradient: 'from-primary-blue to-blue-400'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Proven Results',
                description: 'Our programs are backed by science and proven to deliver real, sustainable results for our members.',
                gradient: 'from-primary-orange to-orange-400'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="premium-card p-8 group hover:scale-105"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform duration-500 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Creative Layout */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-900 via-primary-blue-dark to-primary-blue">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Real Results, <span className="text-primary-orange">Real People</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                name: 'Sarah Martinez',
                initials: 'SM',
                tenure: 'Member for 2 years',
                text: "PowerGym transformed my life! I lost 40 pounds and gained so much confidence. The trainers are amazing and the community is so supportive. I never thought I could enjoy working out, but now I can't imagine my life without it!",
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
              },
              {
                name: 'Michael Johnson',
                initials: 'MJ',
                tenure: 'Member for 1 year',
                text: "After joining PowerGym, I've achieved fitness goals I never thought possible. The personal training program helped me build strength and endurance I didn't know I had. The facilities are top-notch and the staff genuinely cares about your success.",
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 lg:p-10 hover:scale-105 transition-transform duration-500"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-primary-orange/50">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{testimonial.name}</h3>
                    <p className="text-blue-200 font-semibold">{testimonial.tenure}</p>
                  </div>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-r from-primary-orange via-orange-500 to-primary-orange-light">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          <p className="text-2xl md:text-3xl mb-10 text-orange-50 font-bold max-w-3xl mx-auto">
            Join PowerGym today and get your first week free!
          </p>
          <Link href="/contact" className="btn-secondary inline-block text-lg">
            <span>Sign up for a free trial!</span>
          </Link>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10K+', label: 'Active Members' },
              { number: '50+', label: 'Expert Trainers' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-orange-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}