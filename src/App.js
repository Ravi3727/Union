import './App.css';
import HeroSection from './components/HeroSection';
import HeroCardSection from './components/HeroCardSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import VideoFeedCard from './components/VideoFeedCard';
AOS.init();


function App() {
  return <>
    <div className='h-full w-full bg-blue-400 select-none flex flex-col gap-3'>
      <div className='h-screen w-8/12 flex justify-center items-center mx-auto bg-blue-400'>
        <HeroSection />
      </div>
      <div className='w-11/12 ml-16 mt-3'>

        <HeroCardSection />
      </div>
      <div className='w-11/12 ml-16 mt-3'>

        <VideoFeedCard />
      </div>
    </div>
  </>
}

export default App;