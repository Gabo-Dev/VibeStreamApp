import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa';


export const PlayPause = ({isPlaying,activeSong,song,handlePause,handlePlay}) => (
  (isPlaying && activeSong.track?.
    name===song.track?.name ?(
      <FaPauseCircle
       size={35}
       className='text-gray-300'
       onClick={handlePause}
      />
    ) :(
      <FaPlayCircle
      size={35}
       className='text-gray-300'
       onClick={handlePlay}
      />
    )
  )
  
);

export default PlayPause;