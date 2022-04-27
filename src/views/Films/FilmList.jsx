// useEffect/state
import { useEffect, useState } from "react";

export default function FilmList() {
  // allFilms, loading, search, results(filtered)
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  // event: search .filter
  const filmList = search.length ? results : films;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filteredFilms = films.filter((film) => film.title
      .toLowerCase()
      .includes(e.target.value.toLowerCase().trim())
    );
    setResults(filteredFilms);
  };

  // useEffect: fetch api, setData, map (id, img, title)
  useEffect(() => {
    const fetchFilms = async () => {
      const res = await fetch('https://ghibliapi.herokuapp.com/films');
      const json = await res.json();
      const filmInfo = json.map((film) => ({
        id: film.id,
        image: film.image,
        title: `${film.title} (${film.release_date})`
      }))
      
      setFilms(filmInfo);
      setLoading(false);
    };

    fetchFilms();
  }, []);
  // return html, search bar, mapped list
  return (
    <>
      {loading ? (
        <p>page loading...</p>
      ) : (
        <>
          <input 
            placeholder="Search for a film" 
            value={search}
            onChange={(e) => {handleSearch(e)}}
          />
          <ul>
            {films.map((film) => {
              return <li>
                <img src={film.image} alt={film.title}/>
                <h3>{film.title}</h3>
              </li>;
            })}
          </ul>
        </>
      )}
    </>
  )
}