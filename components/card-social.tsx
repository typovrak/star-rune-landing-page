import type { ICardSocial } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import ExternalLink from "@/components/external-link";
import { Button } from "@/components/ui/button";
import IconInvert from "@/components/icon-invert";

export default function CardSocial({ icon, iconHover, title, text, url, buttonTitle }: ICardSocial) {
	return (
		<Card className="flex flex-col items-center text-center p-6 border-2 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-lg group">
			<CardContent className="flex flex-col items-center space-y-4 pt-6">
				<div className="relative">
					<div className="h-12 w-12 text-indigo-500 group-hover:scale-110 transition-transform duration-300">
						<IconInvert
							icon={icon}
							iconHover={iconHover}
						/>
					</div>

					<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>

				<div className="space-y-2">
					<h3 className="font-bold">{title}</h3>

					<p className="text-sm text-muted-foreground">{text}</p>
				</div>

				<Button
					asChild
					variant="outline"
					className="w-full border-indigo-500/30 text-indigo-600 hover:bg-indigo-500/10 hover:text-indigo-700 hover:border-indigo-500/50"
				>
					<ExternalLink href={url}>
						{buttonTitle}
					</ExternalLink>
				</Button>
			</CardContent>
		</Card>
	)
}
