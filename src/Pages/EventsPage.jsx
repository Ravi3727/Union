import React from 'react'
import EventCard from '../components/EventCard'

const EventsPage = () => {
  return (
    <div style={{ backgroundColor: 'black' }} className='container mx-auto'>
      <div className='h-20 block text-white text-center pt-8'>Navbar</div>
      
      <div className='flex mt-3 flex-wrap justify-center'>
        {[...Array(8)].map((_, index) => (
          <div key={index} className='mx-5 my-5'>
            <EventCard />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsPage