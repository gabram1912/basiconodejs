import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const name = 'Gordi'
const element = React.createElement('h1', {}, `Hola soy ${name}`);

// //Van expresiones
// const jsx = (
//   <div>
//     <h1>Hola, soy Gabriel</h1>
//     <p>Soy Ingeniero Frontenddd</p>
//   </div>
// );

const container = document.getElementById('app');

//(que =>elemento, donde=> container)
ReactDOM.render(<Badge />, container);