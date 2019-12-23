import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className='stats'>Players: { props.totalPlayers }</span>
        </header>
    );
};

const Player = (props) => {
    return (
      <div className='player'>
          <span className='player-name'>
              { props.playerName }
          </span>

          <Counter
              score={ props.score }
          />
      </div>

    );
};

const Counter = (props) => {
    return (
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className='counter-score'>{ props.score }</span>
            <button className='counter-action increment'> + </button>
        </div>
    );
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header
                title='Scoreboard'
                totalPlayers={1}
            />

            <Player
                playerName='Ryan'
                score={35}
            />
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
