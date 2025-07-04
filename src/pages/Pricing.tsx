import React from 'react';
import { Check, Crown, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleUpgradeClick = () => {
    alert('Upgrade functionality coming soon! 🚀\n\nThis will redirect to payment processing.');
  };

  const freeFeatures = [
    'Post up to 3 services',
    'Basic visibility in search',
    'Standard support',
    'Basic profile'
  ];

  const plusFeatures = [
    'Unlimited service listings',
    'Priority listing in search results',
    'Analytics dashboard (views, clicks)',
    'Premium support access',
    'Custom profile & links',
    'Featured badge on listings',
    'Advanced search filters',
    'Early access to new features'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Crown className="h-16 w-16 text-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upgrade to CollegeConnect Plus
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Unlock premium features and get the most out of your student marketplace experience
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-gray-900">₹0</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started</p>
            </div>

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              disabled
              className="w-full py-3 px-4 border border-gray-300 rounded-lg text-gray-500 font-medium cursor-not-allowed"
            >
              Current Plan
            </button>
          </div>

          {/* Plus Plan */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 relative transform lg:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Plus Plan</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-white">₹199</span>
                <span className="text-blue-100 ml-2">/month</span>
              </div>
              <p className="text-blue-100">For serious student entrepreneurs</p>
            </div>

            <ul className="space-y-4 mb-8">
              {plusFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleUpgradeClick}
              className="w-full py-3 px-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105"
            >
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose CollegeConnect Plus?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the tools and visibility you need to succeed in the student marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Priority Visibility</h3>
              <p className="text-gray-600">
                Your services appear at the top of search results, getting more views and contacts
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track views, clicks, and engagement to optimize your listings for better results
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Support</h3>
              <p className="text-gray-600">
                Get priority customer support and help when you need it most
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600">
                Yes! You can cancel your Plus subscription at any time. Your benefits will continue until the end of your billing period.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, UPI, and net banking for your convenience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Do I get a refund if I'm not satisfied?</h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee. If you're not satisfied, contact us for a full refund.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I upgrade from Free to Plus anytime?</h3>
              <p className="text-gray-600">
                Absolutely! You can upgrade to Plus at any time and start enjoying premium features immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Supercharge Your Success?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have upgraded to Plus and are seeing better results from their listings
            </p>
            <button
              onClick={handleUpgradeClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors transform hover:scale-105"
            >
              Start Your Plus Journey Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;