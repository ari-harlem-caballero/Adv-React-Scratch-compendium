// useEffect/state
import { useEffect, useState } from "react";

export default function FilmList() {
  // allFilms, loading, search, results(filtered)
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  // event: search .filter
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
      console.log(filmInfo);
    };

    fetchFilms();
  })
  // return html, search bar, mapped list
  return (
    <>
      {loading ? (
        <p>page loading...</p>
      ) : (
        <ul>
          {films.map((film) => {
            return <li>{film.title}</li>;
          })}
        </ul>
      )}
    </>
  )
}