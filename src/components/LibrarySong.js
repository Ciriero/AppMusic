import React, { useState } from "react";
import { LibrarySongsCont, Paragrap } from "../styles/Library.styled";

const LibrarySong = ({ song, setCurrentSong, currentSong }) => {
  const handleClicSong = () => {
    setCurrentSong(song);
  };

  return (
    <LibrarySongsCont
      onClick={handleClicSong}
      song={`${song.id === currentSong.id ? song : ""}`}
    >
      <img src={song.cover} alt="" />
      <div>
        <Paragrap>{song.name}</Paragrap>
        <Paragrap>{song.artist}</Paragrap>
      </div>
    </LibrarySongsCont>
  );
};

export default LibrarySong;
