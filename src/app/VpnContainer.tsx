import React from 'react'
import { VpnData } from './data'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md";

type VpnContainerProps = {
    data: VpnData
}

const VpnContainer = ({ data }: VpnContainerProps) => {
  return (
    <div className='relative bg-white shadow-xl text-black mb-8 sm:flex justify-stretch min-w-full max-w-[1200px] sm:w-fit sm:mx-auto'>
        {
            data?.top && <div className='absolute top-0 left-0 w-[40px] aspect-square bg-[#00ACC1] rounded-br-full p-[6px] hidden sm:inline-block'>
                <img src='/icons/star.png'/>
            </div>
        }
        <div className='sm:w-1/2 lg:w-[40%] p-8'>
            <img 
                src={`/icons/${data.logoName}`} 
                alt={data.vpn}
                className='w-[80%] h-auto mx-auto mb-4 hidden sm:inline-block'
                />
            <h2 className='sm:hidden text-xl font-normal text-center'>{data.vpn}</h2>
            <p className='hidden sm:inline-block'>{data.description}</p>
        </div>
        <div className='sm:w-1/2 lg:w-[60%] lg:flex lg:items-center px-8 pt-0 pb-8 sm:pt-8'>
            <ul className='grow'>
                { 
                    data.feature && Object.entries(data.feature).map(([key, value], index) => {
                        const [first, second] = key.includes('/') ? [`${key.split('/')[0]}/`, key.split('/')[1]] : [key, ''];

                        return (
                            <li key={index} className='flex items-center justify-stretch mb-4'>
                                <img src={`/icons/feature${index + 1}.png`} alt={key} className='w-[25px] aspect-square'/>
                                
                                <p className='ml-4 mr-8 md:mr-auto text-[#266BA9] text-base leading-none sm:w-[25%] inline-flex flex-wrap w-fit'>
                                    <span>{first}</span><span>{second}</span>
                                </p>

                                <p className='md:w-[40%] lg:w-[50%] text-base font-medium'>
                                    {typeof value === 'object' ? (
                                        key === 'Servers/Countries' && !Array.isArray(value) ? (
                                            <span>{`${value.servers} servers in ${value.countries} countries`}</span>
                                        ) : Array.isArray(value) ? (
                                            value.map((subValue, i) => <span key={i}>{subValue}</span>)
                                        ) : (
                                            Object.entries(value).map(([subKey, subValue]) => (
                                                <span key={subKey}>{subValue}</span>
                                            ))
                                        )
                                    ) : (
                                        value.toString()
                                    )}
                                </p>
                            </li>
                        );
                    })
                }
            </ul>
            <div className='inline-block sm:hidden w-full'>
                <h1 className='text-center text-xl font-normal mb-4'>Best VPN for</h1>
                <div className='w-full flex justify-center gap-8 mb-8'>
                    <div className='w-fit h-fit'>
                        <div className='border-[5px] border-[#9BA3A7] rounded-full w-[80px] aspect-square relative p-4 flex justify-center items-center'>
                            <img src='/icons/privacy-logo.png' alt='privacy-logo' className='w-[20px] h-auto'/>
                            <div className='border-[3px] border-[#9BA3A7] rounded-full aspect-square absolute bottom-[-15px] mx-auto bg-white p-1'>
                                <img src='/icons/check.png' alt='check-logo' className='w-[15px] h-auto'/>
                            </div>
                        </div>
                        <p>Privacy</p>
                    </div>
                    <div className=''>
                        <div className='border-[5px] border-[#9BA3A7] rounded-full w-[80px] aspect-square relative p-4 flex justify-center items-center'>
                            <img src='/icons/speed-logo.png' alt='speed-logo' className='w-[30px] h-auto'/>
                            <div className='border-[3px] border-[#9BA3A7] rounded-full aspect-square absolute bottom-[-15px] mx-auto bg-white p-1'>
                                <img src='/icons/check.png' alt='check-logo' className='w-[15px] h-auto'/>
                            </div>
                        </div>
                        <p>Speed</p>
                    </div>
                </div>
                <h1 className='text-center text-xl font-normal mb-2'>Starting Price</h1>
                <h1 className='text-center text-3xl font-normal text-[#266BA9] mb-1'>$6.67</h1>
                <p className='text-center text-sm font-thin mb-2'>per month</p>
            </div>
            <div className='inline-block w-full sm:w-fit'>
                <Link href={data?.href} className='flex items-center justify-center bg-[#E64A19] py-2 px-4 shadow-lg rounded-lg'>
                    <span className='text-white'>
                        Visit Website
                    </span>
                    <MdKeyboardArrowRight color='#ffffff'/>
                </Link>
                <Link href={data.href} className='hidden lg:block underline text-slate-500 decoration-[0.5px] decoration-slate-500 text-sm text-center mt-4'>
                    {data.href}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default VpnContainer
