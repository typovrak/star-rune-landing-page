import type { IQuickLinks } from "@/utils/types";
import { useRef } from "react";
import Link from "next/link";
import data from "@/utils/data";

export default function QuickLinks({ className, linkClassName, displayColumn, hiddenLinksDesktop }: IQuickLinks) {

	const navRef = useRef<HTMLDivElement>(null);

	function handleNavHover(_: any, mouseIn: boolean, index: number) {
		if (!navRef.current) return;

		const float = navRef.current.children[0] as HTMLSpanElement;

		if (mouseIn) {
			const link = navRef.current.children[index + 1] as HTMLAnchorElement;

			if (displayColumn) {
				float.style.height = `${link.offsetHeight}px`;
			} else {
				float.style.width = `${link.offsetWidth}px`;
			}

			if (displayColumn) {
				float.style.top = `${link.offsetTop}px`;
			} else {
				float.style.left = `${link.offsetLeft}px`;
			}

			float.classList.add("opacity-100");
			return;
		}

		float.classList.remove("opacity-100");
	}

	return (
		<nav ref={navRef} className={`relative${className ? ` ${className}` : ""}`}>
			<span className={`absolute ${displayColumn ? "-inset-x-1" : "-inset-y-1"} bg-yellow-500 skew-x-12 opacity-0 transition-all duration-300 -z-1 pointer-events-none shadow-xl shadow-yellow-500/30`}></span>

			{data.homeLinks.map(({ id, title }, index) => (
				<Link
					key={id}
					href={`#${id}`}
					prefetch={false}
					className={`relative duration-300 transition-all hover:rotate-cta ${hiddenLinksDesktop?.includes(index) ? " hidden 2xl:inline" : ""}${linkClassName ? ` ${linkClassName}` : ""}`}
					// @ts-ignore
					onMouseEnter={(e) => handleNavHover(e, true, index)}
					onMouseOut={(e) => handleNavHover(e, false, index)}
					onTouchStart={(e) => handleNavHover(e, true, index)}
					onTouchEnd={(e) => handleNavHover(e, false, index)}
				>
					{title}
				</Link>
			))}
		</nav>
	)
}
