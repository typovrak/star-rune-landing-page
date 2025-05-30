import type { IButtonIcon } from "@/utils/types";
import ExternalLink from "@/components/external-link";

export default function ButtonIcon({ url, icon, title, className, size = "default" }: IButtonIcon) {
	return (
		<ExternalLink
			href={url}
			className={`relative group flex items-center justify-center pl-[3rem] pr-4 whitespace-nowrap rounded-lg hover:rotate-cta will-change-transform duration-300 shadow-lg hover:shadow-xl ${size === "default" ? "h-10 text-sm" : size === "big" ? "h-12 text-base" : "h-14 text-lg"}${className ? ` ${className}` : ""}`}
		>
			<div className={`absolute left-0 top-0 mt-1 ml-1 bg-background p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 ${size === "default" ? "h-8 w-8" : size === "big" ? "h-10 w-10" : "h-12 w-12"}`}>
				{icon}
			</div>

			{title}
		</ExternalLink>
	)
}
