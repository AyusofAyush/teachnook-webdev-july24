import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders the header with title', () => {
  render(<Header />);
  
  const headerElement = screen.getByText(/todo list/i);
  
  expect(headerElement).toBeInTheDocument();
});
