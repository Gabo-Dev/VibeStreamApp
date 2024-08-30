import React,{useState} from "react";
import { genres } from "../assets/constants";
import {useGetSongsByGenreQuery} from "../redux/services/SpotifyCore";
import { useDispatch, useSelector } from "react-redux";
import {Loader} from '../components/Loader';
import {SongCard} from '../components/SongCard';
 /**
 * @function Discover
 * @description This component renders a div with the text 'Discover', a drop down menu with all the available genres, and a list of songs for the selected genre.
 * @param {Object} props - The props to be passed down to the component
 * @param {Object} props.data - The data of the songs to be displayed
 * @param {boolean} props.isPlaying - Whether the song is currently playing or not
 * @param {Object} props.activeSong - The song that is currently playing
 * @description This component renders a div with the text 'Discover'
 * @returns {ReactElement} A React component
 */

const Discover = () => {
  const [genreTitle,setGenreTitle] = useState('Pop');
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const [selectedGenreId, setSelectedGenreId] = useState(genres[0].id); // Default genre is Pop
  const { data, isFetching } = useGetSongsByGenreQuery(selectedGenreId);

  if (isFetching) return <Loader title="Loading songs..." />;
  // handle genre change
  const handleGenreChange = (e) => {
    const selectedValue = e.target.value;
    setGenreTitle(selectedValue);
    // check if exists genre with selected value
    const selectedGenre = genres.find((genre) => genre.value === selectedValue);
    if (selectedGenre) {
      setSelectedGenreId(selectedGenre.id);
    }
  };

  return (
    <div className="flex flex-col ">
        <div className="flex space-x-4 items-center justify-center p-8">
          <h2 className="font-bold text-3xl text-gray-200">
            Discover {genreTitle}
          </h2>
          <select
            onChange={handleGenreChange}
            value={genreTitle}
            className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap  justify-center gap-8 ">
          {data.items
            ? data.items.map((song, i) => (
                <SongCard
                  key={i}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                />
              ))
            : "No Data Available"}
        </div>
    </div>
  );
};

export default Discover;
