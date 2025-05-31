import type { IScrollIndicator } from "@/utils/types";
import Link from "next/link";
import Mouse from "@/icons/mouse";

export default function ScrollIndicator({ url, title }: IScrollIndicator) {
	return (
		<Link
			href={url}
			className="animate-bounce"
			title={title}
			aria-label={title}
		>
			<Mouse className="h-14 w-14 md:h-16 md:w-16 text-background fill-yellow-500/25" />
		</Link>
	)
}
