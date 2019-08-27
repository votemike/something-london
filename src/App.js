import React from 'react';
import './App.css';

function App() {

  const plays = [
      { name: 'Bounce', href: 'https://www.bouncepingpong.com/' },
      { name: 'Flight Club', href: 'https://flightclubdarts.com/london/' },
      { name: 'The Four Quarters', href: 'http://geocities.fourquartersbar.co.uk/' },
      { name: 'London Shuffle', href: 'https://www.londonshuffle.com/' },
      { name: 'Queens', href: 'https://queens.london/' },
      { name: 'Swingers', href: 'https://swingersldn.com/home/' },
      { name: 'Whistle Punks', href: 'https://www.whistlepunks.com/' }
  ];
  const eats = [
      { name: 'Bel Canto', href: 'https://www.belcantolondon.co.uk/' },
      { name: 'Bustronome', href: 'https://www.bustronome.com/en/london/' },
      { name: 'Dans Le Noir', href: 'https://london.danslenoir.com/en/home/' },
      { name: 'Hawksmoor', href: 'https://thehawksmoor.com/' },
      { name: 'The Clink', href: 'https://theclinkcharity.org/restaurants/brixton' },
      { name: 'The Jam', href: 'https://www.thejamrestaurant.com/' }
  ];
  const drinks = [
      { name: 'ABQ', href: 'https://abqlondon.com/abq-london' },
      { name: 'Ballie Ballerson', href: 'https://www.ballieballerson.com/' },
      { name: 'Bobby Fitzpatrick', href: 'https://www.bobbyf.co.uk/' },
      { name: 'Cahoots', href: 'https://www.cahoots-london.com/' },
      { name: 'Evans & Peel Detective Agency', href: 'http://www.evansandpeel.com/Appointments-Detectives' },
      { name: 'Little Nan\'s Bar', href: 'https://www.littlenans.co.uk/' },
      { name: 'Sky Garden', href: 'https://skygarden.london/' },
      { name: 'WC', href: 'http://www.wcclapham.co.uk/' }
  ];
  const play = random(plays);
  const eat = random(eats);
  const drink = random(drinks);

  return (
    <div className="App">
      <header className="App-header">
          <div className="row">
              <div className="column">
                  <div>
                    <h2>play</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href={play.href} className="selection">{play.name}</a>
              </div>
              <div className="column">
                  <div>
                      <h2>eat</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href={eat.href} className="selection">{eat.name}</a>
              </div>
              <div className="column">
                  <div>
                      <h2>drink</h2>
                  </div>
                  <a target="_blank" rel="noopener noreferrer" href={drink.href} className="selection">{drink.name}</a>
              </div>
          </div>
      </header>
    </div>
  );
}

function random(list) {
    return list[Math.floor((Math.random()*list.length))];
}

export default App;
