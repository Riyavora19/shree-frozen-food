import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaCheckCircle, FaClock, FaExclamationCircle, FaBox, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
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
      icon: <FaEnvelope size={22} />,
      color: 'text-blue-500 bg-blue-50 border-blue-100',
      link: '/admin/inquiries'
    },
    {
      title: 'Pending Inquiries',
      value: stats.pending,
      icon: <FaClock size={22} />,
      color: 'text-amber-500 bg-amber-50 border-amber-100',
      link: '/admin/inquiries?status=pending'
    },
    {
      title: 'Contacted Clients',
      value: stats.contacted,
      icon: <FaExclamationCircle size={22} />,
      color: 'text-orange-500 bg-orange-50 border-orange-100',
      link: '/admin/inquiries?status=contacted'
    },
    {
      title: 'Resolved Cases',
      value: stats.resolved,
      icon: <FaCheckCircle size={22} />,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
      link: '/admin/inquiries?status=resolved'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light text-white p-8 rounded-3xl shadow-premium shadow-glow-primary"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,66,0.15),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Welcome Back, Admin!</h2>
            <p className="text-white/80 text-sm font-medium max-w-md">
              Here is your overview for Shree Frozen Food. Monitor user inquiries and manage product listings.
            </p>
          </div>
          <div className="flex items-center space-x-2.5 bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <FaCalendarAlt className="text-secondary" />
            <span>{new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</span>
          </div>
        </div>
      </motion.div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-premium hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link to={card.link} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{card.title}</p>
                    <p className="text-3xl font-black text-slate-800 tracking-tight">{card.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${card.color} border flex items-center justify-center shadow-sm`}>
                    {card.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions & Product summary */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Total Products summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-4 bg-white border border-slate-100 rounded-2xl p-6 shadow-premium flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center text-purple-650 shadow-sm">
                  <FaBox size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Catalog Inventory</h3>
                  <p className="text-4xl font-black text-slate-850 mt-1">{productCount}</p>
                  <p className="text-xs text-slate-450 mt-1 font-medium">Unique fruit pulp items online.</p>
                </div>
              </div>
              <Link
                to="/admin/products"
                className="mt-6 inline-flex items-center justify-between text-xs font-bold text-primary hover:text-primary-dark group pt-4 border-t border-slate-50"
              >
                <span>Manage catalog</span>
                <FaArrowRight className="transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Quick Actions Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="lg:col-span-8 bg-white border border-slate-100 rounded-2xl p-6 shadow-premium space-y-4"
            >
              <h3 className="text-base font-extrabold text-slate-800 tracking-tight">Quick Operations</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/admin/products"
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-150 rounded-xl p-4 text-left transition-all group"
                >
                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">Catalog Products</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Add, edit, or delete items.</p>
                </Link>
                <Link
                  to="/admin/inquiries"
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-150 rounded-xl p-4 text-left transition-all group"
                >
                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">Inbox Inquiries</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Review and contact leads.</p>
                </Link>
                <Link
                  to="/"
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-150 rounded-xl p-4 text-left transition-all group"
                >
                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">Visit Public Site</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Check user-facing pages.</p>
                </Link>
                <Link
                  to="/admin/categories"
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-150 rounded-xl p-4 text-left transition-all group"
                >
                  <h4 className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">Pulp Categories</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Manage catalog tags.</p>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-premium"
          >
            <h3 className="text-base font-extrabold text-slate-800 tracking-tight mb-4">System Parameters</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Company</p>
                <p className="font-extrabold text-slate-750 text-sm mt-0.5">Shree Frozen Food</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">System Release</p>
                <p className="font-extrabold text-slate-750 text-sm mt-0.5">v1.0.0</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Database Engine</p>
                <p className="font-extrabold text-slate-750 text-sm mt-0.5">MongoDB Atlas</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Last Dashboard Sync</p>
                <p className="font-extrabold text-slate-750 text-sm mt-0.5">{new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
