import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useRef, useEffect } from "react";

export const SongCard = ({ song, isPlaying, activeSong}) => {
  const dispatch = useDispatch();
  const audioRef = useRef(null); // Referencia al elemento de audio
  useEffect(() => {
    // Si la canción activa cambia, pausa el audio actual si no coincide
    if (
      activeSong &&
      activeSong?.track?.id !== song?.track?.id &&
      audioRef.current
    ) {
      audioRef.current.pause();
    }
  }, [activeSong.track?.id, song.track?.id]);
  // Verifica si la canción tiene URL de preview
  const hasPreview = !!song?.track?.preview_url;
  const handlePauseClick = () => {
      audioRef.current.pause(); // Pausar la canción si tiene URL
      dispatch(playPause(false));
  };

  const handlePlayClick = () => {
      dispatch(setActiveSong({ song})); // Activar la canción seleccionada
      audioRef.current.play(); // Reproducir la canción si tiene URL
      dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center 
      items-center bg-black bg-opacity-50 group-hover:flex
       ${
         activeSong?.track?.name === song.track?.name
           ? "flex bg-gray-300 bg-opacity-70"
           : "hidden"
       }`}
        >
          {hasPreview ? (
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          ) : (
            <p className="text-white">Preview not available</p> // Mensaje cuando no hay URL
          )}
        </div>
        <img src={song?.track?.album?.images[0]?.url} alt={song.name} />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {song.track?.name}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          {song.track?.artists?.map((artist, index) => (
            <span key={artist.id}>
              {artist.name}
              {index === song.track.artists.length - 2 ? " & " : " "}
            </span>
          ))}
        </p>
      </div>

      {/* Elemento de audio para reproducir la canción */}
      <audio ref={audioRef} src={song?.track?.preview_url} />
    </div>
  );
};
export default SongCard;