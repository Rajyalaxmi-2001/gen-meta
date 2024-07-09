import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/sidenavbar';
import MainContent from '../components/maincontent';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSidebarButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <Sidebar onButtonClick={handleSidebarButtonClick} />
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </>
  );
};

export default App;
