"use client";

import { useState, useRef, useEffect } from "react";

interface Track {
  title: string;
  artist: string;
  file: string;
}

const tracks: Track[] = [
  {
    title: "360",
    artist: "Charli XCX",
    file: "/waitlistMusic/0. 360 by Charli XCX.mp3",
  },
  {
    title: "Location",
    artist: "Dave, Burna Boy",
    file: "/waitlistMusic/9. Location by Dave ft. Burna Boy.mp3",
  },
  {
    title: "Adore You",
    artist: "Fred Again",
    file: "/waitlistMusic/1. Adore you by Fred Again 4.mp3",
  },
  {
    title: "Take Me to Your Leader",
    artist: "Walket and Royce",
    file: "/waitlistMusic/2. Take me to your leader by Walker and Royce.mp3",
  },
  {
    title: "Pixelated Kisses",
    artist: "Joji",
    file: "/waitlistMusic/3. Pixelated kisses by Joji.mp3",
  },
  {
    title: "Yellow",
    artist: "Wisp",
    file: "/waitlistMusic/4. Yellow (cover) by Wisp.mp3",
  },
  {
    title: "Лабиринт",
    artist: "Unknown",
    file: "/waitlistMusic/5. Лабиринт by FACE.mp3",
  },
  {
    title: "Just Keep Watching",
    artist: "F1® The Movie",
    file: "/waitlistMusic/6. Just Keep Watching (From F1® The Movie) by Tate Mcrae.mp3",
  },
  {
    title: "Way of Life",
    artist: "Unknown",
    file: "/waitlistMusic/7. Way of Life by Brock Berrigan.mp3",
  },
  {
    title: "We Stayed Up All Night",
    artist: "Unknown",
    file: "/waitlistMusic/8. We stayed up all night by Tourist.mp3",
  },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  const playPrevious = () => {
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev === tracks.length - 1 ? 0 : prev + 1));
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleTrackEnd = () => {
    playNext();
  };

  return (
    <>
      <div className="music-player">
        <audio
          ref={audioRef}
          src={tracks[currentTrack].file}
          onEnded={handleTrackEnd}
        />

        <div className="player-controls">
          <button
            className="player-btn"
            onClick={playPrevious}
            title="Previous"
          >
            &lt;&lt;
          </button>

          <button
            className={`player-btn heart-btn ${isFavorite ? "favorited" : ""}`}
            onClick={toggleFavorite}
            title="Favorite"
          >
            ♥
          </button>

          <button className="player-btn" onClick={playNext} title="Next">
            &gt;&gt;
          </button>
        </div>

        <button
          className="player-info"
          onClick={togglePlay}
          title={isPlaying ? "Pause" : "Play"}
        >
          <span className="song-title">{tracks[currentTrack].title}</span>
          <span className="song-artist">{tracks[currentTrack].artist}</span>
        </button>

        <button
          className="playlist-btn"
          onClick={() => setShowPlaylist(!showPlaylist)}
          title="Playlist"
        >
          <div className="playlist-icon">
            <div className="playlist-line"></div>
            <div className="playlist-line"></div>
            <div className="playlist-line"></div>
          </div>
        </button>

        <div className="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="volume-slider"
          />
          <button
            className="volume-icon"
            onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
          >
            🔊
          </button>
        </div>
      </div>

      {showPlaylist && (
        <div className="playlist-dropdown">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`playlist-item ${
                index === currentTrack ? "active" : ""
              }`}
              onClick={() => {
                setCurrentTrack(index);
                setIsPlaying(true);
              }}
            >
              <span className="playlist-number">{index + 1}.</span>
              <span className="playlist-track-title">{track.title}</span>
              <span className="playlist-track-artist">{track.artist}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
