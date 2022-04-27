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