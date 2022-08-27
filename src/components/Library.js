import React from "react";
import LibrarySong from "./LibrarySong";
import {
  LibraryContainer,
  InputSearch,
  FilterCust,
} from "../styles/Library.styled";
import { useState } from "react";

const Library = ({ songs, setCurrentSong, currentSong, libraryStatus }) => {
  const [inputSearch, setInputSearch] = useState("");

  const filtered = songs.filter((value) => {
    if (
      inputSearch === "" ||
      value.name.toLowerCase().includes(inputSearch) ||
      value.artist.toLowerCase().includes(inputSearch)
    ) {
      return value;
    }
  });

  return (
    <LibraryContainer libraryStatus={libraryStatus}>
      <h2>Librería</h2>

      <InputSearch
        type="text"
        placeholder="Search..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />

      {filtered.map((song) => (
        <LibrarySong
          key={song.id}
          song={song}
          setCurrentSong={setCurrentSong}
          currentSong={currentSong}
        />
      ))}

      {!filtered.length && (
        <FilterCust>{`Sin resultados para "${inputSearch}"`}</FilterCust>
      )}
    </LibraryContainer>
  );
};

export default Library;
