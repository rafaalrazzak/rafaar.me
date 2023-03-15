import { NotionToMarkdown } from 'notion-to-md'
import { getPage, notion, notionConverter } from '@/lib/notion'
import { serialize } from 'next-mdx-remote/serialize'

import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'
import rehypePresetMinify from 'rehype-preset-minify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'
import NotionRenderer from '@/components/NotionRenderer'

export async function getServerSideProps() {
  const notionToMarkdown = new NotionToMarkdown({
    notionClient: notion,
  })

  const frontMatter = await getPage('414376cbf2c0414ebfbfbfce5f96f597')

  const markdown = await notionToMarkdown.pageToMarkdown('414376cbf2c0414ebfbfbfce5f96f597')
  const mdString = notionToMarkdown.toMarkdownString(markdown)

  const renderer = await serialize(mdString, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypePresetMinify,
        rehypeAutolinkHeadings,
        rehypeKatex,
        rehypePrismPlus,
      ],
    },
  })

  return {
    props: {
      renderer,
      frontMatter,
      mdString,
    },
  }
}

export default function Hello({ renderer, frontMatter, mdString }) {
  const authorDetails = [{ name: 'Rafa Al Razzak', twitter: 'rafaalrazzak' }]

  return (
    <NotionRenderer
      source={renderer}
      frontMatter={notionConverter(frontMatter, String(mdString))}
      authorDetails={authorDetails}
    />
  )
}
