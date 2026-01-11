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
      color: 'border-gray-300'
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
      color: 'border-primary-orange border-2'
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
      color: 'border-primary-blue'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-primary-orange text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Membership Plans
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Choose the plan that fits your fitness goals and lifestyle. All plans include access to our state-of-the-art facilities and supportive community.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-xl p-8 ${plan.color} ${
                  plan.popular ? 'transform scale-105 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h2>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-primary-blue">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary-orange hover:bg-primary-orange-light text-white'
                      : 'bg-primary-blue hover:bg-primary-blue-dark text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Compare Plans
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary-blue to-primary-orange text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Standard</th>
                  <th className="p-4 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Monthly Price</td>
                  <td className="p-4 text-center">$30</td>
                  <td className="p-4 text-center">$50</td>
                  <td className="p-4 text-center">$80</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Gym Equipment Access</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Group Classes</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Personal Trainer</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">✓ Included</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Nutrition Consultation</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Sauna & Steam Room</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">24/7 Access</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium">Guest Passes</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">2/month</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Special Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-primary-orange">New Member Special</h3>
                <p className="text-lg text-blue-100">
                  Get your first month at 50% off when you sign up for any annual plan. That's a savings of up to $40!
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-3 text-primary-orange">Student Discount</h3>
                <p className="text-lg text-blue-100">
                  Students with valid ID receive 20% off all membership plans. Show your student ID at sign-up.
                </p>
              </div>
            </div>
            <p className="text-xl mb-6 text-blue-100">
              All plans include a 7-day free trial. No commitment required!
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Sign up for a free trial!
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}