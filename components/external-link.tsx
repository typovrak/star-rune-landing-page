import Link from "next/link";
import type { IExternalLink } from "@/utils/types";

export default function ExternalLink({ href, className, children, title, onMouseEnter, onMouseOut, onTouchStart, onTouchEnd, onClick }: IExternalLink) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			aria-label={title}
			title={title}
			onMouseEnter={onMouseEnter}
			onMouseOut={onMouseOut}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			onClick={onClick}
		>
			{children}
		</Link>
	)
}
