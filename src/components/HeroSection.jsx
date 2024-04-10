import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Button } from './ui/button';
AOS.init();
function HeroSection() {
    return (
        <div className=' h-full flex justify-center items-center flex-col gap-4'>
            <div  data-aos="fade-up"
        data-aos-duration="1000">
                <div className='text-6xl text-white font-bold leading-[1.5] mb-10 text-center'>
                    <h1>Welcome to Our Community of Skill Sharing and Artistic Inspiration...</h1>
                </div>

                <div className='text-2xl text-white font-semibold leading-1 ml-2'>
                    ...Connect, Share, and Learn with Like-Minded Peers and Mentors in a Creative Hub
                </div>
            </div>
            <div data-aos="fade-up"
        data-aos-duration="2000">
                <Button variant="secondary" className="text-purple-500 w-48 h-18 text-2xl font-semibold">Create Profile</Button>
            </div>
        </div>
    )
}

export default HeroSection