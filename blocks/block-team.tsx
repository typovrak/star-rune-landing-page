import type { IBlockTeam } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star } from "lucide-react";
import data from "@/utils/data";

export default function BlockTeam({ id }: IBlockTeam) {
	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Star />,
				title: "The team"
			}}
			title="From the creator"
			text={`Quinlan Stuwe, ${data.brand} founder`}
			className="bg-white"
		>
			<div className="space-y-6 text-lg text-slate-900 max-w-[800px] mx-auto text-balance">
				{/* TODO: voir avec Quinlan quoi mettre en valeur etc dans ce texte */}
				<p>
					We used to teach through games, through songs, through stories!
					People used the sky to navigate, and ancient Mythology helped us recognize those patterns in the sky.
				</p>

				<p className="text-amber-600 font-primary">
					Where should one start with typing?
				</p>

				<p>
					My daughter struggled learning to type. It was SOOO boring. So I relentlessly had her try typing game after typing game, there are not too many, and they were all disappointing… Too complicated, too stressful, bad graphics, unnatural to real typing, no story, etc.. None of them were designed for new typists. Some of them were outright inappropriate. And pretty much all of them became boring after about 2 minutes of gameplay.
				</p>

				<p>
					I'm creating Star Rune to teach my kids to type, in a fun way that would remain fun day after day. But as someone who sometimes types 100+ wpm, I also wanted a little something fun for myself. Something with grit. Something with emotion. Something with soul. Something timeless. Something I can pour years of my life into and be proud to leave behind when I die. Not something scraped together over the weekend by underpaid interns who could honestly care less. This game is for both the typing pro AND the novice who has never, ever typed in their life. No matter where you’re at, this game will help you in your journey.
				</p>
			</div>
		</SectionWrapper >
	)
}
