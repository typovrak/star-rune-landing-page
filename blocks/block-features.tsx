import type { IBlockFeatures } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import { Star } from "lucide-react";
import CardFeature from "@/components/card-feature";
import Keyboard from "@/icons/keyboard";
import KeyboardFill from "@/icons/keyboard-fill";
import Book from "@/icons/book";
import BookFill from "@/icons/book-fill";
import School from "@/icons/school";
import Comet from "@/icons/comet";

export default function BlockFeatures({ id }: IBlockFeatures) {

	const cards = [
		{
			icon: <School />,
			iconHover: <School className="fill-white" />,
			title: "Knowledge through gameplay",
			content:
				<>
					<p>
						Boss fights become rhythm duels. As enemies chant runes, letters scroll across the top of the screen.
						You must type them with perfect timing, this isn't about speed, it's about flow.
					</p>
					<p>
						Each success builds toward a devastating ultimate.
						Land every stroke to fill your Super Star bar and unleash screen-shaking attacks.
						One missed beat? The combo breaks, and the boss retaliates.
					</p>
				</>,
			className: "shadow-red-400/30 hover:shadow-red-400/30 border-red-400",
			iconClassName: "bg-red-400",
		},
		{
			icon: <Book />,
			iconHover: <BookFill />,
			title: "Learn more through lore",
			content:
				<>
					<p>
						Through the story/lore of the game, you will subconsciously learn about Chemistry / Periodic Table of
						Elements, and you'll be given opportunities to practice morse code and foreign languages as well.
					</p>
					<p>
						118 Levels named after 118 periodic table elements. 118 Evil Elemental Lords, for element of the
						periodic table. Mnemonic Devices to help remember the order of the periodic table.
					</p>
				</>,
			className: "shadow-purple-400/30 hover:shadow-purple-400/30 border-purple-400",
			iconClassName: "bg-purple-400",
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
			className: "shadow-emerald-400/30 hover:shadow-emerald-400/30 border-emerald-400",
			iconClassName: "bg-emerald-400",
		},
		{
			icon: <Comet />,
			iconHover: <Comet className="fill-white" />,
			title: "Super Star mode",
			content:
				<>
					<p>
						Every level hides a learning trigger.
						You'll meet heroes named after chemical elements, unlock swords forged with real alchemical runes,
						and recognize Morse code just by surviving its patterns.

					</p>
					<p>
						Star Rune trains more than your fingers.
						Without flashcards or guides, you’ll pick up elemental symbols, sound-letter associations,
						and even linguistic roots just by staying alive.
					</p>
				</>,
			className: "shadow-blue-400/30 hover:shadow-blue-400/30 border-blue-400",
			iconClassName: "bg-blue-400",
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
		// TODO: work on the background
		//className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-background"
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
