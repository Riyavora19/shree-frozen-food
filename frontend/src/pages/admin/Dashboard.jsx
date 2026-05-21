import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle, FaClock, FaExclamationCircle, FaBox } from 'react-icons/fa';
import { inquiriesAPI, productsAPI } from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    contacted: 0,
    resolved: 0
  });
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchProductCount();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await inquiriesAPI.getStats();
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProductCount = async () => {
    try {
      const response = await productsAPI.getAll();
      setProductCount(response.data.length);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Inquiries',
      value: stats.total,
      icon: <FaEnvelope size={28} />,
      color: 'bg-blue-500',
      link: '/admin/inquiries'
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: <FaClock size={28} />,
      color: 'bg-yellow-500',
      link: '/admin/inquiries?status=pending'
    },
    {
      title: 'Contacted',
      value: stats.contacted,
      icon: <FaExclamationCircle size={28} />,
      color: 'bg-orange-500',
      link: '/admin/inquiries?status=contacted'
    },
    {
      title: 'Resolved',
      value: stats.resolved,
      icon: <FaCheckCircle size={28} />,
      color: 'bg-green-500',
      link: '/admin/inquiries?status=resolved'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={card.link}>
                  <div className={`${card.color} text-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm opacity-90 mb-1">{card.title}</p>
                        <p className="text-4xl font-bold">{card.value}</p>
                      </div>
                      <div className="opacity-80">
                        {card.icon}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Total Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <FaBox className="text-purple-600" size={28} />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Total Products</p>
                  <p className="text-3xl font-bold text-gray-800">{productCount}</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 md:col-span-2"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/admin/products"
                  className="bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary-dark transition-colors text-center font-medium"
                >
                  Manage Products
                </Link>
                <Link
                  to="/admin/inquiries"
                  className="bg-secondary text-white py-3 px-4 rounded-lg hover:bg-secondary-dark transition-colors text-center font-medium"
                >
                  View Inquiries
                </Link>
                <Link
                  to="/"
                  className="bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition-colors text-center font-medium"
                >
                  Visit Website
                </Link>
                <Link
                  to="/admin/products"
                  className="bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-colors text-center font-medium"
                >
                  Add Product
                </Link>
              </div>
            </motion.div>
          </div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">System Information</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-500 text-sm">Company</p>
                <p className="font-semibold text-gray-800">Shree Frozen Food</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Version</p>
                <p className="font-semibold text-gray-800">1.0.0</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Last Updated</p>
                <p className="font-semibold text-gray-800">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
