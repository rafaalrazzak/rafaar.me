import TopTrack from './TopTrack'
import Parallax from '@/components/motion/Parallax'
export default function TopTracks() {
  return (
    <div className="my-4 flex w-full flex-col items-center justify-center">
      <Parallax y={10} visibleOpacity={1} hiddenOpacity={1}>
        <h1 className=" flex justify-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          My <span className="mx-1 text-green-500"> Spotify </span> Top Song
        </h1>
      </Parallax>

      <TopTrack />
    </div>
  )
}
