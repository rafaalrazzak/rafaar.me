import Image from './Image'
import Link from './Link'
export default function Track(track) {
  return (
    <div className="relative my-4 flex h-full w-full flex-col justify-center overflow-hidden rounded-lg border-b bg-white/30 shadow-sm filter backdrop-blur-md transition-colors duration-500 ease-linear hover:bg-spotify-green/10 hover:text-white dark:border-gray-600/50 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row">
      <Link href={track.songUrl} className="w-full">
        <div className="flex h-full w-full justify-start ">
          <div className="flex xs:hidden">
            <Image
              className="transform items-start justify-start overflow-hidden rounded-tl-lg bg-cover bg-center transition-all duration-500 ease-in-out hover:scale-[1.15] xs:absolute xs:hidden xs:rounded-full md:h-auto md:w-full md:rounded-l-lg "
              src={track.songImage}
              width="130"
              height="130"
              alt="image-song"
              placeholder="blur"
              layout="fixed"
              blurDataURL=""
              priority
            />
          </div>
          <div className="relative flex flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white md:text-xl">
              {track.title}
            </h5>
            <p className="md:text-md mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
              {track.artist}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
