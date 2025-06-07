import type { ISlider } from "@/utils/types";
import { useState } from "react";
import Slide from "@/components/slide";
import ButtonCircle from "@/components/button-circle";
import ChevronRight from "@/icons/chevron-right";

export default function Slider({ slides }: ISlider) {

	const [activeId, setActiveId] = useState(0);

	function previousImage() {
		setActiveId((prev) => (prev - 1 + slides.length) % slides.length);
	}

	function nextImage() {
		setActiveId((prev) => (prev + 1) % slides.length);
	}

	return (
		<>
			<div className="flex gap-4 items-center justify-end mb-4">
				<ButtonCircle icon={<ChevronRight />}
					title="Go to previous image"
					onClick={previousImage}
					className={`rotate-180 ${slides[activeId].borderColor} ${activeId === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
					iconClassName="h-8 w-8 group-hover/button-circle:translate-x-1"
				/>

				<p className="text-slate-600">
					{activeId + 1} / {slides.length}
				</p>

				<ButtonCircle
					icon={<ChevronRight />}
					title="Go to next image"
					onClick={nextImage}
					className={`${slides[activeId].borderColor} ${activeId === slides.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}`}
					iconClassName="h-8 w-8 group-hover/button-circle:translate-x-1"
				/>
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
		</>
	)
}
