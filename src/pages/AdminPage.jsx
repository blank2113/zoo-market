import React from 'react';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
import './adminPage.css';
 
function AdminPage() {
  return (
    <div className='admin-page'>
        <div className='admin-page__inner container'>
          <NavigationMenu/>
        </div>
    </div>
  )
}

export default AdminPage