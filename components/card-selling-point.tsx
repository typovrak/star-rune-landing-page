import type { ICardSellingPoint } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import IconInvert from "@/components/icon-invert";

export default function CardSellingPoint({ icon, iconHover, iconColor, title, text, className, isSlide, style }: ICardSellingPoint) {
	return (
		<Card
			className={`group/hover flex items-center bg-slate-600 ${isSlide ? "hover:bg-slate-700 border-t-2 rounded-none h-full justify-center" : "hover:rotate-cta hover:bg-slate-700 shadow-lg hover:shadow-xl border-2"}${className ? ` ${className}` : ""}`}
			style={style}
		>
			<CardContent className={`p-4 flex items-center${isSlide ? " lg:py-6 lg:px-16 lg:gap-2" : ""}`}>
				<div className={`relative min-h-8 h-8 min-w-8 w-8 mr-3 group-hover/hover:scale-110 transition-transform duration-300 ${iconColor}${isSlide ? " lg:h-12 lg:w-12" : ""}`}>
					<IconInvert
						icon={icon}
						iconHover={iconHover}
					/>
				</div>

				<div>
					<h3 className={`font-bold font-secondary text-white mb-1 sm:mb-0${isSlide ? " lg:text-lg lg:mb-1" : ""}`}>{title}</h3>
					<p className={`text-sm text-slate-100${isSlide ? " lg:text-base" : ""}`}>{text}</p>
				</div>
			</CardContent>
		</Card>
	)
}
