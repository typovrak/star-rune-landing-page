import type { IButtonIcon } from "@/utils/types";
import ExternalLink from "@/components/external-link";

export default function ButtonIcon({ url, icon, title, className }: IButtonIcon) {
	return (
		<ExternalLink
			href={url}
			className={`relative group flex items-center justify-center h-10 pl-[3rem] pr-4 whitespace-nowrap text-sm rounded-lg hover:rotate-cta will-change-transform duration-300 shadow-lg hover:shadow-xl ${className ? ` ${className}` : ""}`}
		>
			<div className="absolute left-0 top-0 mt-1 ml-1 bg-background h-8 w-8 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300">
				{icon}
			</div>

			{title}
		</ExternalLink>
	)
}
