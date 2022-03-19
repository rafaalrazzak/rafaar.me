import Image from './Image'
import Link from './Link'
export default function Track(track) {
  return (
    <div className="relative my-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-lg border-b bg-white/30 shadow-sm filter backdrop-blur-md transition-colors duration-500 ease-linear hover:bg-spotify-green/10 hover:text-white dark:border-gray-600/50 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row">
      <Link href={track.songUrl} className="w-full">
        <div className="flex h-full w-full justify-start">
          <Image
            className="absolute h-full w-full  transform items-start justify-start overflow-hidden rounded-tl-lg bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-[1.15] md:h-auto md:w-full md:rounded-l-lg "
            src={track.songImage}
            width="200"
            height="200"
            alt="image-song"
            quality="100"
          />
          <div className="flex flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {track.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{track.artist}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
