import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Mail, MapPin, DollarSign, Trash2, Eye } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  showDeleteButton?: boolean;
  onDelete?: (serviceId: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  showDeleteButton = false, 
  onDelete 
}) => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      tutoring: 'bg-blue-100 text-blue-800',
      books: 'bg-green-100 text-green-800',
      furniture: 'bg-purple-100 text-purple-800',
      electronics: 'bg-yellow-100 text-yellow-800',
      roommate: 'bg-pink-100 text-pink-800',
      resume: 'bg-indigo-100 text-indigo-800',
      coding: 'bg-red-100 text-red-800',
      other: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || colors.other;
  };

  const formatDate = (date: Date) => {
    return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
      Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)),
      'day'
    );
  };

  const handleViewDetails = () => {
    navigate(`/service/${service.id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete && window.confirm('Are you sure you want to delete this service?')) {
      onDelete(service.id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {service.title}
            </h3>
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(service.category)}`}>
              {service.category}
            </span>
          </div>
          {showDeleteButton && onDelete && (
            <button
              onClick={handleDelete}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              title="Delete service"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>

        <div className="space-y-2 text-sm text-gray-500 mb-4">
          {service.price && (
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              <span>{service.price}</span>
            </div>
          )}
          {service.location && (
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{service.location}</span>
            </div>
          )}
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>Posted {formatDate(service.timestamp)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            By {service.userEmail}
          </span>
          <button
            onClick={handleViewDetails}
            className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;