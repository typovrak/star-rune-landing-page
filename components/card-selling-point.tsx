import type { ICardSellingPoint } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import IconInvert from "@/components/icon-invert";

export default function CardSellingPoint({ icon, iconHover, iconColor, title, text, className }: ICardSellingPoint) {
	return (
		<Card className={`group flex items-center bg-slate-600 text-white border-2 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:rotate-cta${className ? ` ${className}` : ""}`}>
			<CardContent className="p-4 flex items-center">
				<div className={`relative h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
					<IconInvert
						icon={icon}
						iconHover={iconHover}
					/>
				</div>

				<div>
					<h3 className="font-bold font-secondary">{title}</h3>
					<p className="text-sm text-muted-background">{text}</p>
				</div>
			</CardContent>
		</Card>
	)
}
