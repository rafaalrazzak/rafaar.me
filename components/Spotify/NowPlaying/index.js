import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'
import { FaSpotify } from 'react-icons/fa'
import MusicEqualizer from './MusicEqualizer'
import SongImage from './SongImage'
import Link from '@/components/Link'
import fetcher from '@/lib/fetcher'
export default function NowPlaying() {
  const { t } = useTranslation()
  const { data } = useSWR('/api/now-playing', fetcher)
  return (
    <div className="flex max-w-lg flex-wrap items-center justify-center gap-1 transition-all sm:gap-2">
      {data?.isPlaying && data?.songUrl ? (
        <SongImage src={data.songImage} alt="song-image" size={20} />
      ) : (
        <FaSpotify className="text-spotify-green" />
      )}
      {data?.isPlaying && data?.songUrl && <MusicEqualizer />}

      <div className="flex max-w-lg flex-wrap justify-center truncate">
        {data?.songUrl ? (
          <Link
            className="truncate text-sm transition-all hover:text-spotify-green sm:text-sm"
            href={data.songUrl}
            title={data.title}
          >
            {data.title}
          </Link>
        ) : (
          <p className="flex text-sm text-gray-500 dark:text-gray-400">{t('common:not-playing')}</p>
        )}
        <span className="mx-2 flex text-sm text-gray-500 dark:text-gray-400">{'–'}</span>
        <p className='dark:text-gray-400" flex flex-wrap truncate text-sm text-gray-500 '>
          {data?.artist ?? 'Spotify'}
        </p>
      </div>
    </div>
  )
}
