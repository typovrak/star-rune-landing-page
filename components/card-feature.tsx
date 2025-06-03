import type { ICardFeature } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import IconInvert from "@/components/icon-invert";

export default function CardFeature({ icon, iconHover, title, content, className, iconClassName }: ICardFeature) {
	return (
		<Card className={`group border-2 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:rotate-cta bg-slate-600 hover:bg-slate-700${className ? ` ${className}` : ""}`}>
			<CardContent className="p-6 flex flex-col space-y-4">
				<div className={`relative rounded-full text-white p-2 w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110${iconClassName ? ` ${iconClassName}` : ""}`}>
					<IconInvert
						icon={icon}
						iconHover={iconHover}
					/>
				</div>

				<h3 className="text-xl font-bold text-white">{title}</h3>

				<div className="space-y-4 text-slate-100">
					{content}
				</div>
			</CardContent>
		</Card >
	)
}
