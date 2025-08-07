import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#003366', padding: '20px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" style={{ fontWeight: 'bold', fontSize: '24px' }}>VIPRE</div>
    </header>
  );
};

export default Header;
