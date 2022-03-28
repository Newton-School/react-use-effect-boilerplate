import React, { useEffect, useState } from 'react';
import '../styles/App.css';


const App = () => {
  const [message, setMessage] = useState('Starting message');
  useEffect(() => {
    document.getElementById('message').innerText = message;
  }, [message]);

  return (
    <div id="main">
      <h3>Current Message: </h3><h2 id="message"></h2>
      <hr />
      <h3>Change Message:</h3>
      <input type="text" onChange={(e) => setMessage(e.target.value)} />
    </div>
  )
}


export default App;
