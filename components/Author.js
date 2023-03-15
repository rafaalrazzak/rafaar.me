import useTranslation from "next-translate/useTranslation";
import Image from "@/components/Image";

export default function Author({name, avatar}){
	const {t} = useTranslation();
	return (
			<ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-4">

				<li
						className="flex items-center justify-center space-x-2"
						key={name}
				>
					<div className="overflow-hidden w-8 rounded-full">
						<Image src={avatar} width={100} height={100} alt={name}/>
					</div>
					<dl className="whitespace-nowrap text-sm font-medium leading-5">
						<dt className="sr-only">{t("common:name")}</dt>
						<dd>
							<h3
									className="text-secondary-900 transition dark:text-secondary-100"
							>
								{name}
							</h3>
						</dd>
					</dl>
				</li>
			</ul>);
}
