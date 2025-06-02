import type { IBlockFeatures } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import { Star } from "lucide-react";
import { Sparkles, Gamepad2, BookOpen } from "lucide-react";
import CardFeature from "@/components/card-feature";
import Keyboard from "@/icons/keyboard";
import KeyboardFill from "@/icons/keyboard-fill";

export default function BlockFeatures({ id }: IBlockFeatures) {

	const cards = [
		{
			icon: <Keyboard />,
			iconHover: <KeyboardFill />,
			title: "Every Stroke = Action",
			content:
				<>
					<p>
						Most typing games require you to type full words before anything interesting happens. In {data.brand},
						every single keystroke is rewarded. Explosions, sliced letters, falling enemies, treasure, dashing
						across the screen, etc... these are all performed by single strokes.
					</p>
					<p>
						This is especially important to kids/new typists who struggle to find one key at a time. But for those
						who type fast, you'll feel a rush you won't forget.
					</p>
				</>,
		},
		{
			icon: <Sparkles />,
			iconHover: <Sparkles />,
			title: "Beginner Friendly, Fun For All",
			content:
				<>
					<p>
						There's no threat of death in {data.brand} until mid/late game. It's literally impossible to die in the
						first half of the game. Enemies will attack you, but minor attacks are automatically deflected. Major
						attacks merely slow you down.
					</p>
					<p>
						This creates a stress-free environment for a new typist to learn/play at their own pace. Typing faster
						gives higher scores and more rewards, but there is no such thing as failure.
					</p>
				</>,
		},
		{
			icon: <Gamepad2 />,
			iconHover: <Gamepad2 />,
			title: "Smooth, Natural Typing",
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
		},
		{
			icon: <BookOpen />,
			iconHover: <BookOpen />,
			title: "Learn More Through Lore",
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
			className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-background"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{cards.map(({ icon, iconHover, title, content }) => (
					<CardFeature
						key={title}
						icon={icon}
						iconHover={iconHover}
						title={title}
						content={content}
					/>
				))}
			</div>
		</SectionWrapper >
	)
}
