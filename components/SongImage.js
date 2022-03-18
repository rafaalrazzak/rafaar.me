import Image from './Image'
export default function SongImage({ height, width, alt, src }) {
  return <Image src={src} alt={alt} width={width} height={height} className="rounded-full" />
}
