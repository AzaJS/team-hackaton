import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AdminProductsList from '../AdminProductsList/AdminProductsList';

const AdminPage = () => {
    return (
        <div>
            <div className="admin-prod-list">
                <AdminProductsList />
                <AddProduct />
            </div>
        </div>
    );
};

export default AdminPage;