import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
// import "../assets/css/contact.css";
import "../assets/css/contact.scss"
const Layout = ({children}) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

export default Layout
