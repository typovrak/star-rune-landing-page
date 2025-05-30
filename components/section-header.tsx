import Badge from "@/components/badge";
import type { ISectionHeader } from "@/utils/types";
import Link from "next/link";
import { useRef } from "react";

export default function SectionHeader({ id, badge, title, text }: ISectionHeader) {

	const badgeLinkRef = useRef(null);

	function titleHover(_: any, mouseIn = true) {
		if (!badgeLinkRef.current) return;

		if (mouseIn) {
			(badgeLinkRef.current as HTMLAnchorElement).classList.add("hover");
			return
		}

		(badgeLinkRef.current as HTMLAnchorElement).classList.remove("hover");
	}

	return (
		<div className="flex flex-col items-center justify-center space-y-4 text-center">
			<Link
				ref={badgeLinkRef}
				href={`#${id}`}
				className="group"
			>
				<Badge icon={badge.icon} title={badge.title} />
			</Link>

			<div className="space-y-2 max-w-3xl">
				<h2 className="leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
					<Link
						href={`#${id}`}
						onMouseOver={titleHover}
						onMouseLeave={(e) => titleHover(e, false)}
						onTouchStart={titleHover}
						onTouchEnd={(e) => titleHover(e, false)}
					>
						{title}
					</Link>
				</h2>

				<p className="text-muted-foreground md:text-xl lg:text-xl max-w-[900px] mx-auto">
					{text}
				</p>
			</div>
		</div>
	)
}
