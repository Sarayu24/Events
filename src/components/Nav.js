import './Nav.css';

export default function NavMenu(props) {
	const sidebar = (
	  <ul className='Nav'>
		{props.Items.map((Item) =>
		  <li key={Item.id}><a href=''>
			{Item.title}
			</a></li>
		)}
	  </ul>
	);
	
	return (
	  <div>
		{sidebar}
		
	  </div>
	);
  } 
  


