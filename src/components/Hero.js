
import './Hero.css'

export default function HeroSection() {
	let pageTitle = "BuySound.";
	
	return (
	  <div className='Hero_section'>
		<h1 className='title'>Welcome to {pageTitle}</h1>
		<p>Never worry about missing an event ever again! <br/>
            One of the best ticket sites in terms of diversity to top events from all over the world.</p>
		    <button onclick className='hero_btn'>Learn More</button>
		
	  </div>
	);
  } 