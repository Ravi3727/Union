import './App.css';
import HeroSection from './components/HeroSection';
import HeroCardSection from './components/HeroCardSection';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


function App() {
  return <>
    <div className='h-full w-full bg-blue-400'>
      <div className='h-screen w-8/12 flex justify-center items-center mx-auto bg-blue-400'>
        <HeroSection />
      </div>
      <div className='w-11/12 ml-16 mt-3'>

        <HeroCardSection />
      </div>
    </div>
  </>
}

export default App;
