import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const title = React.createElement(
//     'h1',
//     { id: 'main-title' },
//     'My first React Element!'
// );

// const title = 'My First React Element!';
const myTitleID = 'main-title';
const name = 'Ryan';
// const desc = React.createElement(
//     'p',
//     null,
//     'I just learned how to create a React node and render it into the DOM.'
// );

const desc = 'I just learned how to create a React node and render it into the DOM.';

// const header = React.createElement(
//   'header',
//   null,
//   title,
//   desc
// );

const header = (
    <header>
        <h1 id={ myTitleID }>{ name }'s First React Element!</h1>
        <p>{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('treehouse')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
