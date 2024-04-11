import React from 'react'
import FeedCard from '../components/FeedCard'
import FeedsDrawer from '../components/FeedsDrawer'

const FeedsPage = () => {
    return (
        // <div className='bg-black'>

        <div style={{ backgroundColor: 'black' }} className='container mx-auto'>
            <div className='h-20 block text-white text-center pt-8'>Navbar</div>
            <FeedsDrawer />
            <div className='flex mt-12 flex-wrap justify-center'>
                {[...Array(8)].map((_, index) => (
                    <div key={index} className='mx-5 my-5'>
                        <FeedCard />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeedsPage