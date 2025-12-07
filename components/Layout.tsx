import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden scanlines">
      {/* Background Grid Layer */}
      <div className="fixed inset-0 bg-circuit-grid bg-[size:40px_40px] pointer-events-none z-0 opacity-20" />
      
      {/* Background Radial Gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0f_100%)] pointer-events-none z-0" />

      {/* Main Content */}
      <Navbar />
      <main className="flex-grow z-10 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};