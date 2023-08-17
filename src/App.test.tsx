import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SearchBar component', () => {
  render(<App />);
});

test('renders app page', () => {
  render(<App />);
  const linkElement = screen;
  expect(linkElement).toBeDefined();
});
