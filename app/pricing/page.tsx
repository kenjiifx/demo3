import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$30',
      period: '/month',
      description: 'Perfect for those just starting their fitness journey',
      features: [
        'Access to all gym equipment',
        'Group fitness classes',
        'Locker room access',
        'Free fitness assessment',
        'Mobile app access',
        'Community support'
      ],
      popular: false,
      gradient: 'from-gray-400 to-gray-600',
      badge: null
    },
    {
      name: 'Standard',
      price: '$50',
      period: '/month',
      description: 'Our most popular plan with added benefits',
      features: [
        'Everything in Basic',
        'Priority class booking',
        'Nutrition consultation',
        'Monthly progress check-ins',
        'Guest passes (2 per month)',
        'Towel service',
        'Sauna and steam room access'
      ],
      popular: true,
      gradient: 'from-primary-orange to-primary-orange-light',
      badge: 'MOST POPULAR'
    },
    {
      name: 'Premium',
      price: '$80',
      period: '/month',
      description: 'Ultimate fitness experience with personal trainer',
      features: [
        'Everything in Standard',
        'Personal trainer included',
        'Unlimited personal training sessions',
        'Custom meal plans',
        'Priority equipment access',
        'Unlimited guest passes',
        '24/7 gym access',
        'Quarterly body composition analysis',
        'Recovery and massage therapy (monthly)'
      ],
      popular: false,
      gradient: 'from-primary-blue to-primary-blue-dark',
      badge: 'BEST VALUE'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary-orange/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-blue/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <span className="text-sm font-bold uppercase tracking-wider">Membership Plans</span>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block">Choose Your</span>
            <span className="block bg-gradient-to-r from-primary-orange to-orange-300 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 font-bold max-w-3xl mx-auto">
            All plans include access to our state-of-the-art facilities and supportive community.
          </p>
        </div>
      </section>

      {/* Pricing Cards - Premium Design */}
      <section className="section-padding bg-white relative -mt-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative premium-card p-8 lg:p-10 ${
                  plan.popular ? 'lg:scale-110 lg:-mt-8 z-10 border-4 border-primary-orange' : 'border-2 border-gray-200'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${plan.gradient} text-white px-6 py-2 rounded-full text-sm font-black shadow-xl`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black mb-3 text-gray-900">{plan.name}</h2>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className={`text-6xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-xl text-gray-500 ml-2 font-semibold">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 font-semibold">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-semibold leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-4 px-6 rounded-full font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-orange to-primary-orange-light text-white'
                      : `bg-gradient-to-r ${plan.gradient} text-white`
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Premium */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary-blue/10 rounded-full mb-6">
              <span className="text-primary-blue font-bold text-sm uppercase tracking-wider">Compare Plans</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Feature</span> Comparison
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue text-white">
                    <th className="p-6 text-left text-lg font-black">Feature</th>
                    <th className="p-6 text-center text-lg font-black">Basic</th>
                    <th className="p-6 text-center text-lg font-black">Standard</th>
                    <th className="p-6 text-center text-lg font-black">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Monthly Price', basic: '$30', standard: '$50', premium: '$80' },
                    { feature: 'Gym Equipment Access', basic: '✓', standard: '✓', premium: '✓' },
                    { feature: 'Group Classes', basic: '✓', standard: '✓', premium: '✓' },
                    { feature: 'Personal Trainer', basic: '—', standard: '—', premium: '✓ Included' },
                    { feature: 'Nutrition Consultation', basic: '—', standard: '✓', premium: '✓' },
                    { feature: 'Sauna & Steam Room', basic: '—', standard: '✓', premium: '✓' },
                    { feature: '24/7 Access', basic: '—', standard: '—', premium: '✓' },
                    { feature: 'Guest Passes', basic: '—', standard: '2/month', premium: 'Unlimited' }
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                        i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="p-6 font-black text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center font-semibold text-gray-700">{row.basic}</td>
                      <td className="p-6 text-center font-semibold text-gray-700">{row.standard}</td>
                      <td className="p-6 text-center font-semibold text-gray-700">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers - Premium Cards */}
      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-primary-blue via-primary-blue-dark to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Special Offers</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Limited Time <span className="text-primary-orange">Deals</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="glass-effect rounded-3xl p-10 hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">New Member Special</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Get your first month at <span className="text-primary-orange font-black">50% off</span> when you sign up for any annual plan. That's a savings of up to $40!
              </p>
            </div>
            
            <div className="glass-effect rounded-3xl p-10 hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 12.477 5.754 12 7.5 12s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Student Discount</h3>
              <p className="text-xl text-blue-100 leading-relaxed">
                Students with valid ID receive <span className="text-primary-orange font-black">20% off</span> all membership plans. Show your student ID at sign-up.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl mb-8 text-blue-100 font-bold">
              All plans include a <span className="text-primary-orange">7-day free trial</span>. No commitment required!
            </p>
            <Link href="/contact" className="btn-primary inline-block text-lg">
              <span>Sign up for a free trial!</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}