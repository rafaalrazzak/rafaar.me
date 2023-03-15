import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import dynamic from 'next/dynamic'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
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
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = dynamic(() => import(`@/layouts/${layout}`))
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
