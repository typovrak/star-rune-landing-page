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
//import Image from "@/components/image";

export default function BlockResume({ id, dataAppearThreshold }: IBlockResume) {

	const cards = [
		{
			icon: <Keyboard />,
			iconHover: <KeyboardFill className="fill-emerald-400" />,
			iconColor: "text-emerald-400",
			title: "Every stroke = Action",
			text: "Feel the rush with every keystroke",
			className: "shadow-emerald-400/30 hover:shadow-emerald-400/30 border-emerald-400",
		},
		{
			icon: <Heart />,
			iconHover: <Heart className="fill-red-400" />,
			iconColor: "text-red-400",
			title: "Beginner friendly",
			text: "Impossible to fail in early levels",
			className: "shadow-red-400/30 hover:shadow-red-400/30 border-red-400",
		},
		{
			icon: <Sword />,
			iconHover: <Sword className="fill-sky-400" />,
			iconColor: "text-sky-400",
			title: "12 legendary swords",
			text: "Each with unique abilities",
			className: "shadow-sky-400/30 hover:shadow-sky-400/30 border-sky-400",
		},
		{
			icon: <Trophy />,
			iconHover: <TrophyFill />,
			iconColor: "text-purple-400",
			title: "118 levels",
			text: "Every level is unique",
			className: "shadow-purple-400/30 hover:shadow-purple-400/30 border-purple-400",
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
			dataAppearThreshold={dataAppearThreshold}
			className="bg-white"
		>
			<div className="grid lg:grid-cols-2 gap-10 items-center mb-10">
				<div className="space-y-4 order-2 lg:order-1">
					<h2 className="text-2xl font-bold text-slate-700">The World of {data.brand}</h2>

					<p className="text-slate-500">
						The Stars have always guarded Shape World from the Azki. They wielded Twelve Legendary swords, forged from Star Runes. The most powerful was called Kry XeRnOg. But in secret, someone cursed it with Dark Runes. The Curse destroyed the sword, wielder, and his home.
					</p>

					<p className="text-slate-500">
						Five Kings gathered near Kry XeRnOg. From its broken shards, they forged new blades.
					</p>


					<pre className="text-slate-500 whitespace-pre">
						{`BC NOFNe forged BAlGaInTl
Al "SiPS" ClArK forged PAsSbBi
GaGe AsSe forged OSSeTePo
TeI Xecs forged SiGe
P.b. BiPoAt forged BrIAtTs`}
					</pre>

					<p className="text-slate-500">
						But The Curse lived on through these swords, and corruption spread across the Five Kingdoms. Hordes of Azki swarmed the world. And the Stars were never seen again.
					</p>

					<div className="pt-4 flex flex-wrap gap-4">
						<ButtonIconKickstarter />
						<ButtonIconDemo />
					</div>
				</div>

				<Card className="order-1 lg:order-2 overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/30 rounded-lg hover:shadow-xl hover:shadow-yellow-500/30 hover:rotate-cta duration-300 transition-all flex">
					<CardContent className="flex p-0 aspect-video w-full">
						{/*<Image
							src="/star-rune-volcano.webp"
							alt={`${data.brand} volcano level`}
							className="aspect-video object-cover w-full"
							height={310}
							width={550}
						/>*/}

						<iframe
							src="https://www.youtube.com/watch?v=Ws1KOQASvlI&ab_channel=STARRUNE"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="w-full h-full"
						></iframe>
					</CardContent>
				</Card>
			</div>

			<div
				className="grid sm:grid-cols-2 gap-4 xl:grid-cols-4"
			>
				{cards.map(({ icon, iconHover, iconColor, title, text, className }, index) => (
					<CardSellingPoint
						key={title}
						icon={icon}
						iconHover={iconHover}
						iconColor={iconColor}
						title={title}
						text={text}
						className={className}
						style={{
							'--delay': `${1500 + index * 250}ms`,
						}}
					/>
				))}
			</div>
		</SectionWrapper>
	)
}
