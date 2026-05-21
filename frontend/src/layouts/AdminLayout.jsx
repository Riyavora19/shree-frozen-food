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
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo/Brand */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
            <p className="text-xs text-gray-500">Shree Frozen Food</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* User Info */}
        <div className="absolute bottom-20 left-0 right-0 px-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                {user?.name?.charAt(0) || 'A'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {user?.name || 'Admin'}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {user?.email || 'admin@example.com'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
          >
            <FaSignOutAlt className="text-lg" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-800"
            >
              <FaBars size={20} />
            </button>
            <div>
              <h1 className="text-xl font-semibold text-gray-800">
                {navItems.find(item => item.path === location.pathname)?.label || 'Dashboard'}
              </h1>
            </div>
          </div>
          <Link
            to="/"
            className="text-sm text-primary hover:text-primary-dark font-medium"
          >
            View Website →
          </Link>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
