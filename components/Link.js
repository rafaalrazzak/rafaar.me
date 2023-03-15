import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

// Destructure props for easier readability and add comments for each variable
const ActiveLink = ({ children, className: activeClassName, ...props }) => {
  // Use destructuring to get asPath from the router object
  const { asPath } = useRouter()

  // Get the child element, its class name and the active class name
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const activeClass = activeClassName || ''

  // Conditionally set the className based on the current route
  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClass}`.trim()
      : childClassName

  // Return the updated link with the appropriate className
  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

// Destructure props for easier readability and add comments for each variable
const CustomLink = ({ href, children, isActive, activeClassName, ...rest }) => {
  // Determine if the link is internal, external or an anchor
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  // Determine which link component to use
  const BaseLink = isActive ? ActiveLink : Link

  // Return the appropriate link based on the link type
  if (isInternalLink) {
    return (
      <BaseLink href={href} className={activeClassName} {...rest}>
        {children}
      </BaseLink>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
