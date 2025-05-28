import type { IBlockTeam } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star } from "lucide-react";
import TeamSection from "@/components/team-section";
import data from "@/utils/data";

export default function BlockTeam({ }: IBlockTeam) {
	return (
		<SectionWrapper
			id="team"
			badge={{
				icon: <Star />,
				title: "The team"
			}}
			title="From the creators"
			text={`The talented people behind ${data.brand}`}
			className="bg-muted"
		>
			<TeamSection />
		</SectionWrapper >
	)
}
