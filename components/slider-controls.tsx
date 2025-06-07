import type { ISliderControls } from "@/utils/types";
import ButtonCircle from "@/components/button-circle";
import Maximize from "@/icons/maximize";
import ChevronRight from "@/icons/chevron-right";
import { X as Close } from "lucide-react";

export default function SliderControls({ slides, activeId, handleFullscreen, previousImage, nextImage, isFullscreen, className }: ISliderControls) {
	return (
		<div className={`flex items-center justify-between${isFullscreen ? "" : " mb-2 lg:mb-4"}${className ? ` ${className}` : ""}`}>
			<ButtonCircle
				icon={isFullscreen ? <Close /> : <Maximize />}
				title={isFullscreen ? "Close fullscreen" : "Go to fullscreen"}
				onClick={() => handleFullscreen(!isFullscreen)}
				className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor}${isFullscreen ? "" : " lg:h-14 lg:w-14"}`}
				iconClassName={`h-6 w-6 group-hover/button-circle:scale-110${isFullscreen ? "" : " lg:h-8 lg:w-8 lg:group-hover/button-circle:scale-125"}`}
			/>

			<div className="flex items-center gap-4">
				<ButtonCircle
					icon={<ChevronRight />}
					title="Go to previous image"
					onClick={previousImage}
					className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor} ${activeId === 0 ? "opacity-0 pointer-events-none" : "opacity-100"}${isFullscreen ? "" : " lg:h-14 lg:w-14"}`}
					iconClassName={`rotate-180 h-8 w-8 relative right-[2px] group-hover/button-circle:-translate-x-1${isFullscreen ? "" : " lg:h-10 lg:w-10 lg:group-hover/button-circle:-translate-x-2"}`}
				/>

				<p className="text-slate-600 lg:text-lg">
					{activeId + 1} / {slides.length}
				</p>

				<ButtonCircle
					icon={<ChevronRight />}
					title="Go to next image"
					onClick={nextImage}
					className={`${slides[activeId].borderColor} ${slides[activeId].shadowColor} ${activeId === slides.length - 1 ? "opacity-0 pointer-events-none" : "opacity-100"}${isFullscreen ? "" : " lg:h-14 lg:w-14"}`}
					iconClassName={`h-8 w-8 relative left-[2px] group-hover/button-circle:translate-x-1${isFullscreen ? "" : " lg:h-10 lg:w-10 lg:group-hover/button-circle:-translate-x-2"}`}
				/>
			</div>
		</div>
	)
}
