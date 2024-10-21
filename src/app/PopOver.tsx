import React, { useEffect, useState } from 'react'
import Timer from './Timer';

const PopOver = ({onClose}: {
    onClose: () => void
}) => {
  return (
    <div className='h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-[30%] flex justify-center items-center z-[100]'>
        <div className='bg-white opacity-100 py-4 relative flex flex-col items-center justify-stretch'>
            <button className='absolute top-2 right-2 bg-black rounded-full p-2' onClick={() => onClose()}>
                <img src='/icons/close.png' alt='close' className='w-[20px] h-auto'/>
            </button>
            <h1 className='uppercase text-4xl font-bold text-center'>Limited Time Offer!</h1>
            <p className='text-base font-normal text-center mb-4'>Save 82% On Private Internet Access. Offer Expires In:</p>
            <div className='px-16 mb-4'>
                <Timer />
            </div>
            <div className='grid grid-cols-3 mb-4'>
                <div></div>
                <div className='flex w-full gap-1 justify-center'>
                    {
                        Array(5).fill(null).map((_, index) => {
                            return (
                                <img key={index} src='/icons/star-sq.png' alt='star' className='w-[20px] h-auto'/>
                            );
                        })
                    }
                </div>
                <div className='w-full text-start px-4'>
                    <p className='text-base'><strong>4.8</strong> out of 5</p>
                </div>
            </div>
            <div className='w-full bg-[#E2223B] p-6 text-center'>
                <h1 className='uppercase text-white font-bold text-2xl'>82% Discount on vpn</h1>
            </div>
        </div>
    </div>
  )
}

export default PopOver