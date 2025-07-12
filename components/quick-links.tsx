import type { IQuickLinks } from "@/utils/types";
import { useRef } from "react";
import Link from "next/link";
import data from "@/utils/data";

export default function QuickLinks({ className, floatClassName, linkClassName, aspectColumn, hiddenLinksDesktop, handleCloseMobileMenu, resourceLinks }: IQuickLinks) {

	const navRef = useRef<HTMLDivElement>(null);

	function handleNavHover(_: any, mouseIn: boolean, index: number) {
		if (!navRef.current) return;

		const float = navRef.current.children[0] as HTMLSpanElement;

		if (mouseIn) {
			const link = navRef.current.children[index + 1] as HTMLAnchorElement;

			if (aspectColumn) {
				float.style.height = `${link.offsetHeight}px`;
			} else {
				float.style.width = `${link.offsetWidth}px`;
			}

			if (aspectColumn) {
				float.style.transform = `translate3d(0, ${link.offsetTop}px, 0) skew(12deg, 0)`;
			} else {
				float.style.transform = `translate3d(${link.offsetLeft}px, 0, 0) skew(12deg, 0)`;
			}

			float.classList.add("opacity-100");
			return;
		}

		float.classList.remove("opacity-100");
	}

	return (
		<nav ref={navRef} className={`relative${className ? ` ${className}` : ""}`}>
			<span className={`absolute ${aspectColumn ? "-inset-x-1" : "-inset-y-1"} shadow-yellow-400/30 shadow-xl bg-yellow-400 opacity-0 transition-all duration-300 -z-1 pointer-events-none${floatClassName ? ` ${floatClassName}` : ""}`}></span>

			{(
				resourceLinks ? data.resourceLinks : data.homeLinks
			).map((link, index) => (
				<Link
					key={link.id}
					href={"url" in link ? link.url : `/#${link.id}`}
					prefetch={false}
					className={`relative duration-300 transition-all hover:rotate-cta ${hiddenLinksDesktop?.includes(index) ? " hidden 2xl:inline" : ""}${linkClassName ? ` ${linkClassName}` : ""}`}
					// @ts-ignore
					onMouseEnter={(e: any) => handleNavHover(e, true, index)}
					onMouseOut={(e: any) => handleNavHover(e, false, index)}
					onTouchStart={(e: any) => handleNavHover(e, true, index)}
					onTouchEnd={(e: any) => handleNavHover(e, false, index)}
					onClick={handleCloseMobileMenu}
				>
					{link.title}
				</Link>
			))}
		</nav>
	)
}
