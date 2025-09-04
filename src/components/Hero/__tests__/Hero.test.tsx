import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText(/SOMOS UN PUENTE/)).toBeInTheDocument();
    expect(screen.getByText(/ENTRE LA CIUDAD/)).toBeInTheDocument();
    expect(screen.getByText(/Y LA NATURALEZA/)).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<Hero />);
    expect(screen.getByText(/Una propuesta ideal para disfrutar/)).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    render(<Hero />);
    expect(screen.getByText('VIAJA CON NOSOTROS')).toBeInTheDocument();
    expect(screen.getByText('VER EXPERIENCIAS')).toBeInTheDocument();
  });
});
