import Image from 'next/image'
import Link from 'next/link'

export default function Programs() {
  const programs = [
    {
      title: 'Personal Training',
      description: 'Get one-on-one attention from our certified personal trainers who will create a customized workout plan tailored to your specific goals, fitness level, and schedule. Whether you want to lose weight, build muscle, improve athletic performance, or recover from an injury, our trainers will guide you every step of the way.',
      features: [
        'Customized workout plans',
        'Nutrition guidance',
        'Progress tracking',
        'Flexible scheduling',
        'Goal-oriented approach'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      color: 'from-primary-blue to-primary-blue-dark'
    },
    {
      title: 'Yoga Classes',
      description: 'Find your inner strength and flexibility with our diverse yoga classes. From gentle Hatha to dynamic Vinyasa, our experienced instructors will help you improve flexibility, reduce stress, and enhance your overall well-being. Perfect for all levels, from complete beginners to advanced practitioners.',
      features: [
        'Multiple class styles',
        'All skill levels welcome',
        'Stress relief and relaxation',
        'Improved flexibility',
        'Mind-body connection'
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      color: 'from-primary-orange to-primary-orange-light'
    },
    {
      title: 'High-Intensity Interval Training (HIIT)',
      description: 'Maximize your workout efficiency with our high-intensity interval training classes. These fast-paced, energetic sessions combine cardio and strength training to burn calories, build endurance, and boost your metabolism. Perfect for those who want maximum results in minimal time.',
      features: [
        'High calorie burn',
        'Improved cardiovascular health',
        'Time-efficient workouts',
        'Full-body conditioning',
        'Metabolic boost'
      ],
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      color: 'from-primary-blue to-primary-orange'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-orange text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Discover the perfect fitness program for your goals. From personalized training to group classes, we have something for everyone.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-r ${program.color} text-white p-8 rounded-lg shadow-xl`}>
                    <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                    <p className="text-lg mb-6 text-white/90">{program.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {program.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              More Than Just Workouts
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At PowerGym, we offer comprehensive fitness solutions that go beyond the gym floor. Our programs include nutritional guidance, wellness workshops, and community events to support your holistic health journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-primary-blue">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  Classes and training sessions available throughout the day to fit your busy lifestyle.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-primary-orange">Expert Instruction</h3>
                <p className="text-gray-600">
                  All our instructors are certified professionals with years of experience in their fields.
                </p>
              </div>
            </div>
            <Link href="/pricing" className="btn-primary inline-block">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}