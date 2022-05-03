import Image from '@/components/Image'
export default function ProjectCard({title, description, image}){
		return(
          <div className="overflow-hidden w-full aspect-auto bg-red-400 cursor-pointer rounded-xl relative group h-64 my-5">
            <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-24 text-white flex items-end p-3">
                <div className="transform-gpu  text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-5 transform transition duration-300 ease-in-out">
                        <div className="font-bold">{title}</div>
                            <div className="opacity-60 text-sm ">
                            {description}
                            </div>
                </div>
            </div>
            <Image
                alt={title} 
                className="object-cover w-full aspect-auto group-hover:scale-110 transition duration-300 ease-in-out"
                src={image}
							  layout="fill" 
            />
        </div>
		)
}