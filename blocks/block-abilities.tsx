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
			title: "Auto Deflect",
			text: "Nova automatically will deflect Azki lasers. Later, you can upgrade your sword(s) to reflect these at Glitchborn to deal extra damage.",
			shadowColor: "shadow-blue-400/30 hover:shadow-blue-400/30",
			borderColor: "border-blue-400",
			src: "auto-deflect.gif",
			alt: "",
		},
		{
			id: 1,
			icon: <Swift className="-rotate-45 scale-90" />,
			iconHover: <Swift className="-rotate-45 scale-90 fill-green-400" />,
			iconColor: "text-green-400",
			title: "Dash",
			text: "When you see a highlighted Azki, type that letter; you'll dash through them and build up your Charge.",
			shadowColor: "shadow-green-400/30 hover:shadow-green-400/30",
			borderColor: "border-green-400",
			src: "dash.gif",
			alt: "",
		},
		{
			id: 2,
			icon: <Bolt />,
			iconHover: <Bolt className="fill-orange-400" />,
			iconColor: "text-orange-400",
			title: "Chain Dash",
			text: "When you see consecutive Azki of the same type, hold their key down and you'll quickly slash through all of them. But each Azki dashed this way provides you with only 25% of the normal Charge reward.",
			shadowColor: "shadow-orange-400/30 hover:shadow-orange-400/30",
			borderColor: "border-orange-400",
			src: "chain-dash.gif",
			alt: "",
		},
		{
			id: 3,
			icon: <Fall />,
			iconHover: <Fall />,
			iconColor: "text-red-400",
			title: "Triple Jump + Spin Slash",
			text: "Press [SPACE] to jump; you have up to 3 jumps. Jumping engages a Spin Slash; each time you press [SPACE], you'll spin faster and your Spin Dash will grow.",
			shadowColor: "shadow-red-400/30 hover:shadow-red-400/30",
			borderColor: "border-red-400",
			src: "triple-jump-spin-slash.gif",
			alt: "",
		},
		{
			id: 4,
			icon: <Jetpack />,
			iconHover: <JetpackFill />,
			iconColor: "text-purple-400",
			title: "Slow Fall",
			text: "Hold [SPACE] to fall slowly.",
			shadowColor: "shadow-purple-400/30 hover:shadow-purple-400/30",
			borderColor: "border-purple-400",
			src: "slow-fall.gif",
			alt: "",
		},
		{
			id: 5,
			icon: <Sparkles />,
			iconHover: <Sparkles className="fill-cyan-400" />,
			iconColor: "text-cyan-400",
			title: "Fast Fall + Meteor Slash",
			text: "Press [TAB] to perform a Fast Fall. Pressing it while moving downward creates a Meteor Slash. This will damage Glitchborn and Cookies. You can also use this to \"Ground Pound\" an arrow down faster.",
			shadowColor: "shadow-cyan-400/30 hover:shadow-cyan-400/30",
			borderColor: "border-cyan-400",
			src: "fast-fall-meteor-slash.gif",
			alt: "",
		},
		{
			id: 6,
			icon: <Sparkles />,
			iconHover: <Sparkles className="fill-yellow-400" />,
			iconColor: "text-yellow-400",
			title: "Full Charge + Ultimate",
			text: "When you have Full Charge, you'll gain an aura, your attacks will be a little bit stronger, and you can cast a unique Ultimate Attack from 1 of 12 Legendary swords.",
			shadowColor: "shadow-yellow-400/30 hover:shadow-yellow-400/30",
			borderColor: "border-yellow-400",
			src: "full-charge-plus-ultimate.gif",
			alt: "",
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
