import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to React!/i);
  expect(linkElement).toBeInTheDocument();
});
