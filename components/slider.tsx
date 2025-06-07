import type { ISlider } from "@/utils/types";
import { useState } from "react";
import Slide from "@/components/slide";
import ButtonCircle from "@/components/button-circle";
import ChevronRight from "@/icons/chevron-right";
import Maximize from "@/icons/maximize";
import { X as Close } from "lucide-react";
import SliderControls from "@/components/slider-controls";

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
			<div className={`fixed inset-0 bg-black/50 z-50 transition-all duration-1000 flex flex-col items-center justify-center overscroll-contain ${fullscreen ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"}`}>
				<nav className="w-full h-header min-h-[var(--header-height)] border-b bg-background">
					<SliderControls
						slides={slides}
						activeId={activeId}
						handleFullscreen={handleFullscreen}
						previousImage={previousImage}
						nextImage={nextImage}
						isFullscreen={true}
						className="container h-full px-4"
					/>
				</nav>

				<div className="relative h-full flex items-center justify-center max-h-[calc(100vh-var(--header-height))]">
					<img
						src={`/${slides[activeId].src}`}
						alt={slides[activeId].alt}
						className="flex aspect-video h-auto w-full max-h-[calc(100vh-var(--header-height))]"
					/>
				</div>
			</div>

			<SliderControls
				slides={slides}
				activeId={activeId}
				handleFullscreen={handleFullscreen}
				previousImage={previousImage}
				nextImage={nextImage}
			/>

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
