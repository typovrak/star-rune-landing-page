import type { IBlockAbilities } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Gamepad2 } from "lucide-react";
import data from "@/utils/data";
import GameplaySection from "@/components/gameplay-section";
import Shield from "@/icons/shield";
import Sparkles from "@/icons/sparkles";
import Bolt from "@/icons/bolt";
import Fall from "@/icons/fall";
import Rocket from "@/icons/rocket";
import Swift from "@/icons/swift";

export default function BlockAbilities({ id }: IBlockAbilities) {

	const slides = [
		{
			icon: <Shield />,
			iconHover: <Shield className="" />,
			title: "Auto-deflect",
			text: "Nova automatically will deflect Azki lasers. Later, you can upgrade your sword(s) to reflect these at Glitchborn to deal extra damage.",
		},
		{
			icon: <Swift />,
			iconHover: <Swift className="" />,
			title: "Dash",
			text: "When you see a highlighted Azki, type that letter, you'll dash through them and build up your Charge.",
		},
		{
			icon: <Bolt />,
			iconHover: <Bolt className="" />,
			title: "Chain dash",
			text: "When you see consecutive Azki of the same type, hold their key down and you'll quickly slash through all of them.",
		},
		{
			icon: <Fall />,
			iconHover: <Fall />,
			title: "Fast fall + Meteor slash",
			text: "Press [TAB] to perform a Fast Fall. Pressing it while moving downward creates a Meteor Slash.",
		},
		{
			icon: <Rocket />,
			iconHover: <Rocket className="" />,
			title: "Shift power",
			text: "Hold [SHIFT] or activate [CAPS] to use Shift Power. This will make your dash line thicker and stronger.",
		},
		{
			icon: <Sparkles />,
			iconHover: <Sparkles className="" />,
			title: "Full charge",
			text: "When you have Full Charge, your sword glows a new color. Dash lines are stronger and last longer.",
		},
	];

	return (
		<SectionWrapper
			id={id}
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
