import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      
      <button onClick={incrementCount} className='hero_btn'>Buy Tickets</button>
      <p> {count} </p>
    </div>
  )
}

export default Counter;

