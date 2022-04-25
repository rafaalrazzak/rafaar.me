import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Track from './Track'

import NoTrack from './notFound/NoTrack'
import Parallax from './motion/Parallax'
export default function Tracks() {
  //animation

  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return <NoTrack />
  }
  return (
    <>
      {data.tracks.map((track, index) => (
        <Parallax y={20} visibleOpacity={1} hiddenOpacity={0}>
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        </Parallax>
      ))}
    </>
  )
}
