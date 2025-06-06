import type { IBlockAbilities } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Gamepad2, ChevronRight, ChevronLeft, Maximize2 } from "lucide-react";
import data from "@/utils/data";
import GameplaySection from "@/components/gameplay-section";
import Shield from "@/icons/shield";
import Sparkles from "@/icons/sparkles";
import Bolt from "@/icons/bolt";
import Fall from "@/icons/fall";
import Swift from "@/icons/swift";
import Jetpack from "@/icons/jetpack";
import JetpackFill from "@/icons/jetpack-fill";
import CardSellingPoint from "@/components/card-selling-point";
import GallerySection from "@/components/gallery-section";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BlockAbilities({ id }: IBlockAbilities) {

	const [activeIndex, setActiveIndex] = useState(0);
	const [showLightBox, setShowLightBox] = useState(false);

	const slides = [
		{
			icon: <Shield />,
			iconHover: <Shield className="fill-blue-400" />,
			iconColor: "text-blue-400",
			title: "Auto-deflect",
			text: "Nova automatically will deflect Azki lasers. Later, you can upgrade your sword(s) to reflect these at Glitchborn to deal extra damage.",
			className: "shadow-blue-400/30 hover:shadow-blue-400/30 border-blue-400",
			src: "galaxy-1.jpg",
			alt: "Galaxy 1",
		},
		{
			icon: <Swift />,
			iconHover: <Swift className="fill-green-400" />,
			iconColor: "text-green-400",
			title: "Dash",
			text: "When you see a highlighted Azki, type that letter, you'll dash through them and build up your Charge.",
			className: "shadow-green-400/30 hover:shadow-green-400/30 border-green-400",
			src: "galaxy-2.jpg",
			alt: "Galaxy 2",
		},
		{
			icon: <Bolt />,
			iconHover: <Bolt className="fill-orange-400" />,
			iconColor: "text-orange-400",
			title: "Chain dash",
			text: "When you see consecutive Azki of the same type, hold their key down and you'll quickly slash through all of them.",
			className: "shadow-orange-400/30 hover:shadow-orange-400/30 border-orange-400",
			src: "galaxy-3.jpg",
			alt: "Galaxy 3",
		},
		{
			icon: <Fall />,
			iconHover: <Fall />,
			iconColor: "text-red-400",
			title: "Fast fall + Meteor slash",
			text: "Press [TAB] to perform a Fast Fall. Pressing it while moving downward creates a Meteor Slash.",
			className: "shadow-red-400/30 hover:shadow-red-400/30 border-red-400",
			src: "galaxy-4.jpg",
			alt: "Galaxy 4",
		},
		{
			icon: <Jetpack />,
			iconHover: <JetpackFill />,
			iconColor: "text-purple-400",
			title: "Shift power",
			text: "Hold [SHIFT] or activate [CAPS] to use Shift Power. This will make your dash line thicker and stronger.",
			className: "shadow-purple-400/30 hover:shadow-purple-400/30 border-purple-400",
			src: "galaxy-5.jpg",
			alt: "Galaxy 5",
		},
		{
			icon: <Sparkles />,
			iconHover: <Sparkles className="fill-cyan-400" />,
			iconColor: "text-cyan-400",
			title: "Full charge",
			text: "When you have Full Charge, your sword glows a new color. Dash lines are stronger and last longer.",
			className: "shadow-cyan-400/30 hover:shadow-cyan-400/30 border-cyan-400",
			src: "galaxy-6.jpg",
			alt: "Galaxy 6",
		},
	];

	const nextImage = () => {
		setActiveIndex((prev) => (prev + 1) % slides.length);
	}

	const prevImage = () => {
		setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
	}

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

			<div className="relative overflow-hidden rounded-xl shadow-xl shadow-yellow-500/10">
				<Button
					variant="ghost"
					size="icon"
					className="absolute top-4 right-4 z-10 bg-black/40 text-white hover:bg-black/60 rounded-full"
					onClick={() => setShowLightBox(true)}
				>
					<Maximize2 className="h-5 w-5" />
				</Button>

				<img
					src={slides[activeIndex].src}
					alt={slides[activeIndex].alt}
					className="w-full aspect-video object-cover"
				/>

				<div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
					<p className="font-medium">{slides[activeIndex].title}</p>
				</div>

				<Button
					variant="ghost"
					size="icon"
					className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
					onClick={prevImage}
				>
					<ChevronLeft className="h-6 w-6" />
				</Button>

				<Button
					variant="ghost"
					size="icon"
					className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full"
					onClick={nextImage}
				>
					<ChevronRight className="h-6 w-6" />
				</Button>
			</div>

			{slides.map(({ icon, iconHover, iconColor, title, text, className, src, alt }) => (
				<article>
					<CardSellingPoint
						key={title}
						icon={icon}
						iconHover={iconHover}
						iconColor={iconColor}
						title={title}
						text={text}
						className={className}
					/>
				</article>
			))}
		</SectionWrapper>
	)
}
