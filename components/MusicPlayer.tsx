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
    title: "Location",
    artist: "Dave, Burna Boy",
    file: "/waitlistMusic/3. Location by Dave ft. Burna Boy.mp3",
  },
  {
    title: "Pixelated Kisses",
    artist: "Joji",
    file: "/waitlistMusic/3. Pixelated kisses by Joji.mp3",
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
    title: "105°C的你",
    artist: "",
    file: "/waitlistMusic/7. 热爱105°C的你 by 阿肆 .mp3",
  },
  {
    title: "We Stayed Up All Night",
    artist: "Unknown",
    file: "/waitlistMusic/8. We stayed up all night by Tourist.mp3",
  },
  {
    title: "Etuede gis-Moll (La Campanella)",
    artist: "Eugen Cicero",
    file: "/waitlistMusic/9. Etuede gis-Moll (La Campanella) by Eugen Cicero.mp3",
  },
  {
    title: "BAILE INOLVIDABLE",
    artist: "Bad Bunny",
    file: "/waitlistMusic/10. BAILE INoLVIDABLE by Bad Bunny 4.mp3",
  },
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set initial volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle play/pause state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.log("Play failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  // Autoplay after first user interaction
  useEffect(() => {
    const handleFirstInteraction = async () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          console.log("✅ Autoplay started after user interaction");
        } catch (error) {
          console.log("❌ Autoplay failed:", error);
          setIsPlaying(false);
        }
      }
    };

    // Listen for any user interaction (click, scroll, or keypress)
    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("scroll", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("scroll", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted]);

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
            className={`player-btn heart-btn ${isPlaying ? "favorited" : ""}`}
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
          >
            ♥
          </button>

          <button className="player-btn" onClick={playNext} title="Next">
            &gt;&gt;
          </button>
        </div>

        <div className="player-info">
          <p className="song-title">{tracks[currentTrack].title}</p>
          <p className="song-artist">{tracks[currentTrack].artist}</p>
        </div>

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
