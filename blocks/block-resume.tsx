import type { IBlockResume } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star, Keyboard, Zap, Heart, Sword, Award } from "lucide-react";
import data from "@/utils/data";
import { Button } from "@/components/ui/button";
import ExternalLink from "@/components/external-link";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
			<div className="grid md:grid-cols-2 gap-10 items-center">
				<div className="order-2 md:order-1">
					<div className="space-y-4">
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
						<div className="pt-4 flex flex-wrap gap-3">
							<Button
								asChild
								variant="outline"
								className="group relative overflow-hidden border-yellow-500/50 text-yellow-600 hover:text-yellow-700 hover:border-yellow-500"
							>
								<ExternalLink href={data.url.kickstarter}>
									<span className="absolute inset-0 bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors duration-300"></span>
									<span className="relative">Learn More About The World</span>
								</ExternalLink>
							</Button>
							<Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
								<ExternalLink href={data.url.demo}>
									<Keyboard className="mr-2 h-4 w-4" />
									Play Demo
								</ExternalLink>
							</Button>
						</div>
					</div>
				</div>
				<div className="order-1 md:order-2">
					<Card className="overflow-hidden border-2 border-yellow-500/20 shadow-xl shadow-yellow-500/5 transition-all duration-300 hover:shadow-yellow-500/10 rounded-xl">
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
			</div>

			<motion.div
				className="grid grid-cols-5 gap-4"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.8 }}
			>
				<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
					<CardContent className="p-4 flex items-center">
						<Zap className="h-8 w-8 text-yellow-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
						<div>
							<h3 className="font-bold">Every Stroke = Action</h3>
							<p className="text-xs text-white/70">Feel the rush with every keystroke</p>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
					<CardContent className="p-4 flex items-center">
						<Heart className="h-8 w-8 text-red-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
						<div>
							<h3 className="font-bold">Beginner Friendly</h3>
							<p className="text-xs text-white/70">Impossible to fail in early levels</p>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
					<CardContent className="p-4 flex items-center">
						<Sword className="h-8 w-8 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
						<div>
							<h3 className="font-bold">12 Legendary Swords</h3>
							<p className="text-xs text-white/70">Each with unique abilities</p>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
					<CardContent className="p-4 flex items-center">
						<Award className="h-8 w-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
						<div>
							<h3 className="font-bold">Learn While Playing</h3>
							<p className="text-xs text-white/70">Chemistry, languages & more</p>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-black/60 border-yellow-500/50 backdrop-blur-sm text-white hover:bg-black/70 transition-all duration-300 hover:border-yellow-500/80 hover:shadow-lg hover:shadow-yellow-500/10 group">
					<CardContent className="p-4 flex items-center">
						<Award className="h-8 w-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
						<div>
							<h3 className="font-bold">118 Levels</h3>
							<p className="text-xs text-white/70">Every level is unique</p>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</SectionWrapper>
	)
}
