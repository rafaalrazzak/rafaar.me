import Image from '@/components/Image'
import Link from '@/components/Link'

import useTranslation from 'next-translate/useTranslation'
import { FaTwitter } from 'react-icons/fa';
export default function Author({detail}){

  const { t } = useTranslation()

    return (
      <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-4">
        {detail.map((author) => (
          <li className="flex items-center justify-center space-x-2" key={author.name}>
            {author.avatar && (
              <Image
                src={author.avatar}
                width="38px"
                height="38px"
                alt="avatar"
                className="h-10 w-10 rounded-full"
              />
            )}
            <dl className="whitespace-nowrap text-sm font-medium leading-5">
              <dt className="sr-only">{t('common:name')}</dt>
              <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
              <dt className="sr-only">Twitter</dt>
              <dd>
                {author.twitter && (
                  <Link
                    href={author.twitter}
                    className="flex text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <FaTwitter size={15} className="mr-1" />
                    {author.twitter.replace('https://twitter.com/', '@')}
                  </Link>
                )}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    )
  }