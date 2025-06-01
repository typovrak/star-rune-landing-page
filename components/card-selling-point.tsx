import type { ICardSellingPoint } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";

export default function CardSellingPoint({ icon, title, text, iconClassName }: ICardSellingPoint) {
	return (
		<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
			<CardContent className="p-4 flex items-center">
				<div className={`h-8 w-8 mr-3 group-hover:scale-110 transition-transform duration-300${iconClassName ? ` ${iconClassName}` : ""}`}>
					{icon}
				</div>

				<div>
					<h3 className="font-bold">{title}</h3>
					<p className="text-xs text-white/70">{text}</p>
				</div>
			</CardContent>
		</Card>
	)
}
