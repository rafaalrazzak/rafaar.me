import useTranslation from 'next-translate/useTranslation'
export default function NoTrack(){
  const { t } = useTranslation()
    return(
       <div className="flex items-center justify-center w-full"> 
          <div className="p-4"> 
	     <div className="lg:gap-4 lg:flex"> 
                <div className="flex flex-col items-center justify-center"> 
		  <h1 className="font-bold text-slate-600 dark:text-slate-200 text-6xl">404</h1> 
		    <p className="text-center text-gray-500 md:text-lg">
		      <span className="text-red-500">Oops! </span>
			 {t("404:noTrackParagraph")}
                    </p> 
		</div>
            </div>
        </div>
      </div>
    )
}
