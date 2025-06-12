import type { TImage } from "@/utils/types";
import NextImage from "next/image";

export default function Image({ src, alt, className, height, width }: TImage) {
	return (
		<NextImage
			src={src}
			alt={alt}
			className={className}
			height={height}
			width={width}
			placeholder="empty"
			loading="lazy"
		/>
	)
}
