export default function Track(track) {
  return (
    <div className="group transition-all duration-300 flex flex-row items-baseline border-b hover:bg-green-400/30  border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8 dark:hover:bg-green-300/30 dark:hover:border-green-300/40 dark:hover:shadow-md filter backdrop-blur-md rounded-md p-4 ">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600 dark:group-hover:text-slate-300">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full dark:group-hover:text-slate-300/80"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  )
}
