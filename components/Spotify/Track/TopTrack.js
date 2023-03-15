import useSWR from 'swr'
import Track from './Track'
import Parallax from '@/components/motion/Parallax'
import fetcher from '@/lib/fetcher'
export default function Tracks() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  if (!data) {
    return
  }
  return (
    <Parallax y={10} visibleOpacity={1} hiddenOpacity={1}>
      <h1 className=" flex justify-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        My <span className="mx-1 text-spotify">Spotify</span> Top Song
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
        {data.tracks.map((track, k) => (
          <Parallax
            key={k}
            y={20}
            visibleOpacity={1}
            hiddenOpacity={0}
            className="flex flex-wrap w-full px-4"
          >
            <Track
              title={track.title}
              image={track.songImage}
              url={track.songUrl}
              artist={track.artist}
            />
          </Parallax>
        ))}
      </div>
    </Parallax>
  )
}
