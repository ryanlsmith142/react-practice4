import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'>Players: 1</span>
        </header>
    );
};

const Player = () => {
    return (
      <div className='player'>
          <span className='player-name'>
              Ryan
          </span>

          <Counter />
      </div>

    );
};

const Counter = () => {
    return (
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className='counter-score'>35</span>
            <button className='counter-action increment'> + </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header />

            <Player />
        </div>
    );
};
ReactDOM.render(
    <App />,
    document.getElementById('treehouse')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
