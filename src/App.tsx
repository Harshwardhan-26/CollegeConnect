import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import AddService from './pages/AddService';
import MyListings from './pages/MyListings';
import Pricing from './pages/Pricing';
import Auth from './pages/Auth';
import { useAuth } from './hooks/useAuth';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/auth" />;
};

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
          <Route 
            path="/services" 
            element={
              <PrivateRoute>
                <Services />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/service/:id" 
            element={
              <PrivateRoute>
                <ServiceDetails />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/add-service" 
            element={
              <PrivateRoute>
                <AddService />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/my-listings" 
            element={
              <PrivateRoute>
                <MyListings />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <PrivateRoute>
                <Pricing />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;