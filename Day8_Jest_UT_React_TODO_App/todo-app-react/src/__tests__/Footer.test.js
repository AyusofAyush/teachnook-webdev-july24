import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

//snapshot testing
test('renders the footer with copyright text', () => {
  render(<Footer />);
  
  const footerElement = screen.getByText(/© 2024 todo app/i);
  
  expect(footerElement).toBeInTheDocument();
});
