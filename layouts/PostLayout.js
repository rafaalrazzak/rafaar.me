import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Author from '@/components/Author'
import Image from '@/components/Image'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  availableLocales,
  children,
}) {
  const { slug, fileName, date, title, tags, readingTime, images } = frontMatter
  const roundedRead = Math.round(readingTime)
  const { t } = useTranslation()
  const { locale } = useRouter()
  function SideBar() {
    return (
      <div className="hidden xl:sticky xl:top-12 xl:block">
        <div className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
          <dt className="sr-only">{t('common:authors')}</dt>
          <dd>
            <Author detail={authorDetails} />
          </dd>
        </div>
        <div className="leading-5xl:col-start-1 divide-transparent text-sm font-medium xl:row-start-2 xl:divide-y">
          {tags && (
            <div className="pt-4 xl:pt-8">
              <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Tags
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
            </div>
          )}
          {(next || prev) && (
            <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
              {prev && (
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {t('common:preva')}
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                  </div>
                </div>
              )}
              {next && (
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {t('common:nexta')}
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="pt-4 xl:pt-8">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            &larr; {t('common:back')}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        availableLocales={availableLocales}
        {...frontMatter}
      />
      <article>
        <div className="w-full divide-transparent xl:divide-y">
          <header className="pt-6 xl:pb-6">
            <div className="flex justify-center space-y-1 text-center">
              <dl className="space-y-10">
                <dt className="sr-only">{t('common:pub')}</dt>
                <dd className="flex items-center justify-center divide-x-2 divide-gray-500 text-sm font-medium leading-6 text-gray-500 dark:divide-gray-400 dark:text-gray-400">
                  <time className="pr-2" dateTime={date}>
                    {formatDate(date, locale)}
                  </time>
                  <span className="pl-2">
                    {roundedRead}{' '}
                    {roundedRead == 1
                      ? `${t('common:minute')} ${t('common:to')} ${t('common:read')}`
                      : `${t('common:minutes')} ${t('common:to')} ${t('common:read')}`}
                  </span>
                </dd>
              </dl>
            </div>
            <div className="text-center">
              <PageTitle>{title}</PageTitle>
            </div>
          </header>
          <div
            className="divide-y divide-transparent pb-8 xl:relative xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="pt-6 pb-10 xl:hidden xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">{t('common:authors')}</dt>
              <dd>
                <Author detail={authorDetails} />
              </dd>
            </div>
            <SideBar />

            <div className=" divide-y divide-transparent xl:col-span-3 xl:row-span-2 xl:pb-0">
              {images && (
                <div className="flex w-full justify-center">
                  <Image
                    alt={title}
                    src={images}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)} className="flex flex-wrap justify-start">
                  <FaGithub size={20} className="mr-3" />
                  {t('common:github')}
                </Link>
              </div>
            </div>
            <footer className="flex-wrap xl:hidden">
              <div className="leading-5xl col-start-1 divide-transparent text-sm font-medium">
                {tags && (
                  <div className="pt-4 xl:pt-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {t('common:preva')}
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          {t('common:nexta')}
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; {t('common:back')}
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
