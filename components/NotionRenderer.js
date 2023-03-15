import Pre from '@/components/Pre'
import Image from '@/components/Image'
import dynamic from 'next/dynamic'
import { MDXRemote } from 'next-mdx-remote'

const Component = {
  pre: Pre,
  img: ({ ...rest }) => {
    return (
      <Image
        className="rounded-lg"
        alt="Image"
        width="500"
        height="300"
        layout="responsive"
        objectFit={'cover'}
        {...rest}
      />
    )
  },
  a: ({ ...rest }) => {
    if (rest.children === 'embed') {
      return (
        <Image
          className="rounded-lg object-cover"
          alt="Image"
          width="500"
          height="300"
          src={rest.href}
          {...rest}
        />
      )
    } else {
      return <a {...rest} />
    }
  },
}

export default function NotionRenderer({ source, frontMatter }) {
  const authorDetails = [{ name: 'Rafa Al Razzak', twitter: 'rafaalrazzak' }]

  const Layout = dynamic(() => import(`@/layouts/${frontMatter.layout}`))

  return (
    <Layout authorDetails={authorDetails} frontMatter={frontMatter}>
      <div className="prose dark:prose-headings:text-white dark:prose-ol:text-secondary-300 dark:prose-p:text-secondary-300">
        <MDXRemote {...source} components={Component} />
      </div>
    </Layout>
  )
}
