import type { IBlockTeam } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star } from "lucide-react";
import TeamSection from "@/components/team-section";
import data from "@/utils/data";

export default function BlockTeam({ id }: IBlockTeam) {
	return (
		<SectionWrapper
			id={id}
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
