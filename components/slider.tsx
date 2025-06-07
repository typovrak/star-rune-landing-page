import type { ISlider } from "@/utils/types";
import { useState } from "react";
import Slide from "@/components/slide";
import ButtonCircle from "@/components/button-circle";
import ChevronRight from "@/icons/chevron-right";
import Maximize from "@/icons/maximize";
import { X as Close } from "lucide-react";

export default function Slider({ slides }: ISlider) {

	const [activeId, setActiveId] = useState(0);
	const [fullscreen, setFullscreen] = useState(false);

	function previousImage() {
		setActiveId((prev) => (prev - 1 + slides.length) % slides.length);
	}

	function nextImage() {
		setActiveId((prev) => (prev + 1) % slides.length);
	}

	function handleFullscreen(state: boolean) {
		setFullscreen(state);
	}

	return (
		<div className="max-w-6xl mx-auto">
			<div className={`fixed inset-0 bg-yellow-800/50 z-50 transition-all duration-1000 flex items-center justify-center overscroll-contain ${fullscreen ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"}`}>
				<nav className="absolute top-0 left-0 w-full h-header border-b bg-background ">

					<ButtonCircle
						icon={<Close />}
						title="Close fullscreen"
						onClick={() => handleFullscreen(false)}
						className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor}`}
						iconClassName="h-6 w-6 lg:h-8 lg:w-8 group-hover/button-circle:scale-110 lg:group-hover/button-circle:scale-125"
					/>
				</nav>

				<img
					src={`/${slides[activeId].src}`}
					alt={slides[activeId].alt}
					className="object-cover aspect-video"
				/>
			</div>

			<div className="flex items-center justify-between mb-2 lg:mb-4">
				<ButtonCircle
					icon={<Maximize />}
					title="Go to fullscreen"
					onClick={() => handleFullscreen(true)}
					className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor}`}
					iconClassName="h-6 w-6 lg:h-8 lg:w-8 group-hover/button-circle:scale-110 lg:group-hover/button-circle:scale-125"
				/>

				<div className="flex items-center gap-4">
					<ButtonCircle
						icon={<ChevronRight />}
						title="Go to previous image"
						onClick={previousImage}
						className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor} ${activeId === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
						iconClassName="rotate-180 h-8 w-8 relative right-[2px] group-hover/button-circle:-translate-x-1 lg:h-10 lg:w-10 lg:group-hover/button-circle:-translate-x-2"
					/>

					<p className="text-slate-600 lg:text-lg">
						{activeId + 1} / {slides.length}
					</p>

					<ButtonCircle
						icon={<ChevronRight />}
						title="Go to next image"
						onClick={nextImage}
						className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor} ${activeId === slides.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
						iconClassName="h-8 w-8 relative left-[2px] group-hover/button-circle:translate-x-1 lg:h-10 lg:w-10 lg:group-hover/button-circle:translate-x-2"
					/>
				</div>
			</div>

			<div className={`flex border-2 shadow-lg hover:shadow-xl rounded-xl overflow-hidden relative transition-all duration-300 group ${slides[activeId].shadowColor} ${slides[activeId].borderColor}`}>
				<Slide
					key={slides[0].title}
					id={slides[0].id}
					icon={slides[0].icon}
					iconHover={slides[0].iconHover}
					iconColor={slides[0].iconColor}
					title={slides[0].title}
					text={slides[0].text}
					borderColor={slides[0].borderColor}
					src={slides[0].src}
					alt={slides[0].alt}
					className="relative pointer-events-none opacity-0"
				/>

				{slides.map(({ id, icon, iconHover, iconColor, title, text, borderColor, src, alt }) => (
					<Slide
						key={title}
						id={id}
						activeId={activeId}
						icon={icon}
						iconHover={iconHover}
						iconColor={iconColor}
						title={title}
						text={text}
						borderColor={borderColor}
						src={src}
						alt={alt}
					/>
				))}

			</div>
		</div >
	)
}
