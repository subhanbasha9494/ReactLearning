
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';


test('renders Contact page', () => {
  render(<Contact />);
  expect(screen.getByText('Contact Us')).toBeInTheDocument();
  expect(screen.getByText('This is the Contact page')).toBeInTheDocument();
});
