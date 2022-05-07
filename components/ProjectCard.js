import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
export default function ProjectCard({ title, description, image, link }) {
  const convertImage = ({ w, h }) => `
         <Image src="${image}" width="${w}" height="${h}" quality="1"/>
                  `
  const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
  return (
    <div className=" group relative my-5 flex aspect-auto h-48 overflow-hidden rounded-xl  bg-primary-400/50 shadow-sm shadow-primary-500/30  drop-shadow-sm backdrop-blur-lg md:my-10 md:h-64 lg:h-[26rem]">
      <div className="absolute inset-x-0 -bottom-2 z-10 flex w-full cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent p-3 pt-32 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 ">
        <div className="z-11 translate-y-4 transform-gpu pb-5 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <SocialIcon
            kind="external_link"
            href={link ?? `/_next/image?url=${image}&w=1080&q=100`}
            name={title}
            className="cursor-pointer opacity-60 transition duration-300 hover:opacity-100"
          />
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-60 ">{description}</div>
        </div>
      </div>
      <Image
        alt={title}
        className="aspect-auto w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
        src={image}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(convertImage(10, 10))}`}
        layout="fill"
      />
    </div>
  )
}
