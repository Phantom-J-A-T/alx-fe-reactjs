import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', background: '#f0f0f0' }}>
      <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
