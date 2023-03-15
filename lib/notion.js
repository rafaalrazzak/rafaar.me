import { Client } from '@notionhq/client'
import getReadingTime from 'reading-time'

export const notion = new Client({ auth: process.env.NOTION_KEY })

export const getDatabase = async (database_id) => {
  const response = await notion.databases.query({
    database_id: database_id,
  })
  return response.results
}

export const getPage = async (page_id) => {
  return await notion.pages.retrieve({
    page_id: page_id,
  })
}

export const getBlock = async (block_id) => {
  return await notion.blocks.children.list({
    block_id: block_id,
  })
}

export const getBlockChildren = async (block_id) => {
  return await notion.blocks.children.list({
    block_id: block_id,
  })
}

export const notionConverter = (recordMap, source) => {
  const image = recordMap.cover.external.url
  const title = recordMap.properties.title.title[0].plain_text
  const description = recordMap.properties.description.rich_text[0].plain_text
  const created_time = recordMap.properties.date.created_time
  const last_edited_time = recordMap.last_edited_time
  const slug = recordMap.properties.slug.url
  const author = {
    name: recordMap.properties.author.created_by.name,
    avatar: recordMap.properties.author.created_by.avatar_url,
  }
  const tags = recordMap.properties.tags.multi_select.map((tag) => tag.name)
  const layout = recordMap.properties.layout.select.name

  const readingTime = getReadingTime(source).minutes

  return {
    title,
    description,
    created_time,
    last_edited_time,
    slug,
    image,
    author,
    tags,
    layout,
    readingTime,
  }
}
