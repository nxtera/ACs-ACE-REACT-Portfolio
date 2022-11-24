import React from 'react';
import NavTabs from './NavTabs';
import main from './Main'
// import About from './pages/About';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import CV from './pages/CV';

export default function Header(props) {

    return (
      <NavTabs currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
    );
  }