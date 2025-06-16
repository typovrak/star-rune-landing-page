import type { ICardSocial } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import ExternalLink from "@/components/external-link";
import IconInvert from "@/components/icon-invert";

export default function CardSocial({ icon, iconHover, title, text, url, buttonTitle, color, className, buttonClassName }: ICardSocial) {
	return (
		<Card className={`group/hover flex flex-col items-center text-center p-6 border-2 transition-all duration-300 shadow-lg hover:shadow-xl group${className ? ` ${className}` : ""}`}>
			<CardContent className="flex flex-col items-center h-full space-y-4 pt-6">
				<div className="relative">
					<div className={`h-12 w-12 group-hover:scale-110 transition-transform duration-300 ${color}`}>
						<IconInvert
							icon={icon}
							iconHover={iconHover}
						/>
					</div>

					<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>

				<div className="space-y-2">
					<h3 className="text-slate-900 uppercase font-secondary">{title}</h3>

					<p className="text-sm text-slate-500">{text}</p>
				</div>

				<div className="h-full flex items-end">
					<ExternalLink
						href={url}
						className={`w-full flex items-center justify-center hover:rotate-cta hover:shadow-sm whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 h-10 px-6 border ${color}${buttonClassName ? ` ${buttonClassName}` : ""}`}
					>
						{buttonTitle}
					</ExternalLink>
				</div>
			</CardContent>
		</Card>
	)
}
