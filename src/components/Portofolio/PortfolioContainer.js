import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Home from '../../pages/home';
import About from '../About/index'
import Work from '../../pages/work';
import Contact from '../Contact/index';
import Footer from '../Footer/index';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Contact');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer/>
    </div>
  );
}
