import useTranslation from 'next-translate/useTranslation'
import Link from '@/components/Link'

export default function Pagination({ pageSlug, totalPages, currentPage }) {
  const { t } = useTranslation()
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex">
        <div className="mr-6 md: mr-12">
        {!prevPage && (
          <button rel="previous" className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            {t('common:prevp')}
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${pageSlug}/` : `/${pageSlug}/page/${currentPage - 1}`}
          >
            <button rel="previous">{t('common:prevp')}</button>
          </Link>
        )}
        </div>
        <span className="justify-center items-center">
          {currentPage} {t('common:of')} {totalPages}
        </span>
        <div className="ml-6 md:ml-12 justify-end">
        {!nextPage && (
          <button rel="next" className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            {t('common:nextp')}
          </button>
        )}
        {nextPage && (
          <Link href={`/${pageSlug}/page/${currentPage + 1}`}>
            <button rel="next">{t('common:nextp')}</button>
          </Link>
        )}
        </div>i
      </nav>
    </div>
  )
}
