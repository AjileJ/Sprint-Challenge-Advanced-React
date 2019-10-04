import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Players from './Players';
import Dark from './Dark';
import {useDarkMode} from './useDarkMode'





it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('The word was found', () => {
  const { getByText } = render(<App />);
  getByText(/players/i);
});


it('renders Dark component', () => {
  render(<Dark />);
 
});
it('renders useDarkMode component', () => {
  render(<useDarkMode />);
 
});














