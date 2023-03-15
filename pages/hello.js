import { notion } from '@/lib/notion'

export async function getServerSideProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  return {
    props: {
      results,
    },
  }
}

export default function Hello({ results }) {
  console.log(results)

  return <h1>Hello</h1>
}
