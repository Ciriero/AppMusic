import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayContainer,
  TimeContainer,
  ControlContainer,
  IconPlay,
} from "../styles/Play.styled";
import { useRef } from "react";
import { useState } from "react";

const Play = ({
  currentSong,
  isPlaying,
  setIsplaying,
  songs,
  setCurrentSong,
}) => {
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
  });

  const audioRef = useRef(null);

  const handlePlaySong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isPlaying);
  };

  const handleTimeSong = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration || 0;

    setSongInfo({ ...songInfo, current: currentTime, duration });
  };

  const getTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, "0");
    return `${minutes}:${secondsWithZero}`;
  };

  const dragInput = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, current: e.target.value });
  };

  const autoPlay = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const backForward = (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      setCurrentSong(
        songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]
      );
    }
    if (direction === "back") {
      setCurrentSong(
        songs[currentIndex === 0 ? songs.length - 1 : currentIndex - 1]
      );
    }
  };

  const automaticPlay = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    setCurrentSong(
      songs[currentIndex + 1 === songs.length ? 0 : currentIndex + 1]
    );
    autoPlay();
  };

  return (
    <PlayContainer>
      <TimeContainer>
        <p>{getTime(songInfo.current)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.current}
          onChange={dragInput}
        />
        <p>{getTime(songInfo.duration)}</p>
      </TimeContainer>
      <ControlContainer>
        <IconPlay
          size="2x"
          icon={faAngleLeft}
          onClick={() => backForward("back")}
        />
        <IconPlay
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={handlePlaySong}
        />
        <IconPlay
          size="2x"
          icon={faAngleRight}
          onClick={() => backForward("forward")}
        />
      </ControlContainer>
      <audio
        onTimeUpdate={handleTimeSong}
        onLoadedMetadata={handleTimeSong}
        onLoadedData={autoPlay}
        onEnded={automaticPlay}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </PlayContainer>
  );
};

export default Play;
