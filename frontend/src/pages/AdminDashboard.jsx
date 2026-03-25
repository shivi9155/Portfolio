import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaSignOutAlt, FaPlus, FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [activeTab, setActiveTab] = useState('projects');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchData(token);
  }, [navigate]);

  const fetchData = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const [projRes, msgRes] = await Promise.all([
        axios.get('http://localhost:5000/api/projects'),
        axios.get('http://localhost:5000/api/contact', config)
      ]);
      setProjects(projRes.data || []);
      setMessages(msgRes.data || []);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleDeleteProject = async (id) => {
    if(!window.confirm('Delete this project?')) return;
    const token = localStorage.getItem('adminToken');
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch(err) {
      alert('Error deleting project');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100 pb-12">
      <nav className="bg-white dark:bg-darker border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Admin Panel</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors">
          <FaSignOutAlt /> Logout
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 mb-8">
          <button 
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'projects' ? 'bg-primary text-white' : 'bg-white dark:bg-darker border border-gray-200 dark:border-gray-800'}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'messages' ? 'bg-primary text-white' : 'bg-white dark:bg-darker border border-gray-200 dark:border-gray-800'}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages
          </button>
        </div>

        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Manage Projects</h2>
              <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                <FaPlus /> Add New Request Logic
              </button>
            </div>
            <div className="bg-white dark:bg-darker rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm text-gray-500 dark:text-gray-400">Title</th>
                    <th className="px-6 py-4 font-semibold text-sm text-gray-500 dark:text-gray-400">Date Added</th>
                    <th className="px-6 py-4 font-semibold text-sm text-gray-500 dark:text-gray-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {projects.length === 0 ? (
                    <tr><td colSpan="3" className="px-6 py-8 text-center text-gray-500">No projects found. Add one manually or through API.</td></tr>
                  ) : projects.map(proj => (
                    <tr key={proj._id}>
                      <td className="px-6 py-4">{proj.title}</td>
                      <td className="px-6 py-4">{new Date(proj.createdAt).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-right">
                        <button onClick={() => handleDeleteProject(proj._id)} className="text-red-500 hover:text-red-700 p-2">
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <h2 className="text-xl font-bold mb-6">Contact Submissions</h2>
            <div className="grid gap-4">
              {messages.length === 0 ? (
                <div className="text-center text-gray-500 py-8">No messages currently.</div>
              ) : messages.map(msg => (
                <div key={msg._id} className="bg-white dark:bg-darker p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{msg.name}</h4>
                      <a href={`mailto:${msg.email}`} className="text-primary text-sm">{msg.email}</a>
                    </div>
                    <span className="text-sm text-gray-500">{new Date(msg.createdAt).toLocaleString()}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
