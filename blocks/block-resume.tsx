import type { IBlockResume } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star, Sword } from "lucide-react";
import data from "@/utils/data";
import { Card, CardContent } from "@/components/ui/card";
import ButtonIconDemo from "@/components/button-icon-demo";
import ButtonIconKickstarter from "@/components/button-icon-kickstarter";
import CardSellingPoint from "@/components/card-selling-point";
import Bolt from "@/icons/bolt";
import Heart from "@/icons/heart";
import Trophy from "@/icons/trophy";
import TrophyFill from "@/icons/trophy-fill";

export default function BlockResume({ id }: IBlockResume) {
	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Star />,
				title: "Amazing journey"
			}}
			title="The ultimate typing adventure"
			text={`${data.brand} is the ultimate typing game and the funnest experience typing you've ever had! Slash and dash through hordes of cookies and evil letters. 力. 速. 志. Unleash the true power of a super star!`}
			className=""
		>
			{/* TODO: this block need a H1 */}
			{/* TODO: ajouter un icon étoile dans le titre "World of Star Rune" ??? */}
			<div className="grid md:grid-cols-2 gap-10 items-center mb-10">
				<div className="space-y-4 order-2 md:order-1">
					<h3 className="text-2xl font-bold">The World of {data.brand}</h3>
					<p className="text-muted-foreground">
						Long ago, The Shapes lived in harmony. And The Stars ruled peacefully from above. But one day, 12 Evil
						Wizards came and corrupted everything. Using Magic Runes, they created 12 Swords of Fable, and opened
						up a portal to the Dark Web, and hordes of Evil Letters and Cookies poured out.
					</p>
					<p className="text-muted-foreground">
						The Stars disappeared and were never seen again. But 5 Great Kings fought back. They won a great
						battle, breaking the Dragon Wizard's sword, Kry XeRnOg. Now, only the Hearts remain free.
					</p>
					<div className="pt-4 flex flex-wrap gap-4">
						<ButtonIconKickstarter />

						<ButtonIconDemo />
					</div>
				</div>

				<Card className="order-1 md:order-2 overflow-hidden border-2 border-yellow-500/30 shadow-lg shadow-yellow-500/30 rounded-lg hover:shadow-xl transition-all duration-300 hover:shadow-yellow-500/30 hover:rotate-cta">
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
				className="grid grid-cols-4 gap-4"
			>
				{/* TODO: mettre un icon clavier de tabler.io ici? */}
				<CardSellingPoint
					icon={<Bolt />}
					iconHover={<Bolt className="fill-yellow-400" />}
					iconColor="text-yellow-400"
					title="Every stroke = Action"
					text="Feel the rush with every keystroke"
					className="shadow-yellow-400/30 hover:shadow-yellow-400/30"
				/>

				<CardSellingPoint
					icon={<Heart />}
					iconHover={<Heart className="fill-red-400" />}
					iconColor="text-red-400"
					title="Beginner friendly"
					text="Impossible to fail in early levels"
					className="shadow-red-400/30 hover:shadow-red-400/30"
				/>

				<CardSellingPoint
					icon={<Sword />}
					iconHover={<Sword className="fill-blue-400" />}
					iconColor="text-blue-400"
					title="12 legendary swords"
					text="Each with unique abilities"
					className="shadow-blue-400/30 hover:shadow-blue-400/30"
				/>

				<CardSellingPoint
					icon={<Trophy />}
					iconHover={<TrophyFill />}
					iconColor="text-purple-400"
					title="118 levels"
					text="Every level is unique"
					className="shadow-purple-400/30 hover:shadow-purple-400/30"
				/>
			</div>
		</SectionWrapper>
	)
}
