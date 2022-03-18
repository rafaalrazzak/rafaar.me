export default function Track(track) {
  return (
    <div className="group mt-8 flex w-full max-w-3xl flex-row items-baseline rounded-md border-b border-gray-200 p-4 filter backdrop-blur-md transition-all duration-300 hover:bg-green-400/30 dark:border-gray-800 dark:hover:border-green-300/40 dark:hover:bg-green-300/30 dark:hover:shadow-md ">
      <p className="text-sm font-bold text-gray-400 dark:text-gray-600 dark:group-hover:text-slate-300">
        {track.ranking}
      </p>
      <div className="flex flex-col pl-3">
        <a
          className="w-60 truncate font-medium text-gray-900 dark:text-gray-100 sm:w-96 md:w-full"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </a>
        <p
          className="mb-4 w-60 truncate text-gray-500 dark:group-hover:text-slate-300/80 sm:w-96 md:w-full"
          color="gray.500"
        >
          {track.artist}
        </p>
      </div>
    </div>
  )
}
