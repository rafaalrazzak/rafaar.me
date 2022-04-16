import useTranslation from 'next-translate/useTranslation'
import Image from '@/components/Image'
export default function noTrack(){
	  const { t } = useTranslation()
	return(
		    <div className="flex items-center justify-center w-full"> 
					<div className="px-4 lg:py-12"> 
						<div className="lg:gap-4 lg:flex"> 
							<div className="flex flex-col items-center justify-center md:py-24 lg:py-32"> 
								<h1 className="font-bold text-blue-600 text-9xl">404</h1> 
								<p className="mb-8 text-center text-gray-500 md:text-lg">
									<span className="text-red-500">Oops!</span>
									{t("404:noTrackParagraph")}</p> 
							</div>
            <div className="mt-4">
              <Image src="./static/images/ghost.png" alt="img" className="w-full p-4" w="40" h="40"/>
            </div>
          </div>
        </div>
      </div>
	)
}