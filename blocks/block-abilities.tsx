import type { IBlockAbilities } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import Shield from "@/icons/shield";
import Sparkles from "@/icons/sparkles";
import Bolt from "@/icons/bolt";
import Fall from "@/icons/fall";
import Swift from "@/icons/swift";
import Jetpack from "@/icons/jetpack";
import JetpackFill from "@/icons/jetpack-fill";
import { Gamepad2 } from "lucide-react";
import Slider from "@/components/slider";

export default function BlockAbilities({ id }: IBlockAbilities) {

	const slides = [
		{
			id: 0,
			icon: <Shield />,
			iconHover: <Shield className="fill-blue-400" />,
			iconColor: "text-blue-400",
			title: "Auto-deflect",
			text: "Nova automatically will deflect Azki lasers. Later, you can upgrade your sword(s) to reflect these at Glitchborn to deal extra damage.",
			shadowColor: "shadow-blue-400/30 hover:shadow-blue-400/30",
			borderColor: "border-blue-400",
			src: "galaxy-1.jpg",
			alt: "Galaxy 1",
		},
		{
			id: 1,
			icon: <Swift className="-rotate-45 scale-90" />,
			iconHover: <Swift className="-rotate-45 scale-90 fill-green-400" />,
			iconColor: "text-green-400",
			title: "Dash",
			text: "When you see a highlighted Azki, type that letter, you'll dash through them and build up your Charge.",
			shadowColor: "shadow-green-400/30 hover:shadow-green-400/30",
			borderColor: "border-green-400",
			src: "galaxy-2.jpg",
			alt: "Galaxy 2",
		},
		{
			id: 2,
			icon: <Bolt />,
			iconHover: <Bolt className="fill-orange-400" />,
			iconColor: "text-orange-400",
			title: "Chain dash",
			text: "When you see consecutive Azki of the same type, hold their key down and you'll quickly slash through all of them.",
			shadowColor: "shadow-orange-400/30 hover:shadow-orange-400/30",
			borderColor: "border-orange-400",
			src: "galaxy-3.jpg",
			alt: "Galaxy 3",
		},
		{
			id: 3,
			icon: <Fall />,
			iconHover: <Fall />,
			iconColor: "text-red-400",
			title: "Fast fall + Meteor slash",
			text: "Press [TAB] to perform a Fast Fall. Pressing it while moving downward creates a Meteor Slash.",
			shadowColor: "shadow-red-400/30 hover:shadow-red-400/30",
			borderColor: "border-red-400",
			src: "galaxy-4.jpg",
			alt: "Galaxy 4",
		},
		{
			id: 4,
			icon: <Jetpack />,
			iconHover: <JetpackFill />,
			iconColor: "text-purple-400",
			title: "Shift power",
			text: "Hold [SHIFT] or activate [CAPS] to use Shift Power. This will make your dash line thicker and stronger.",
			shadowColor: "shadow-purple-400/30 hover:shadow-purple-400/30",
			borderColor: "border-purple-400",
			src: "galaxy-5.jpg",
			alt: "Galaxy 5",
		},
		{
			id: 5,
			icon: <Sparkles />,
			iconHover: <Sparkles className="fill-cyan-400" />,
			iconColor: "text-cyan-400",
			title: "Full charge",
			text: "When you have Full Charge, your sword glows a new color. Dash lines are stronger and last longer.",
			shadowColor: "shadow-cyan-400/30 hover:shadow-cyan-400/30",
			borderColor: "border-cyan-400",
			src: "galaxy-6.jpg",
			alt: "Galaxy 6",
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
			className="bg-white"
		>
			<Slider
				slides={slides}
			/>
		</SectionWrapper>
	)
}
