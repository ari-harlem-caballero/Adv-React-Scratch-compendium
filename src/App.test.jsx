// check list displays, loading
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render out a list of Ghibli films', async () => {
    render(<App />)

    // loading message
    screen.getByText(/loading/i);

    // loads film --- 10 films per page
    const film = await screen.findByText(/list/i);

    expect(film).toBeInTheDocument();
  })
})