'use client'

import Vpn from "./Vpn";
import React, { useEffect, useState } from 'react';
import PopOver from './PopOver';

export default function Home() {
  const [showPopOver, setShowPopOver] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowPopOver(true);
    }, 5000); 
    
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopOver(false);
  };

  return (
    <div className="w-full p-8 overflow-hidden">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-8 max-w-[1200px] mx-auto">Compare Our Top 3 VPNs</h1>
        <Vpn />
        {showPopOver && <PopOver onClose={handleClose} />}
      </div>
    </div>
  );
}
