
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddFilm = () => {
  const [annee, setAnnee] = useState("");
  const [movies, setMovies] = useState([]);
  const [note, setNote] = useState("");
  const [titre, setTitre] = useState("");


    const BASE_FILMS_URL = "http://localhost:3004/films";

  const fetchMovies = async () => {
    const response = await fetch(`${BASE_FILMS_URL}/all`);
    const data = await response.json();
    return data;
  };

  const addMovie = async (movie) => {
    const response = await axios.post(`${BASE_FILMS_URL}/add`, movie);
    return response.data;
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMovies();
      setMovies(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const movie = {
        titre,
        annee,
        note,
      };
      const data = await addMovie(movie);
      alert("Film ajouté avec succès!");
      setMovies([...movies, data]);
      setTitre("");
      setAnnee("");
      setNote("");
    } catch (error) {
      console.error("Erreur lors de l'ajout du film:", error);
      alert("Erreur lors de la soumission. Veuillez réessayer.");
    }
  };

  return (
    <div>
      <h2>Ajouter un Film</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            type="text"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Année :</label>
          <input
            type="number"
            value={annee}
            onChange={(e) => setAnnee(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Note :</label>
          <input
            type="number"
            min="0"
            max="5"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>

      <h2>Films:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <strong>Titre : {movie.titre}</strong> Année : {movie.annee}, Note: {movie.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddFilm;