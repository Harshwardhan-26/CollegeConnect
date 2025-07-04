import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  where,
  deleteDoc,
  doc
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Service } from '../types';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      const q = query(collection(db, 'services'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const servicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
      })) as Service[];
      setServices(servicesData);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserServices = async (userId: string) => {
    try {
      const q = query(
        collection(db, 'services'), 
        where('userId', '==', userId),
        orderBy('timestamp', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const servicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate() || new Date(),
      })) as Service[];
      return servicesData;
    } catch (error) {
      console.error('Error fetching user services:', error);
      return [];
    }
  };

  const addService = async (serviceData: Omit<Service, 'id' | 'timestamp'>) => {
    try {
      const docRef = await addDoc(collection(db, 'services'), {
        ...serviceData,
        timestamp: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Error adding service:', error);
      throw error;
    }
  };

  const deleteService = async (serviceId: string) => {
    try {
      await deleteDoc(doc(db, 'services', serviceId));
      setServices(prev => prev.filter(service => service.id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    addService,
    deleteService,
    fetchServices,
    fetchUserServices,
  };
};