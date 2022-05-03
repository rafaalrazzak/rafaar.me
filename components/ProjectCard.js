import Image from '@/components/Image'
export default function ProjectCard({ title, description, image }) {
  return (
    <div className="group relative my-5 px-4 flex aspect-auto h-64 w-full cursor-pointer flex-wrap overflow-hidden rounded-xl bg-red-400 md:w-1/2 md:px-4">
      <div className="absolute inset-x-0 -bottom-2 z-50 flex cursor-pointer items-end rounded-xl bg-gradient-to-t from-black/80 to-transparent p-3 pt-24 text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100">
        <div className="translate-y-4  transform transform-gpu pb-5 text-xl transition duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="font-bold">{title}</div>
          <div className="text-sm opacity-60 ">{description}</div>
        </div>
      </div>
      <Image
        alt={title}
        className="aspect-auto object-cover transition duration-300 ease-in-out group-hover:scale-110"
        src={image}
        layout="fill"
      />
    </div>
  )
}
