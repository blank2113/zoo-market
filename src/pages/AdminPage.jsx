import React from 'react';
import AdminPageWrapper from '../components/adminPageWrapper/AdminPageWrapper';
import HeaderAdmin from '../components/header__admin/HeaderAdmin';



import './adminPage.css';
 
function AdminPage() {
  return (
    <div className='admin-page'>
        <div className='admin-page__inner'>
          <HeaderAdmin/>
         <AdminPageWrapper/>
        </div>
    </div>
  )
}

export default AdminPage