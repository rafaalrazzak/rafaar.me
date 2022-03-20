import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'
import { FaSpotify } from 'react-icons/fa'
import MusicEqualizer from './MusicEqualizer'
import Link from './Link'
import SongImage from './SongImage'
import fetcher from '@/lib/fetcher'
export default function NowPlaying() {
  const { t } = useTranslation()
  const { data } = useSWR('/api/now-playing', fetcher)
  return (
    <div className="flex max-w-full flex-wrap items-center justify-center gap-1 sm:gap-2">
      {data?.isPlaying && data?.songUrl ? (
        <SongImage src={data.songImage} alt="song-image" size={20} quality={100} />
      ) : (
        <FaSpotify className="text-spotify-green" size={20} />
      )}
      {data?.isPlaying && data?.songUrl && <MusicEqualizer />}
      <div className="flex max-w-full flex-wrap justify-center truncate">
        {data?.songUrl ? (
          <Link
            className="max-w-max truncate text-xs hover:text-spotify-green
              sm:text-sm"
            href={data.songUrl}
            title={data.title}
          >
            {data.title}
          </Link>
        ) : (
          <p className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400">
            {t('common:not-playing')}
          </p>
        )}
        <div>
          {data?.artist >= 25 || data?.title.length >= 25 ? (
            <span className="mx-2 hidden flex-wrap text-sm text-gray-500 dark:text-gray-400 sm:flex">
              {'–'}
            </span>
          ) : (
            <span className="mx-2 flex flex-wrap text-sm text-gray-500 dark:text-gray-400">
              {'–'}
            </span>
          )}
        </div>
        <p className='dark:text-gray-400" flex flex-wrap truncate text-sm text-gray-500 '>
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  )
}
