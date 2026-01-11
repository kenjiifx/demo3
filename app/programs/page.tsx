import Image from 'next/image'
import Link from 'next/link'

export default function Programs() {
  const programs = [
    {
      title: 'Personal Training',
      subtitle: 'One-on-One Excellence',
      description: 'Get one-on-one attention from our certified personal trainers who will create a customized workout plan tailored to your specific goals, fitness level, and schedule. Whether you want to lose weight, build muscle, improve athletic performance, or recover from an injury, our trainers will guide you every step of the way.',
      features: [
        'Customized workout plans',
        'Nutrition guidance',
        'Progress tracking',
        'Flexible scheduling',
        'Goal-oriented approach'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80',
      gradient: 'from-primary-blue via-blue-600 to-primary-blue-dark',
      accent: 'primary-blue'
    },
    {
      title: 'Yoga Classes',
      subtitle: 'Mind & Body Harmony',
      description: 'Find your inner strength and flexibility with our diverse yoga classes. From gentle Hatha to dynamic Vinyasa, our experienced instructors will help you improve flexibility, reduce stress, and enhance your overall well-being. Perfect for all levels, from complete beginners to advanced practitioners.',
      features: [
        'Multiple class styles',
        'All skill levels welcome',
        'Stress relief and relaxation',
        'Improved flexibility',
        'Mind-body connection'
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80',
      gradient: 'from-primary-orange via-orange-500 to-primary-orange-light',
      accent: 'primary-orange'
    },
    {
      title: 'High-Intensity Interval Training',
      subtitle: 'Maximum Results, Minimal Time',
      description: 'Maximize your workout efficiency with our high-intensity interval training classes. These fast-paced, energetic sessions combine cardio and strength training to burn calories, build endurance, and boost your metabolism. Perfect for those who want maximum results in minimal time.',
      features: [
        'High calorie burn',
        'Improved cardiovascular health',
        'Time-efficient workouts',
        'Full-body conditioning',
        'Metabolic boost'
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
      gradient: 'from-primary-blue via-primary-orange to-orange-500',
      accent: 'primary-orange'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section - Creative Split */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <span className="text-sm font-bold uppercase tracking-wider">Our Programs</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block">Transform</span>
              <span className="block bg-gradient-to-r from-primary-orange to-orange-300 bg-clip-text text-transparent">
                Your Body
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-bold max-w-3xl mx-auto leading-relaxed">
              Discover the perfect fitness program for your goals. From personalized training to group classes, we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Programs - Creative Alternating Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-32">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Image Side - Creative Overlap */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden group">
                      {/* Decorative Elements */}
                      <div className={`absolute -inset-4 bg-gradient-to-br ${
                        index === 0 ? 'from-primary-blue via-blue-600 to-primary-blue-dark' :
                        index === 1 ? 'from-primary-orange via-orange-500 to-primary-orange-light' :
                        'from-primary-blue via-primary-orange to-orange-500'
                      } opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                      <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-orange/30 rounded-full blur-2xl" />
                      
                      <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-3 shadow-xl">
                        <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
                          {program.subtitle}
                        </div>
                        <div className="text-2xl font-black gradient-text">
                          {program.title.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="inline-block px-4 py-2 bg-primary-orange/10 rounded-full mb-6">
                        <span className={`text-sm font-bold ${
                          index === 0 ? 'text-primary-blue' :
                          index === 1 ? 'text-primary-orange' :
                          'text-primary-orange'
                        } uppercase tracking-wider`}>
                          Program {index + 1}
                        </span>
                      </div>
                      <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
                        {program.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                        {program.description}
                      </p>
                    </div>
                    
                    <div className="premium-card p-8">
                      <h3 className="text-2xl font-black mb-6 text-gray-900 flex items-center gap-3">
                        <span className={`w-1 h-8 bg-gradient-to-b ${
                          index === 0 ? 'from-primary-blue via-blue-600 to-primary-blue-dark' :
                          index === 1 ? 'from-primary-orange via-orange-500 to-primary-orange-light' :
                          'from-primary-blue via-primary-orange to-orange-500'
                        } rounded-full`} />
                        Key Features
                      </h3>
                      <ul className="space-y-4">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br ${
                              index === 0 ? 'from-primary-blue to-primary-blue-dark' :
                              index === 1 ? 'from-primary-orange to-primary-orange-light' :
                              'from-primary-blue to-primary-orange'
                            } flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-lg text-gray-700 font-semibold pt-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href="/pricing"
                      className={`inline-block btn-primary`}
                    >
                      <span>View Pricing</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info - Premium Cards */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
                <span className="text-primary-blue font-bold text-sm uppercase tracking-wider">More Than Workouts</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="gradient-text">Complete</span> Wellness
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At PowerGym, we offer comprehensive fitness solutions that go beyond the gym floor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="premium-card p-10 group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-blue-dark rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">Flexible Scheduling</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Classes and training sessions available throughout the day to fit your busy lifestyle. Early morning, lunch break, or evening - we've got you covered.
                </p>
              </div>
              
              <div className="premium-card p-10 group hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-primary-orange-light rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">Expert Instruction</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  All our instructors are certified professionals with years of experience in their fields. They're passionate about helping you succeed.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/pricing" className="btn-primary inline-block text-lg">
                <span>View Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}