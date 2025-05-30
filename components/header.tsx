import type { IHeader } from "@/utils/types";
import Link from "next/link";
import data from "@/utils/data";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import { useRef } from "react";
import ButtonIconDemo from "@/components/button-icon-demo";

export default function Header({ }: IHeader) {

	const navRef = useRef<HTMLDivElement>(null);

	let hiddenLinksLg = [4, 5, 6];

	function handleNavHover(_: any, mouseIn: boolean, index: number) {
		if (!navRef.current) return;

		const float = navRef.current.children[0] as HTMLSpanElement;

		if (mouseIn) {
			const link = navRef.current.children[index + 1] as HTMLAnchorElement;

			float.style.width = `${link.offsetWidth}px`;
			float.style.left = `${link.offsetLeft}px`;

			float.classList.add("opacity-100");
			return;
		}

		float.classList.remove("opacity-100");
	}

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4">
				<BrandTitle />

				<nav ref={navRef} className="relative hidden lg:flex">
					<span className="absolute -inset-y-1 bg-yellow-500 skew-x-12 opacity-0 transition-all duration-300 -z-1 pointer-events-none shadow-xl shadow-yellow-500/30"></span>

					{data.homeLinks.map(({ id, title }, index) => (
						<Link
							key={id}
							href={`#${id}`}
							prefetch={false}
							className={`group relative duration-300 px-2 2xl:px-3 transition-all text-base hover:rotate-cta hover:scale-105 2xl:hover:scale-110${hiddenLinksLg.includes(index) ? " lg:hidden xl:inline" : ""}`}
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

				<div className="flex items-center gap-4">
					<SocialIconList />

					<div className="flex items-center gap-4">
						<div className="hidden sm:block">
							<CountdownTimer />
						</div>

						<ButtonIconDemo />

						<MobileMenu />
					</div>
				</div>
			</div>
		</header >
	)
}
