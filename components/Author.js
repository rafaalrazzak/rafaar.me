import useTranslation from 'next-translate/useTranslation'
import { FaInstagram } from 'react-icons/fa';
import Image from '@/components/Image'
import Link from '@/components/Link'
export default function Author({detail}){

  const { t } = useTranslation()

    return (
      <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-4">
        {detail.map((author) => (
          <li className="flex items-center justify-center space-x-2" key={author.name}>
            <Image
                src={`https://res.cloudinary.com/raf-ar/image/upload/v1651370642/blog/avatars/${author.name.toLowerCase()}.jpg`}
                width="38px"
                height="38px"
                alt={author.name}
                className="h-10 w-10 rounded-full"
              />
            <dl className="whitespace-nowrap text-sm font-medium leading-5">
              <dt className="sr-only">{t('common:name')}</dt>
              <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
              <dt className="sr-only">Instagram</dt>
              <dd>
                {author.instagram && (
                  <Link
                    href={author.instagram}
                    className="flex text-xs text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <FaInstagram size={15} className="mr-1" />
                    {author.instagram.replace('https://instagram.com/','')}
                  </Link>
                )}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    )
  }
