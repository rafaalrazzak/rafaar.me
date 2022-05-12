import Image from '../../Image'
export default function SongImage({ alt, src, size }) {
  const convertImage = ({ size }) => `
         <Image src="${src}" width="${size}" height="${size}" quality="1"/>
                  `
  const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      type="circle"
      width={size}
      height={size}
      objectFit="cover"
      className="rounded-full"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(1))}`}
    />
  )
}
