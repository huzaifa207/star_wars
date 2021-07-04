import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import DetailsItem from "./DetailsItem";

const FilmDetails = ({ data }) => {
  let [characters, setCharacters] = useState([]);
  let [planets, setPlanets] = useState([]);
  let [starships, setStarships] = useState([]);
  let [vehicles, setVehicles] = useState([]);
  let [species, setSpecies] = useState([]);
  let [loading, setLoading] = useState(true);

  const fetch_data = useCallback(() => {
    setLoading(true);

    data.characters.forEach((character) => {
      fetch(character)
        .then((response) => response.json())
        .then((data) => {
          setCharacters((characters) => [...characters, data.name]);
        });
    });

    data.planets.forEach((planet) => {
      fetch(planet)
        .then((response) => response.json())
        .then((data) => {
          setPlanets((planets) => [...planets, data.name]);
        });
    });

    data.starships.forEach((starship) => {
      fetch(starship)
        .then((response) => response.json())
        .then((data) => {
          setStarships((starships) => [...starships, data.name]);
        });
    });

    data.vehicles.forEach((vehicle) => {
      fetch(vehicle)
        .then((response) => response.json())
        .then((data) => {
          setVehicles((vehicles) => [...vehicles, data.name]);
        });
    });

    data.species.forEach((specie) => {
      fetch(specie)
        .then((response) => response.json())
        .then((data) => {
          setSpecies((species) => [...species, data.name]);
        });
    });

    setLoading(false);
  }, [data]);

  useEffect(() => {
    fetch_data();
  }, [fetch_data]);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>Characters</h1>
          {characters.map((character, index) => (
            <DetailsItem name={character} key={index} />
          ))}

          <h1>Planets</h1>
          {planets.map((planet, index) => (
            <DetailsItem name={planet} key={index} />
          ))}

          <h1>Starships</h1>
          {starships.map((starship, index) => (
            <DetailsItem name={starship} key={index} />
          ))}

          <h1>Vehicles</h1>
          {vehicles.map((vehicle, index) => (
            <DetailsItem name={vehicle} key={index} />
          ))}

          <h1>Species</h1>
          {species.map((specie, index) => (
            <DetailsItem name={specie} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

FilmDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

FilmDetails.defaultProps = {
  data: {
    title: "Film",
    episode_id: 0,
    opening_crawl: "opening",
    director: "director",
    producer: "producer",
    release_date: "release_date",
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
  },
};

export default FilmDetails;
