import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false
    };
    const shortBlurb = (<div className="blurb">Can't decide what to do on your outing to London? Want to show a friend the quirkiest places in the city? Let us tell you.</div>);
    const longBlurb = (<div className="blurb">
      <div>Having a night out in London and want to find somewhere <span>fun</span>? Somewhere <span>different</span>? Somewhere <span>unique</span>? Somewhere "<span>London</span>"?</div>
      <div>Don't fret or spend hours researching, let us help you out with somewhere fun to play, somewhere delicious to eat and somewhere unique to drink.</div>
    </div>);
    this.blurb = Math.random() >= 0.5 ? shortBlurb : longBlurb;
    this.drink = this.chooseDrink();
    this.eat = this.chooseEat();
    this.play = this.choosePlay();
  }

  chooseDrink() {
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

    return random(drinks);
  }

  chooseEat() {
    const eats = [
      { name: 'Bel Canto', href: 'https://www.belcantolondon.co.uk/' },
      { name: 'Bustronome', href: 'https://www.bustronome.com/en/london/' },
      { name: 'Dans Le Noir', href: 'https://london.danslenoir.com/en/home/' },
      { name: 'Hawksmoor', href: 'https://thehawksmoor.com/' },
      { name: 'The Clink', href: 'https://theclinkcharity.org/restaurants/brixton' },
      { name: 'The Jam', href: 'https://www.thejamrestaurant.com/' }
    ];

    return random(eats);
  }

  choosePlay() {
    const plays = [
      { name: 'Bounce', href: 'https://www.bouncepingpong.com/' },
      { name: 'Flight Club', href: 'https://flightclubdarts.com/london/' },
      { name: 'The Four Quarters', href: 'http://geocities.fourquartersbar.co.uk/' },
      { name: 'London Shuffle', href: 'https://www.londonshuffle.com/' },
      { name: 'Queens', href: 'https://queens.london/' },
      { name: 'Swingers', href: 'https://swingersldn.com/home/' },
      { name: 'Whistle Punks', href: 'https://www.whistlepunks.com/' }
    ];

    return random(plays);
  }

  render() {
    return (
      <div className="App">
        <h1>Something London</h1>
        <div className={this.state.showResults ? 'hidden row first' : 'row first'}>
          {this.blurb}
          <button onClick={() => {
            this.setState({ showResults: true })
          }}>Choose!
          </button>
        </div>
        <div className={this.state.showResults ? 'row second' : 'hidden row second'}>
          <div className="column">
            <div>
              <h2>play</h2>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={this.play.href} className="selection link">{this.play.name}</a>
          </div>
          <div className="column">
            <div>
              <h2>eat</h2>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={this.eat.href} className="selection link">{this.eat.name}</a>
          </div>
          <div className="column">
            <div>
              <h2>drink</h2>
            </div>
            <a target="_blank" rel="noopener noreferrer" href={this.drink.href} className="selection link">{this.drink.name}</a>
          </div>
        </div>
        <footer>
          <a href="https://votemike.co.uk" className="link">Contact</a>
        </footer>
      </div>
    );
  }
}

function random(list) {
    return list[Math.floor((Math.random()*list.length))];
}

export default App;
