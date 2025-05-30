import type { IBlockConversion } from "@/utils/types";
import data from "@/utils/data";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";

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
						<ButtonIconDemo />
						<ButtonIconKickstarter />
					</div>
				</div>
			</div>
		</section>
	)
}
