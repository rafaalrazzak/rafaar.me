import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Card from '@/components/Card'
import TopTracks from '@/components/TopTracks'

const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const MAX_DISPLAY = 3

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : ''
  const posts = await getAllFilesFrontMatter('blog', otherLocale)

  return { props: { posts, locale, availableLocales: locales } }
}

export default function Home({ posts, locale, availableLocales }) {
  const { t } = useTranslation()

  return (
    <>
      <PageSEO
        title={siteMetadata.title[locale]}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div className="relative justify-center pb-12 pt-2 text-center xs:flex xs:flex-col xs:pb-8 sm:pb-14 sm:pt-3">
        <div className="h-screen w-full">
          <Hero />
        </div>
        <h1 className="py-3 text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 xl:text-6xl">
          {t('common:hi')} <span className="animate-fade-text">Rafa Al Razzak</span>
        </h1>
        <p className="px-2 text-xl font-light leading-6 text-gray-500 dark:text-gray-400 sm:px-6 xl:px-0">
          {t('common:mini-bio')}
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div>
          <div className="flex w-full flex-wrap pb-2">
            <Card
              title={t('common:learning')}
              description={t('learning:description')}
              href={'/learning'}
              className="py-4 md:px-4"
            />
            <Card
              title={t('common:about')}
              description={t('common:about-description')}
              href={'/about'}
              className="py-4 md:px-4"
            />
          </div>
          <ul className="divide-y divide-transparent md:px-4">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="pt-12 pb-6">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-3 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">{t('common:pub')}</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-2">
                        <div className="space-y-6">
                          <div className="flex flex-col xs:w-full xs:justify-center">
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>

                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read "${title}"`}
                          >
                            {t('common:more')} &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length >= 3 && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              {t('common:all')} &rarr;
            </Link>
          </div>
        )}
        <TopTracks />
      </div>
    </>
  )
}
