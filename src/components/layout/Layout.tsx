import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface ChildrenType {
  children: React.ReactNode;
}

const Layout: React.FC<ChildrenType> = ({ children }) => {
  return (
    <div className="min-h-screen h-full pb-16 max-w-[1600px] relative overflow-hidden font-Shabnam scroll-smooth">
      <Header />

      <div id="cartAnimation"></div>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
