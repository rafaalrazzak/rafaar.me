import Image from './Image'
export default function SongImage({ alt, src, size }) {
  return <Image src={src} alt={alt} width={size} height={size} className="rounded-full" />
}
