import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

const players = [

    {
        id: 1,
       name: 'Ryan',
       score: '50'
    },
    {
        id: 2,
        name: 'Jennie',
        score: '35'
    },
    {
        id: 3,
        name: 'Ben',
        score: '41'
    },
    {
        id: 4,
        name: 'Paul',
        score: '10'
    }

];

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
              { props.name }
          </span>

          <Counter
              score={ props.score }
          />
      </div>

    );
};

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
    };

    decrementScore = () => {
        this.setState({
           score: this.state.score -1
        });
    };

    render() {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={this.decrementScore}> - </button>
                <span className='counter-score'>{ this.state.score }</span>
                <button className='counter-action increment' onClick={this.incrementScore}> + </button>
            </div>
        );
    }
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                title='Scoreboard'
                totalPlayers={props.initialPlayers.length}
            />

            {props.initialPlayers.map( player =>
                <Player
                    name={player.name}
                    key={player.id.toString()}
                />
            )}
        </div>
    );
};

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('treehouse')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
