import React from 'react';
import ServiceList from '../components/Services/ServiceList';
import { useServices } from '../hooks/useServices';

const Services: React.FC = () => {
  const { services, loading } = useServices();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Browse Services
        </h1>
        <p className="text-gray-600">
          Discover services, items, and opportunities shared by fellow students
        </p>
      </div>

      <ServiceList 
        services={services} 
        loading={loading}
      />
    </div>
  );
};

export default Services;