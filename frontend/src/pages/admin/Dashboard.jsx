import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaEnvelope, FaCheckCircle, FaClock, FaExclamationCircle,
  FaBox, FaArrowRight, FaTags, FaGlobe, FaChartBar
} from 'react-icons/fa';
import { inquiriesAPI, productsAPI } from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, pending: 0, contacted: 0, resolved: 0 });
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
      const data = response.data;
      setProductCount(Array.isArray(data) ? data.length : 0);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Inquiries',
      value: stats.total,
      icon: <FaEnvelope size={24} />,
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      shadow: 'shadow-blue-200',
      link: '/admin/inquiries'
    },
    {
      title: 'Pending',
      value: stats.pending,
      icon: <FaClock size={24} />,
      bg: 'bg-gradient-to-br from-amber-400 to-orange-500',
      shadow: 'shadow-amber-200',
      link: '/admin/inquiries'
    },
    {
      title: 'Contacted',
      value: stats.contacted,
      icon: <FaExclamationCircle size={24} />,
      bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      shadow: 'shadow-purple-200',
      link: '/admin/inquiries'
    },
    {
      title: 'Resolved',
      value: stats.resolved,
      icon: <FaCheckCircle size={24} />,
      bg: 'bg-gradient-to-br from-emerald-400 to-green-500',
      shadow: 'shadow-emerald-200',
      link: '/admin/inquiries'
    }
  ];

  const quickLinks = [
    {
      to: '/admin/products',
      icon: <FaBox size={22} />,
      label: 'Products',
      desc: 'Add, edit or delete products',
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400'
    },
    {
      to: '/admin/categories',
      icon: <FaTags size={22} />,
      label: 'Categories',
      desc: 'Manage product categories',
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconBg: 'bg-purple-500',
      border: 'border-purple-200',
      hover: 'hover:border-purple-400'
    },
    {
      to: '/admin/inquiries',
      icon: <FaEnvelope size={22} />,
      label: 'Inquiries',
      desc: 'View and reply to inquiries',
      bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
      iconBg: 'bg-amber-500',
      border: 'border-amber-200',
      hover: 'hover:border-amber-400'
    },
    {
      to: '/',
      icon: <FaGlobe size={22} />,
      label: 'View Website',
      desc: 'See the public-facing site',
      bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-500',
      border: 'border-emerald-200',
      hover: 'hover:border-emerald-400'
    }
  ];

  return (
    <div className="space-y-6">

      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-blue-700 to-primary-light text-white p-8 shadow-lg"
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white opacity-5 rounded-full" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-secondary opacity-10 rounded-full" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Welcome Back, Admin! 👋
            </h2>
            <p className="text-blue-100 text-sm">
              Manage your Shree Frozen Food business from here.
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur px-4 py-2 rounded-xl text-sm font-semibold">
            <FaChartBar className="text-secondary" />
            <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
        </div>
      ) : (
        <>
          {/* Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  to={card.link}
                  className={`block rounded-2xl p-5 text-white ${card.bg} shadow-lg ${card.shadow} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-white/20 p-2 rounded-xl">
                      {card.icon}
                    </div>
                    <FaArrowRight className="opacity-60 text-sm" />
                  </div>
                  <p className="text-3xl font-black">{card.value}</p>
                  <p className="text-sm font-semibold text-white/80 mt-1">{card.title}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Products Count + Quick Links */}
          <div className="grid lg:grid-cols-3 gap-6">

            {/* Products Count Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-2xl bg-gradient-to-br from-secondary to-orange-400 text-white p-6 shadow-lg shadow-orange-200 flex flex-col justify-between"
            >
              <div>
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <FaBox size={22} />
                </div>
                <p className="text-5xl font-black">{productCount}</p>
                <p className="text-white/80 font-semibold mt-1">Total Products</p>
                <p className="text-white/60 text-sm mt-1">Fruit pulp items in catalog</p>
              </div>
              <Link
                to="/admin/products"
                className="mt-6 flex items-center justify-between bg-white/20 hover:bg-white/30 px-4 py-2 rounded-xl text-sm font-bold transition-colors"
              >
                <span>Manage Products</span>
                <FaArrowRight />
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className={`flex items-center space-x-3 p-4 rounded-xl border ${item.bg} ${item.border} ${item.hover} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md group`}
                  >
                    <div className={`${item.iconBg} text-white p-2 rounded-lg flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Business Info Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-3">
              <h3 className="text-white font-bold text-sm">Business Overview</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 p-0">
              {[
                { label: 'Company', value: 'Shree Frozen Food', color: 'text-primary' },
                { label: 'Version', value: 'v1.0.0', color: 'text-purple-600' },
                { label: 'Database', value: 'MongoDB', color: 'text-green-600' },
                { label: 'Last Sync', value: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }), color: 'text-amber-600' }
              ].map((item, i) => (
                <div key={i} className="px-6 py-4">
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{item.label}</p>
                  <p className={`font-bold text-sm mt-1 ${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
