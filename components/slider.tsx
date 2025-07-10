import type { ISlider } from "@/utils/types";
import { useState } from "react";
import Slide from "@/components/slide";
import SliderControls from "@/components/slider-controls";
import SliderFullscreen from "@/components/slider-fullscreen";

export default function Slider({ slides }: ISlider) {
	const placeholderId = 6;

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
		<div className="relative max-w-6xl mx-auto">
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
				className="lg:absolute lg:top-0 lg:z-10 lg:w-full lg:p-4"
				countClassName={`lg:bg-slate-600 lg:text-white lg:px-3 lg:py-1 lg:rounded-lg lg:border-2 lg:shadow-lg lg:hover:shadow-xl lg:transition-all lg:duration-300 ${slides[activeId].borderColor} ${slides[activeId].shadowColor}`}
			/>

			<div className={`flex border-2 shadow-lg hover:shadow-xl rounded-xl overflow-hidden relative transition-all duration-300 group ${slides[activeId].shadowColor} ${slides[activeId].borderColor}`}>
				<Slide
					key={slides[placeholderId].title}
					id={slides[placeholderId].id}
					icon={slides[placeholderId].icon}
					iconHover={slides[placeholderId].iconHover}
					iconColor={slides[placeholderId].iconColor}
					title={slides[placeholderId].title}
					text={slides[placeholderId].text}
					borderColor={slides[placeholderId].borderColor}
					src={slides[placeholderId].src}
					alt={slides[placeholderId].alt}
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
