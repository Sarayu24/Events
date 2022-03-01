
import './App.css';
import Events from './components/Events';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import NavMenu from './components/Nav';




export default function App() {
 
  
  const Items = [
    {id: 1, title: 'Home'},
    {id: 2, title: 'About'},
    {id: 3, title: 'Events'},
    {id: 4, title: 'Tickets'}

  ]; 
  return(
<div className='App'>
<NavMenu Items={Items}/> 
<HeroSection />
<Events />
<Footer />

</div>
  );
}
