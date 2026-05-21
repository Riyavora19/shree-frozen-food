import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import Products from './pages/public/Products';
import ProductDetail from './pages/public/ProductDetail';
import Contact from './pages/public/Contact';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import InquiriesManagement from './pages/admin/InquiriesManagement';
import ProductsManagement from './pages/admin/ProductsManagement';
import CategoriesManagement from './pages/admin/CategoriesManagement';

// Protected Route
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={3}
        preventDuplicates
      />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="inquiries" element={<InquiriesManagement />} />
          <Route path="products" element={<ProductsManagement />} />
          <Route path="categories" element={<CategoriesManagement />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
