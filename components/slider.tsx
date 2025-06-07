import type { ISlider } from "@/utils/types";
import { useState } from "react";
import Slide from "@/components/slide";
import SliderControls from "@/components/slider-controls";
import SliderFullscreen from "@/components/slider-fullscreen";

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
			<SliderFullscreen
				slides={slides}
				activeId={activeId}
				handleFullscreen={handleFullscreen}
				previousImage={previousImage}
				nextImage={nextImage}
				fullscreen={fullscreen}
			/>

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
