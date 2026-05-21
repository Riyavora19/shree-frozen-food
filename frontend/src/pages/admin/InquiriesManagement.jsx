import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrash, FaEye } from 'react-icons/fa';
import { inquiriesAPI } from '../../services/api';
import { toast } from 'react-toastify';

const InquiriesManagement = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [filterStatus, setFilterStatus] = useState('');

  useEffect(() => {
    fetchInquiries();
  }, [filterStatus]);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const params = filterStatus ? { status: filterStatus } : {};
      const response = await inquiriesAPI.getAll(params);
      setInquiries(response.data);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      // Only show toast if it's not a duplicate call
      if (!toast.isActive('fetch-error')) {
        toast.error('Failed to fetch inquiries', { toastId: 'fetch-error' });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await inquiriesAPI.updateStatus(id, status);
      toast.success('Status updated successfully');
      fetchInquiries();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this inquiry?')) {
      try {
        await inquiriesAPI.delete(id);
        toast.success('Inquiry deleted successfully');
        fetchInquiries();
      } catch (error) {
        toast.error('Failed to delete inquiry');
      }
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      contacted: 'bg-blue-100 text-blue-800',
      resolved: 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Inquiries Management</h1>
          <p className="text-gray-600 mt-2">Manage customer inquiries and requests</p>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="contacted">Contacted</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
      ) : inquiries.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <p className="text-gray-600 text-xl">No inquiries found</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inquiries.map((inquiry) => (
                  <motion.tr
                    key={inquiry._id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{inquiry.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{inquiry.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{inquiry.phone}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">{inquiry.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(inquiry.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedInquiry(inquiry)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => handleDelete(inquiry._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View Inquiry Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Inquiry Details</h2>
            <div className="space-y-4">
              <div>
                <label className="font-semibold text-gray-700">Name:</label>
                <p className="text-gray-600">{selectedInquiry.name}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Email:</label>
                <p className="text-gray-600">{selectedInquiry.email}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Phone:</label>
                <p className="text-gray-600">{selectedInquiry.phone}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Type:</label>
                <p className="text-gray-600 capitalize">{selectedInquiry.type}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Status:</label>
                <p className="text-gray-600 capitalize">{selectedInquiry.status}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Message:</label>
                <p className="text-gray-600 whitespace-pre-wrap">{selectedInquiry.message}</p>
              </div>
              <div>
                <label className="font-semibold text-gray-700">Date:</label>
                <p className="text-gray-600">
                  {new Date(selectedInquiry.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedInquiry(null)}
              className="mt-6 bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default InquiriesManagement;
