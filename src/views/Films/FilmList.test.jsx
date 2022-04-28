// check search functions, loading
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilmList from './FilmList';

describe('Film List', () => {
  // const film = {
  //   title: 'Castle in the Sky',
  //   release_date: 1986,
  //   imageURL: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg'
  // };

  it('should render a list of films and filter through them', async () => {
    render(<FilmList />)

    // loading
    await waitForElementToBeRemoved(screen.getByText(/loading/i));

    // find film
    // await screen.findByText('Castle in the Sky (1986)');

    // find search bar
    const search = screen.getByPlaceholderText('Search for a film');

    // search for film
    userEvent.type(search, 'castle');

    // result returned
    // return waitFor(() => {
    //   const result = screen.getByText('Castle in the Sky');
    //   screen.debug();
    // })
    const result = await screen.findByText('Castle in the Sky (1986)');
    expect(result.textContent).toEqual('Castle in the Sky (1986)');
  })
})