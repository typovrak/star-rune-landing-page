import type { IBlockAbilities } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Gamepad2 } from "lucide-react";
import data from "@/utils/data";
import GameplaySection from "@/components/gameplay-section";

export default function BlockAbilities({ }: IBlockAbilities) {
	return (
		<SectionWrapper
			id="gameplay"
			badge={{
				icon: <Gamepad2 />,
				title: "Gameplay"
			}}
			title="Special abilities"
			text={`${data.brand} is intuitive + quick/easy to play, but the game mechanics are also very nuanced`}
		>
			<GameplaySection />
		</SectionWrapper>
	)
}
