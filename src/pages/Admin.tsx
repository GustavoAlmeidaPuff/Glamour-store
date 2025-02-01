import React from 'react';
import './Admin.css';
import ProductEditor from '../components/admin/ProductEditor.tsx';

const Admin: React.FC = () => {
  return (
    <div className="admin-container">
      <h1>Painel de Administração</h1>
      <div className="admin-content">
        <ProductEditor />
      </div>
    </div>
  );
};

export default Admin; 