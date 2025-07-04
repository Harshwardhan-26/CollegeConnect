import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Service } from '../types';
import { 
  ArrowLeft, 
  Clock, 
  Mail, 
  MapPin, 
  DollarSign, 
  User,
  Phone,
  MessageCircle
} from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      if (!id) {
        setError('Service ID not provided');
        setLoading(false);
        return;
      }

      try {
        const serviceDoc = await getDoc(doc(db, 'services', id));
        if (serviceDoc.exists()) {
          const serviceData = {
            id: serviceDoc.id,
            ...serviceDoc.data(),
            timestamp: serviceDoc.data().timestamp?.toDate() || new Date(),
          } as Service;
          setService(serviceData);
        } else {
          setError('Service not found');
        }
      } catch (error) {
        console.error('Error fetching service:', error);
        setError('Failed to load service details');
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      tutoring: 'bg-blue-100 text-blue-800 border-blue-200',
      books: 'bg-green-100 text-green-800 border-green-200',
      furniture: 'bg-purple-100 text-purple-800 border-purple-200',
      electronics: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      roommate: 'bg-pink-100 text-pink-800 border-pink-200',
      resume: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      coding: 'bg-red-100 text-red-800 border-red-200',
      other: 'bg-gray-100 text-gray-800 border-gray-200',
    };
    return colors[category] || colors.other;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const handleContact = () => {
    if (!service) return;

    if (service.contact.includes('@')) {
      window.open(`mailto:${service.contact}?subject=Interest in: ${service.title}&body=Hi! I'm interested in your service "${service.title}". Please let me know more details.`);
    } else {
      // Check if it's a phone number
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (phoneRegex.test(service.contact.replace(/\D/g, ''))) {
        window.open(`tel:${service.contact}`);
      } else {
        // Fallback - copy to clipboard or show contact info
        navigator.clipboard.writeText(service.contact).then(() => {
          alert('Contact information copied to clipboard!');
        }).catch(() => {
          alert(`Contact: ${service.contact}`);
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The service you\'re looking for doesn\'t exist.'}</p>
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Services
        </button>

        {/* Service Details Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {service.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(service.category)} bg-white`}>
                    {service.category}
                  </span>
                  <div className="flex items-center text-blue-100">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">Posted {formatDate(service.timestamp)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.price && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-green-800">Price</p>
                          <p className="text-lg font-semibold text-green-900">{service.price}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.location && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-blue-800">Location</p>
                          <p className="text-lg font-semibold text-blue-900">{service.location}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-lg p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <p className="text-sm text-gray-600">Posted by</p>
                        <p className="font-medium text-gray-900">{service.userEmail}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {service.contact.includes('@') ? (
                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                      ) : (
                        <MessageCircle className="h-5 w-5 text-gray-400 mr-3" />
                      )}
                      <div>
                        <p className="text-sm text-gray-600">Contact</p>
                        <p className="font-medium text-gray-900 break-all">{service.contact}</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleContact}
                    className="w-full mt-6 bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    {service.contact.includes('@') ? (
                      <span className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact Now
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 mt-3 text-center">
                    Click to open your default email/messaging app
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;