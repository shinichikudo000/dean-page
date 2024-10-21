'use client'

import React, { useRef, useState, useEffect } from 'react'
import { vpnData } from './data'
import VpnContainer from './VpnContainer'
import useMediaQuery from './useMediaQuery'

const Vpn = () => {
    const [vpnActive, setVpnActive] = useState<number>(0)
    const vpnContainerRef = useRef<HTMLDivElement | null>(null)
    const [containerWidth, setContainerWidth] = useState<number>(0)

    const updateContainerWidth = () => {
        if (vpnContainerRef.current) {
            setContainerWidth(vpnContainerRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        updateContainerWidth();

        const handleResize = () => {
            updateContainerWidth();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    useEffect(() => {
        updateContainerWidth();
    }, [vpnActive])

    const isSmallScreen = useMediaQuery('(max-width: 640px)');
    
    return (
        <>
            <div className="w-full sm:hidden inline-flex bg-white shadow-2xl mb-4">
                {
                    vpnData?.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className={`w-1/3 p-4 flex justify-center items-center cursor-pointer ${vpnActive === index ? 'bg-white' : 'bg-[#E8E8E8]'}`}
                                onClick={() => setVpnActive(index)}
                            >
                                <img src={`/icons/${data.logo}`} alt={data.vpn} className="w-[50px]" />
                            </div>
                        )
                    })
                }
            </div>
            <div 
                className="w-full flex gap-[64px] sm:inline-block" 
                style={{ transform: isSmallScreen ? `translateX(-${(containerWidth + 64) * vpnActive}px)` : 'none' }}
                ref={vpnContainerRef}
            >
                {
                    vpnData?.map((data, index) => {
                        return (
                            <VpnContainer key={index} data={data} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Vpn

