import type { IBlockConversion } from "@/utils/types";
import { Button } from "@/components/ui/button";
import ExternalLink from "@/components/external-link";
import data from "@/utils/data";
import { Keyboard } from "lucide-react";
import Kickstarter from "@/icons/kickstarter";

export default function BlockConversion({ }: IBlockConversion) {
	return (
		<section className="w-full py-12 md:py-16 bg-yellow-500/10 border-t border-yellow-500/20">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
						<h3 className="text-2xl font-bold">Ready to join the adventure?</h3>
						<p className="text-muted-foreground">Play the demo today and experience the magic of {data.brand}</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							asChild
							size="lg"
							className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
						>
							<ExternalLink href={data.url.demo}>
								<Keyboard className="mr-2 h-5 w-5" />
								Play Demo
							</ExternalLink>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500 hover:bg-yellow-500/10"
						>
							<ExternalLink href={data.url.kickstarter}>
								<Kickstarter className="mr-2 h-5 w-5" />
								Support on Kickstarter
							</ExternalLink>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
