import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essentials',
    price: 299,
    period: 'month',
    description: 'Perfect for fashion enthusiasts starting their journey',
    features: [
      'Personal styling consultation',
      'Quarterly wardrobe refresh',
      'Access to seasonal collections',
      'Style guide & lookbook',
      'Email support',
      'Member-only previews'
    ]
  },
  {
    name: 'Signature',
    price: 599,
    period: 'month',
    description: 'Our most popular choice for discerning clients',
    features: [
      'Bi-monthly styling sessions',
      'Exclusive collection access',
      'Priority alterations service',
      'Personal shopper assistance',
      'VIP event invitations',
      'Complimentary accessories',
      '24/7 concierge support',
      'Wardrobe management app'
    ],
    isPopular: true
  },
  {
    name: 'Couture',
    price: 1299,
    period: 'month',
    description: 'Ultimate luxury experience for our elite clientele',
    features: [
      'Unlimited styling sessions',
      'Bespoke garment creation',
      'Private showroom access',
      'International fashion week tickets',
      'Personal atelier visits',
      'White-glove delivery service',
      'Dedicated style director',
      'Archive collection access',
      'Complimentary luxury packaging'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/40"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your style and access exclusive fashion experiences
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative transition-all duration-300 hover:-translate-y-2 ${
                tier.isPopular ? 'md:scale-110 z-10' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div
                className={`rounded-2xl bg-white p-8 h-full flex flex-col ${
                  tier.isPopular
                    ? 'shadow-2xl border-2 border-blue-600'
                    : 'shadow-xl border border-gray-100'
                }`}
              >
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-gray-600 ml-2">/{tier.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                    tier.isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black shadow-md hover:shadow-lg'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            All plans include complimentary shipping and a 30-day satisfaction guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
