import type { ICardFeature } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";

export default function CardFeature({ icon, title, content }: ICardFeature) {
	return (
		<Card className="overflow-hidden border-2 border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-yellow-500/30 h-full">
			<CardContent className="p-6">
				<div className="flex flex-col space-y-4">
					<div className="rounded-full bg-yellow-100 dark:bg-yellow-900/20 p-3 w-12 h-12 flex items-center justify-center">
						<div className="h-6 w-6 text-yellow-600 dark:text-yellow-400">
							{icon}
						</div>
					</div>

					<h3 className="text-xl font-bold">{title}</h3>

					<div className="space-y-4 text-muted-foreground">
						{content}
					</div>
				</div>
			</CardContent>
		</Card >
	)
}
