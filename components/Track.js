import Image from './Image'
import Link from './Link'

export default function Track(track) {
    const convertImage = ({w, h}) => `
       <Image src="${track.songImage}" width="${w}" height="${h}" quality="1"/>
         `
    const toBase64 = (str) =>
      typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
  return (
    <div className="group relative my-4 flex h-auto w-full flex-col justify-center overflow-hidden rounded-lg border-b bg-white/30 shadow-sm filter backdrop-blur-md transition-colors duration-500 ease-linear hover:bg-spotify-green/10 hover:text-white dark:border-gray-600/50 dark:bg-gray-800 dark:hover:bg-gray-700">
      <Link href={track.songUrl}>
        <div className="flex h-full w-full justify-start ">
          <div className="flex xs:hidden">
            <Image
              className="transform items-start justify-start overflow-hidden rounded-tl-lg bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-[1.15] xs:absolute xs:hidden xs:rounded-full md:h-auto md:w-full md:rounded-l-lg "
              src={track.songImage}
              width="176"
              height="176"
              alt={track.title}
              placeholder="blur"
              layout="fixed"
              quality="50"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(10, 10))}`}
              priority
            />
          </div>
          <div className="relative flex flex-col justify-start p-4 leading-normal">
            <h5 className="text-md mb-2 font-bold tracking-tight text-gray-900 dark:text-white md:text-xl">
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
