import useSWR from 'swr'
import fetcher from '@/lib/fetcher'
import Track from '@/components/Track'

import noTrack from '@/components/notFound/noTrack'
export default function Tracks() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return <noTrack/>
  }
  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  )
}
