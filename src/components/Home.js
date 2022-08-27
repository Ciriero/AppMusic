import Play from "./Play";
import Song from "./Song";
import data from "../data";
import { useState } from "react";
import Library from "./Library";
import Nav from "./Nav";
import { MainApp } from "../styles/Library.styled";

const Home = () => {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsplaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <MainApp libraryStatus={libraryStatus}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        libraryStatus={libraryStatus}
      />
      <Song currentSong={currentSong} />
      <Play
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsplaying={setIsplaying}
        songs={songs}
      />
    </MainApp>
  );
};

export default Home;
