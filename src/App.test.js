import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders body', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Do NOT click it!/i);
  expect(linkElement).toBeInTheDocument();
});
