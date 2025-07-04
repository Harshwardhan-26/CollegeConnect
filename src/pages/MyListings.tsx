import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import ServiceList from '../components/Services/ServiceList';
import { useAuth } from '../hooks/useAuth';
import { useServices } from '../hooks/useServices';
import { Service } from '../types';

const MyListings: React.FC = () => {
  const { user } = useAuth();
  const { fetchUserServices, deleteService } = useServices();
  const [userServices, setUserServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserServices = async () => {
      if (user) {
        const services = await fetchUserServices(user.uid);
        setUserServices(services);
      }
      setLoading(false);
    };

    loadUserServices();
  }, [user, fetchUserServices]);

  const handleDelete = async (serviceId: string) => {
    try {
      await deleteService(serviceId);
      setUserServices(prev => prev.filter(service => service.id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Please log in to view your listings.</p>
          <Link
            to="/auth"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            My Listings
          </h1>
          <p className="text-gray-600">
            Manage your posted services and items
          </p>
        </div>
        <Link
          to="/add-service"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Service
        </Link>
      </div>

      {userServices.length === 0 && !loading ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="text-gray-500 text-lg mb-4">
            You haven't posted any services yet
          </div>
          <p className="text-gray-400 mb-6">
            Start sharing your skills or items with fellow students
          </p>
          <Link
            to="/add-service"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Post Your First Service
          </Link>
        </div>
      ) : (
        <ServiceList 
          services={userServices} 
          loading={loading}
          showDeleteButton={true}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default MyListings;