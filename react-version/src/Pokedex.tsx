import React, { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

// https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150
// https://pokeapi.co/api/v2/pokemon-species/#
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

type PokemonJSON = {
  name: string;
  url: string;
};

type Pokemon = {
  name: string;
  description: string;
  imgPath: string;
};

const getPokemonList = async () => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((response) => response.json());
  // console.log(data.results);
  return data.results;
};

const getPokemonDescription = async (url: string): Promise<string> => {
  const pokemon = await fetch(url).then((response) => response.json());
  return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, ' ');
};

const getPokemonSpriteUrl = (n: number) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${n}.png`;
};

export default function Pokedex() {
  const [pokemonJSONList, setPokemonJSONList] = useState<
    PokemonJSON[] | never[]
  >([]);
  const [currentPokemonIdx, setCurrentPokemonIdx] = useState<number>(0);
  useEffect(() => {
    const getData = async () => {
      const list = await getPokemonList();
      setPokemonJSONList(list);
    };
    getData();
  }, [getPokemonList, setPokemonJSONList]);
  console.log(pokemonJSONList);
  return (
    <div>
      <select name="pokemon" id="pokemon">
        {pokemonJSONList.map((pokemon, idx) => {
          return (
            <option key={idx} value={idx}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
