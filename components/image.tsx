import type { IImage } from "@/utils/types";

export default function Image({ src, alt, className, height, width }: IImage) {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			height={height}
			width={width}
			loading="lazy"
		/>
	)
}
