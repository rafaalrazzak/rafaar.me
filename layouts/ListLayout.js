import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Parallax from '@/components/motion/Parallax'
import TimeAgo from '@/components/TimeAgo'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.description + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const { t } = useTranslation()
  const { locale } = useRouter()

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-transparent">
        <div className="space-y-2 py-8 md:space-y-6 ">
          <h1 className="py-3 text-3xl font-extrabold leading-9 tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative">
            <input
              aria-label="Search articles / tag / snippet"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={t('common:search')}
              className="w-full pr-10 rounded-xl border border-secondary-300 bg-white px-4 py-2 text-secondary-900 focus:border-primary-500 focus:ring-primary-500 dark:border-secondary-900 dark:bg-secondary-800 dark:text-secondary-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-secondary-400 dark:text-secondary-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {!filteredBlogPosts.length && `No articles found for: "${searchValue}"`}
        {displayPosts.map((frontMatter) => {
          const { slug, created_time, title, description, tags } = frontMatter
          return (
            <Parallax
              y={15}
              key={slug}
              className="group rounded-xl transition-all duration-300 ease-in-out hover:bg-secondary-300/30 dark:hover:bg-secondary-600/30"
            >
              <ul className="transition-all duration-1000 ease-in-out group-hover:p-4">
                <li className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">{t('common:pub')}</dt>
                      <dd className="flex flex-col gap-1 text-base font-medium leading-6 text-secondary-500 dark:text-secondary-400">
                        <TimeAgo
                          datetime={created_time}
                          className="text-primary-700 dark:text-primary-500"
                          locale={locale}
                        />
                        <time dateTime={created_time}>{formatDate(created_time, locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h1 className="text-xl font-bold leading-8 tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-secondary-900 dark:text-secondary-100"
                          >
                            {title}
                          </Link>
                        </h1>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose text-sm text-secondary-500 dark:text-secondary-400">
                        {description}
                      </div>
                    </div>
                  </article>
                </li>
              </ul>
            </Parallax>
          )
        })}
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          pageSlug={'blog'}
        />
      )}
    </>
  )
}
