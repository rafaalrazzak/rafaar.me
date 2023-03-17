import NextImage from 'next/image'
import {useState, useEffect} from 'react'
import {convertImage, toBase64} from '@/lib/utils/imageBlur'

export default function Image({type, circleSize, src, width, height, ...rest}){
	const [isReady, setIsReady] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsReady(true)
		}, 3000)
		return () => clearTimeout(timer)
	}, [])
	return (
			<>
				{isReady ? (
						<NextImage
								src={src}
								width={width}
								height={height}
								placeholder="blur"
								alt={"Image"}
								blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage({src, width, height}))}`}
								{...rest}
						/>) : (
						<div
								className={`${type == 'circle' ? `${circleSize} rounded-full` : 'h-full w-full '}  animate-pulse bg-secondary-200 dark:bg-secondary-300`}></div>)}
			</>)
}