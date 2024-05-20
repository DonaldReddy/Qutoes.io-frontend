import React from "react";
import Styles from "./Filter.module.css";
import { useSearchParams } from "react-router-dom";

function Filter() {

  const [searchParams, setSearchParams] = useSearchParams();

  const genresArr = ["motivational", "love", "friendship", "sad", "happy", "Anime", "Movies", "Devotional"]
  const sortBy = ["Latest", "Oldest", "Most-liked"];

  const handleGenre = (e) => {
    e.preventDefault();
    setSearchParams((prev) => {
      prev.set("genre", e.target.getAttribute("data-value").toLowerCase())
      return prev;
    });
  }

  return (

    <div id={Styles["container"]}>

      <section id={Styles["genres"]}>
        <h3>Genres</h3>
        <hr />
        <ul>
          {genresArr.map((value, idx) => (
            <li key={idx} className={Styles['genre-items']} data-value={value} onClick={handleGenre}>{value}</li>
          ))}
        </ul>
      </section>

      <section id={Styles["sort-by"]}>
        <h3>Sort-By</h3>
        <hr />
        {
          sortBy.map((value, idx) => (
            <label htmlFor={Styles[value]} key={idx}>
              <input type="radio" id={Styles[value]} name="choice" /> {value}
            </label>
          ))
        }
      </section>

    </div>
  );
}

export default Filter;
