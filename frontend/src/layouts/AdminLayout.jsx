import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaEnvelope, FaSignOutAlt, FaBox, FaBars, FaTimes, FaTags } from 'react-icons/fa';
import { logout, getUserData } from '../utils/authUtils';
import { toast } from 'react-toastify';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = getUserData();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/admin/login');
  };

  const navItems = [
    { path: '/admin', icon: <FaHome />, label: 'Dashboard' },
    { path: '/admin/products', icon: <FaBox />, label: 'Products' },
    { path: '/admin/categories', icon: <FaTags />, label: 'Categories' },
    { path: '/admin/inquiries', icon: <FaEnvelope />, label: 'Inquiries' },
  ];

  return (
    <div className="flex h-screen bg-slate-50/50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-66 bg-white border-r border-slate-100 z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo/Brand */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center font-extrabold text-white shadow-sm">
              S
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-850 tracking-tight leading-none">Admin Panel</h2>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1 block">Shree Pulps</span>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 border border-gray-150"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1.5 flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3.5 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-premium shadow-glow-primary scale-[1.02] font-semibold'
                    : 'text-slate-650 hover:bg-slate-50 hover:text-primary hover:translate-x-1'
                }`}
              >
                <span className={`text-lg ${isActive ? 'text-white' : 'text-slate-500'}`}>{item.icon}</span>
                <span className="text-sm tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info & Logout Area at the Bottom */}
        <div className="p-4 border-t border-slate-100 space-y-3">
          <div className="bg-slate-50/70 border border-slate-100 rounded-xl p-3">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 bg-gradient-to-tr from-secondary to-secondary-dark text-white rounded-full flex items-center justify-center font-bold shadow-sm">
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">
                  {user?.name || 'Admin'}
                </p>
                <p className="text-[10px] text-gray-500 truncate mt-0.5">
                  {user?.email || 'admin@example.com'}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-red-600 hover:bg-red-50/60 hover:text-red-700 transition-all duration-200 w-full text-sm font-semibold border border-transparent hover:border-red-100"
          >
            <FaSignOutAlt className="text-base" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50 border border-gray-150"
            >
              <FaBars size={18} />
            </button>
            <div>
              <h1 className="text-xl font-extrabold text-slate-800 tracking-tight">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h1>
            </div>
          </div>
          <Link
            to="/"
            className="text-xs font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 px-4 py-2 rounded-xl transition-all duration-200 hover:shadow-sm"
          >
            View Website →
          </Link>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
