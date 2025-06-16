import type { ISlide } from "@/utils/types";
import CardSellingPoint from "@/components/card-selling-point";
import Image from "@/components/image";

export default function Slide({ id, activeId, icon, iconHover, iconColor, title, text, borderColor, src, alt, className }: ISlide) {
	return (
		<div
			className={`group/hover absolute h-full w-full will-change-transform flex top-0 left-0 transition-all duration-1000${className ? ` ${className}` : ""}`}
			style={
				activeId !== undefined ?
					{
						transform: `translate3d(${activeId * -100 + id * 100}%, 0, 0)`
					}
					: undefined
			}
		>
			<div className="relative flex flex-col">
				<Image
					src={`/${src}`}
					alt={alt}
					className="aspect-video object-cover"
					height={1080}
					width={1920}
				/>

				<CardSellingPoint
					icon={icon}
					iconHover={iconHover}
					iconColor={iconColor}
					title={title}
					text={text}
					className={`${borderColor}`}
					isSlide={true}
				/>

				<span className={`${id !== activeId ? "opacity-100" : "opacity-0"} transition-all duration-300 absolute h-full w-0 border-l-2 top-0 left-0 ${borderColor}`}></span>
				<span className={`${id !== activeId ? "opacity-100" : "opacity-0"} transition-all duration-300 absolute h-full w-0 border-l-2 top-0 right-0 ${borderColor}`}></span>
			</div>
		</div>
	)
}
