import type { IBlockResume } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star, Sword } from "lucide-react";
import data from "@/utils/data";
import { Card, CardContent } from "@/components/ui/card";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import CardSellingPoint from "@/components/card-selling-point";
import Heart from "@/icons/heart";
import Trophy from "@/icons/trophy";
import TrophyFill from "@/icons/trophy-fill";
import Keyboard from "@/icons/keyboard";
import KeyboardFill from "@/icons/keyboard-fill";

export default function BlockResume({ id }: IBlockResume) {

	const cards = [
		{
			icon: <Heart />,
			iconHover: <Heart className="fill-red-400" />,
			iconColor: "text-red-400",
			title: "Beginner friendly",
			text: "Impossible to fail in early levels",
			className: "shadow-red-400/30 hover:shadow-red-400/30 border-red-400",
		},
		{
			icon: <Trophy />,
			iconHover: <TrophyFill />,
			iconColor: "text-purple-400",
			title: "118 levels",
			text: "Every level is unique",
			className: "shadow-purple-400/30 hover:shadow-purple-400/30 border-purple-400",
		},
		{
			icon: <Keyboard />,
			iconHover: <KeyboardFill className="fill-emerald-400" />,
			iconColor: "text-emerald-400",
			title: "Every stroke = Action",
			text: "Feel the rush with every keystroke",
			className: "shadow-emerald-400/30 hover:shadow-emerald-400/30 border-emerald-400",
		},
		{
			icon: <Sword />,
			iconHover: <Sword className="fill-sky-400" />,
			iconColor: "text-sky-400",
			title: "12 legendary swords",
			text: "Each with unique abilities",
			className: "shadow-sky-400/30 hover:shadow-sky-400/30 border-sky-400",
		},
	];

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Star />,
				title: "Amazing journey"
			}}
			title="The ultimate typing adventure"
			text={`${data.brand} is the ultimate typing game and the funnest experience typing you've ever had! Slash and dash through hordes of cookies and evil letters. 力. 速. 志. Unleash the true power of a super star!`}
			h1={true}
		>
			<div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
				<div className="space-y-4 order-2 lg:order-1">
					<h3 className="text-2xl font-bold text-slate-700">The World of {data.brand}</h3>

					<p className="text-slate-500">
						Long ago, The Shapes lived in harmony. And The Stars ruled peacefully from above. But one day, 12 Evil
						Wizards came and corrupted everything. Using Magic Runes, they created 12 Swords of Fable, and opened
						up a portal to the Dark Web, and hordes of Evil Letters and Cookies poured out.
					</p>

					<p className="text-slate-500">
						The Stars disappeared and were never seen again. But 5 Great Kings fought back. They won a great
						battle, breaking the Dragon Wizard's sword, Kry XeRnOg. Now, only the Hearts remain free.
					</p>

					<div className="pt-4 flex flex-wrap gap-4">
						<ButtonIconKickstarter />
						<ButtonIconDemo />
					</div>
				</div>

				<Card className="order-1 lg:order-2 overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/30 rounded-lg hover:shadow-xl transition-all duration-300 hover:shadow-yellow-500/30 hover:rotate-cta">
					<CardContent className="p-0">
						<img
							alt={`${data.brand} story illustration`}
							className="aspect-video object-cover w-full"
							height="310"
							src="/star-rune-world.jpg"
							width="550"
						/>
					</CardContent>
				</Card>
			</div>

			<div
				className="grid sm:grid-cols-2 gap-4 xl:grid-cols-4"
			>
				{cards.map(({ icon, iconHover, iconColor, title, text, className }) => (
					<CardSellingPoint
						key={title}
						icon={icon}
						iconHover={iconHover}
						iconColor={iconColor}
						title={title}
						text={text}
						className={className}
					/>
				))}
			</div>
		</SectionWrapper>
	)
}
