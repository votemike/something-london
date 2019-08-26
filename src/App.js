import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="row">
              <div className="column">
                  <div>
                    <h2>play</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://swingersldn.com/home/" className="selection">Swingers</a>
              </div>
              <div className="column">
                  <div>
                      <h2>eat</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://thehawksmoor.com/" className="selection">Hawksmoor</a>
              </div>
              <div className="column">
                  <div>
                      <h2>drink</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.ballieballerson.com/" className="selection">Ballie Ballerson</a>
              </div>
          </div>
      </header>
    </div>
  );
}

export default App;
