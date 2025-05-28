import type { IBlockFeatures } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import { Star } from "lucide-react";
import GameFeatures from "@/components/game-features";

export default function BlockFeatures({ }: IBlockFeatures) {
	return (
		<SectionWrapper
			id="features"
			badge={{
				icon: <Star />,
				title: "Unique features"
			}}
			title={`What makes ${data.brand} special`}
			text="Unlike any typing game you've played before"
			className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-background"
		>

			<GameFeatures />
		</SectionWrapper>


	)
}
