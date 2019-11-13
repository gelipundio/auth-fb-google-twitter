import React from 'react';
import './App.css';

// import FacebookAuth from './components/auth/FacebookAuth'
// import GoogleAuth from './components/auth/GoogleAuth'
import TwitterAuth from './components/auth/TwitterAuth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FacebookAuth /> */}
        {/* <GoogleAuth /> */}
        <TwitterAuth />
      </header>
    </div>
  );
}

export default App;
