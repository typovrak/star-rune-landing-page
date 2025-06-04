import type { IBlockConversion } from "@/utils/types";
import data from "@/utils/data";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";

export default function BlockConversion({ }: IBlockConversion) {
	return (
		<section className="w-full py-12 lg:py-16 bg-yellow-400/25">
			<div className="container px-4">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
					<div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
						<h3 className="text-2xl font-bold text-slate-900">Ready to join the adventure?</h3>

						<p className="text-slate-600">Play the demo today and experience the magic of {data.brand}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4">
						<ButtonIconDemo size="big" />
						<ButtonIconKickstarter size="big" />
					</div>
				</div>
			</div>
		</section>
	)
}
