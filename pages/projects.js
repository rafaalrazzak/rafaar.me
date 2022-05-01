import useTranslation from 'next-translate/useTranslation'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export async function getStaticProps({ locale, locales }) {
  return { props: { locale, availableLocales: locales } }
}

export default function Projects({ locale, availableLocales }) {
  const { t } = useTranslation()
  return (
    <>
      <PageSEO
        title={`${t('headerNavLinks:projects')} - ${siteMetadata.author}`}
        description={siteMetadata.description[locale]}
        availableLocales={availableLocales}
      />
      <div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {t('projects:title')}
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData[locale]?.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                imgSrc={d.image}
								layout="fill"
                href={d.image}
								onlyImg="true"
								textColor='flex justify-end bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                className="p-4 h-64"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
