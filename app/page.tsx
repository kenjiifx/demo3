import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Get Fit with PowerGym
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Personal training and group classes for all levels.
              </p>
              <p className="text-lg mb-8 text-blue-100">
                At PowerGym, we believe that fitness is a journey, not a destination. Our philosophy centers around empowering individuals of all fitness levels to achieve their personal best. We combine cutting-edge equipment, expert trainers, and a supportive community to create an environment where every workout counts and every member matters.
              </p>
              <Link href="/programs" className="btn-primary inline-block">
                View Programs
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                alt="Gym workout"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose PowerGym?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Trainers</h3>
              <p className="text-gray-600">
                Our certified trainers bring years of experience and personalized attention to help you reach your goals.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Join a welcoming community of fitness enthusiasts who motivate and inspire each other every day.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our programs are backed by science and proven to deliver real, sustainable results for our members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-orange flex items-center justify-center text-2xl font-bold mr-4">
                  SM
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Sarah Martinez</h3>
                  <p className="text-blue-200">Member for 2 years</p>
                </div>
              </div>
              <p className="text-lg italic text-blue-100">
                "PowerGym transformed my life! I lost 40 pounds and gained so much confidence. The trainers are amazing and the community is so supportive. I never thought I could enjoy working out, but now I can't imagine my life without it!"
              </p>
              <div className="mt-4 flex text-primary-orange">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-orange flex items-center justify-center text-2xl font-bold mr-4">
                  MJ
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Michael Johnson</h3>
                  <p className="text-blue-200">Member for 1 year</p>
                </div>
              </div>
              <p className="text-lg italic text-blue-100">
                "After joining PowerGym, I've achieved fitness goals I never thought possible. The personal training program helped me build strength and endurance I didn't know I had. The facilities are top-notch and the staff genuinely cares about your success."
              </p>
              <div className="mt-4 flex text-primary-orange">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join PowerGym today and get your first week free!
          </p>
          <Link href="/contact" className="btn-secondary inline-block">
            Sign up for a free trial!
          </Link>
        </div>
      </section>
    </div>
  )
}