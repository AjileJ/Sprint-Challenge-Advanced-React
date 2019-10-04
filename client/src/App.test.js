import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';





it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('The word was found', () => {
  const { getByText } = render(<App />);
  getByText(/players/i);
});












