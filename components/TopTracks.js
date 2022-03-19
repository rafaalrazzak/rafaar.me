import TopTrack from './TopTrack'
export default function TopTracks() {
  return (
    <div className="my-3 flex w-full flex-col items-center  justify-center">
      <h1 className="flex justify-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        My <span className="mx-1 text-green-500"> Spotify </span> Top Song
      </h1>
      <TopTrack />
    </div>
  )
}
