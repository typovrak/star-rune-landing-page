import type { IBlockFeatures } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import { Star, Sword } from "lucide-react";
import CardFeature from "@/components/card-feature";
import Keyboard from "@/icons/keyboard";
import KeyboardFill from "@/icons/keyboard-fill";
import Heart from "@/icons/heart";
import Book from "@/icons/book";
import BookFill from "@/icons/book-fill";

export default function BlockFeatures({ id }: IBlockFeatures) {

	const cards = [
		{
			icon: <Sword />,
			iconHover: <Sword className="fill-white" />,
			title: "Every stroke = Action",
			content:
				<>
					<p>
						Most typing games require you to type full words before anything interesting happens. In {data.brand}, every single keystroke is rewarded. Explosions, sliced letters, falling enemies, treasure, dashing across the screen, etc... These are all performed by single strokes.
					</p>
					<p>
						This is especially important to kids/new typists who struggle to find one key at a time. But for those who type fast, you'll feel a rush you won't forget.
					</p>
				</>,
			className: "shadow-emerald-400/30 hover:shadow-emerald-400/30 border-emerald-400",
			iconClassName: "bg-emerald-400",
		},
		{
			icon: <Heart />,
			iconHover: <Heart className="fill-white" />,
			title: "Beginner friendly, fun for all",
			content:
				<>
					<p>
						There's no threat of death in {data.brand} until mid/late game. It's literally impossible to die in the first half of the game. Enemies will attack you, but minor attacks are automatically deflected. Major attacks merely slow you down.
					</p>
					<p>
						This creates a stress-free environment for a new typist to learn/play at their own pace. Typing faster gives higher scores and more rewards, but there is no such thing as failure.
					</p>
				</>,
			className: "shadow-red-400/30 hover:shadow-red-400/30 border-red-400",
			iconClassName: "bg-red-400",
		},
		{
			icon: <Keyboard />,
			iconHover: <KeyboardFill />,
			title: "Smooth natural typing",
			content:
				<>
					<p>
						The movement in {data.brand} is completely akin to real-world typing. You are not holding WASD to move; you
						dash attack to move through the level; and dash attacks change depending on which enemies are in front
						of you.
					</p>
					<p>
						Unlike most typing games which seem to completely forget about the spacebar, [SPACE], [SHIFT], [CAPS],
						[TAB], and [ENTER] are all integrated into the game in an intuitive way which mimics the same frequency
						of real typing.
					</p>
				</>,
			className: "shadow-sky-400/30 hover:shadow-sky-400/30 border-sky-400",
			iconClassName: "bg-sky-400",
		},
		{
			icon: <Book />,
			iconHover: <BookFill />,
			title: "Learn more through lore",
			content:
				<>
					<p>
						Through the story/lore of the game, you will subconsciously learn about Chemistry / Periodic Table of Elements, and you'll be given opportunities to practice morse code and foreign languages as well.

					</p>
					<p>
						118 Levels named after 118 periodic table elements. 118 Evil Elemental Lords, for element of the periodic table. Mnemonic Devices to help remember the order of the periodic table.
					</p>
				</>,
			className: "shadow-purple-400/30 hover:shadow-purple-400/30 border-purple-400",
			iconClassName: "bg-purple-400",
		},
	];

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Star />,
				title: "Unique features"
			}}
			title={`What makes ${data.brand} special`}
			text="Unlike any typing game you've played before"
			className="bg-gradient-to-b from-slate-100 to-white"
		>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{cards.map(({ icon, iconHover, title, content, className, iconClassName }) => (
					<CardFeature
						key={title}
						icon={icon}
						iconHover={iconHover}
						title={title}
						content={content}
						className={className}
						iconClassName={iconClassName}
					/>
				))}
			</div>
		</SectionWrapper >
	)
}
