import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Laptop, 
  Home as HomeIcon, 
  Plus, 
  Search,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useServices } from '../hooks/useServices';

const Home: React.FC = () => {
  const { user } = useAuth();
  const { services } = useServices();

  const recentServices = services.slice(0, 3);

  const features = [
    {
      icon: BookOpen,
      title: 'Academic Services',
      description: 'Find tutoring, study groups, and academic help from fellow students',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: HomeIcon,
      title: 'Marketplace',
      description: 'Buy and sell textbooks, furniture, and other student essentials',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Users,
      title: 'Roommate Search',
      description: 'Connect with potential roommates and find housing options',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: Laptop,
      title: 'Tech Services',
      description: 'Get help with coding, resume building, and career services',
      color: 'text-orange-600 bg-orange-100'
    }
  ];

  const stats = [
    { label: 'Active Services', value: services.length, icon: TrendingUp },
    { label: 'Happy Students', value: '500+', icon: Heart },
    { label: 'Categories', value: '8', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connect. Learn. Grow.
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The ultimate marketplace for college students to share services, 
              buy & sell items, and build community connections.
            </p>
            
            {user ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Browse Services
                </Link>
                <Link
                  to="/add-service"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Post a Service
                </Link>
              </div>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From academic support to marketplace transactions, 
              CollegeConnect makes student life easier and more connected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Services Section */}
      {user && recentServices.length > 0 && (
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Services
              </h2>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View all →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentServices.map(service => (
                <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students already using CollegeConnect
          </p>
          {!user && (
            <Link
              to="/auth"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Sign Up Today
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;