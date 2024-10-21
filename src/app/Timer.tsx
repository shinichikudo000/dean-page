import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState({
        hour: 24,
        minute: 0,
        second: 0,
    });

    useEffect(() => {
        function updateTime() {
            setTime(prevTime => {
                let { hour, minute, second } = prevTime;

                if (second > 0) {
                    second--;
                } else if (minute > 0) {
                    minute--;
                    second = 59;
                } else if (hour > 0) {
                    hour--;
                    minute = 59;
                    second = 59;
                }

                return { hour, minute, second };
            });
        }

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);
  return (
    <div className="">
        <div id="timer-container">
            <div className='timer-hours'>
                <h2 className='text-lg font-semibold'>Hours</h2>
                <div className='card'>
                    <div className="timer-card">
                        <div className="top-card" id="hour-container-1-top">{Math.floor(time.hour / 10)}</div>
                        <div className="bottom-card" id="hour-container-1-bottom">{Math.floor(time.hour / 10)}</div>
                    </div>
                    <div className="timer-card">
                        <div className="top-card" id="hour-container-2-top">{time.hour % 10}</div>
                        <div className="bottom-card" id="hour-container-2-bottom">{time.hour % 10}</div>
                    </div>
                </div>
            </div>
            <img src='/icons/colon.png' alt='colon' className='colon'/>
            <div className='clock-minutes'>
                <h2 className='text-lg font-semibold'>Minutes</h2>
                <div className='card'>
                    <div className="timer-card">
                        <div className="top-card" id="min-container-1-top">{Math.floor(time.minute / 10)}</div>
                        <div className="bottom-card" id="min-container-1-bottom">{Math.floor(time.minute / 10)}</div>
                    </div>
                    <div className="timer-card">
                        <div className="top-card" id="min-container-2-top">{time.minute % 10}</div>
                        <div className="bottom-card" id="min-container-2-bottom">{time.minute % 10}</div>
                    </div>
                </div>
            </div>
            <img src='/icons/colon.png' alt='colon' className='colon'/>
            <div className='timer-seconds'>
                <h2 className='text-lg font-semibold'>Seconds</h2>
                <div className='card'>
                    <div className="timer-card">
                        <div className="top-card" id="sec-container-1-top">{Math.floor(time.second / 10)}</div>
                        <div className="bottom-card" id="sec-container-1-bottom">{Math.floor(time.second / 10)}</div>
                    </div>
                    <div className="timer-card">
                        <div className="top-card" id="hour-container-2-top">{time.second % 10}</div>
                        <div className="bottom-card" id="sec-container-2-bottom">{time.second % 10}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timer