import useSWR from 'swr'

import Track from './Track'
import NoTrack from './NoTrack'
import Parallax from '@/components/motion/Parallax'
import fetcher from '@/lib/fetcher'
export default function Tracks() {
  //animation

  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return <NoTrack />
  }
  return (
    <>
      {data.tracks.map((track, index) => (
        <Parallax
          key={track.songUrl}
          y={20}
          visibleOpacity={1}
          hiddenOpacity={0}
          className="w-full"
        >
          <Track title={track.title} image={track.songImage} alt={`${track.title} - ${track.artist}`} url={track.songUrl}/>
        </Parallax>
      ))}
    </>
  )
}
