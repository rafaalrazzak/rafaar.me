import useTranslation from 'next-translate/useTranslation'
export default function ReadTime({ time, className }) {
  const { t } = useTranslation()
  return (
    <span className={className}>
      {time}{' '}
      {time == 1
        ? `${t('common:minute')} ${t('common:to')} ${t('common:read')}`
        : `${t('common:minutes')} ${t('common:to')} ${t('common:read')}`}
    </span>
  )
}
