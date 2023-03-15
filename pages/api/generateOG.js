/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import { ImageResponse } from '@vercel/og'

const JakartaSans = fetch(
  new URL('../../public/static/fonts/PlusJakartaSans-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

const JakartaSansBold = fetch(
  new URL('../../public/fonts/PlusJakartaSans-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export const config = {
  runtime: 'experimental-edge',
}

export default async function OGImage(req) {
  const { searchParams } = new URL(req.url)
  const pageId = searchParams.get('id')
  const title = searchParams.get('title')
  const image = searchParams.get('image')
  const description = searchParams.get('description')
  const authorAvatar = searchParams.get('avatar')

  if (!pageId) {
    return new Response('Invalid notion page id', { status: 400 })
  }

  const [interRegularFont, interBoldFont] = await Promise.all([JakartaSans, JakartaSansBold])

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1F2027',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          color: 'black',
        }}
      >
        {image && (
          <img
            alt={title}
            src={image}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              // have inconsistent support for filter + transform to get rid of the
              // blurred edges. For now, we'll go without a blur filter on the
              // background, but Satori is still very new, so hopefully we can re-add
              // the blur soon.

              // backgroundImage: pageInfo.image
              //   ? `url(${pageInfo.image})`
              //   : undefined,
              // backgroundSize: '100% 100%'
              // filter: 'blur(8px)'
              // transform: 'scale(1.05)'
            }}
          />
        )}

        <div
          style={{
            position: 'relative',
            width: 900,
            height: 465,
            display: 'flex',
            flexDirection: 'column',
            border: '16px solid rgba(0,0,0,0.3)',
            borderRadius: 8,
            zIndex: '1',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              backgroundColor: '#fff',
              padding: 24,
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {description && <div style={{ fontSize: 32, opacity: 0 }}>{description}</div>}

            <div
              style={{
                fontSize: 70,
                fontWeight: 700,
                fontFamily: 'Inter',
              }}
            >
              {title}
            </div>

            {description && <div style={{ fontSize: 32, opacity: 0.6 }}>{description}</div>}
          </div>
        </div>

        {authorAvatar && (
          <div
            style={{
              position: 'absolute',
              top: 47,
              left: 104,
              height: 128,
              width: 128,
              display: 'flex',
              borderRadius: '50%',
              border: '4px solid #fff',
              zIndex: '5',
            }}
          >
            <img
              alt={title}
              src={authorAvatar}
              style={{
                width: '100%',
                height: '100%',
                // transform: 'scale(1.04)'
              }}
            />
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interRegularFont,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: interBoldFont,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
