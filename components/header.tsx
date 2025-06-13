import type { IHeader } from "@/utils/types";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import ButtonIconDemo from "@/components/button-icon-demo";
import QuickLinks from "@/components/quick-links";
import { useState, useEffect, useRef } from "react";

export default function Header({ }: IHeader) {
	const bgDark = "bg-black";
	const bgLight = "bg-white";
	const bgBackdropDark = "supports-[backdrop-filter]:bg-black/80";
	const bgBackdropLight = "supports-[backdrop-filter]:bg-white/80";
	const borderDark = "border-black";
	const borderLight = "border-white";

	const headerRef = useRef(null);

	const [scrolled, setScrolled] = useState(false);

	function handleScroll() {
		if (!headerRef.current) return;

		const header = headerRef.current as HTMLElement;

		if (window.scrollY === 0) {
			header.classList.add("dark");

			header.classList.remove(bgLight);
			header.classList.add(bgDark);

			header.classList.remove(bgBackdropLight);
			header.classList.add(bgBackdropDark);

			header.classList.remove(borderLight);
			header.classList.add(borderDark);
			return;
		}

		header.classList.remove("dark");

		header.classList.add(bgLight);
		header.classList.remove(bgDark);

		header.classList.add(bgBackdropLight);
		header.classList.remove(bgBackdropDark);

		header.classList.add(borderLight);
		header.classList.remove(borderDark);
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	}, []);

	return (
		<header
			ref={headerRef}
			className={`group dark fixed top-0 z-50 h-header w-full border-b ${borderDark} ${bgDark} backdrop-blur ${bgBackdropDark} transition-all duration-300`}
			data-appear={true}
		>
			<div className="container h-full flex items-center justify-between px-4">
				<BrandTitle />

				<QuickLinks
					className="hidden lg:flex"
					linkClassName="link group-[.dark]:text-white text-slate-900 px-2 xl:px-3 hover:scale-105 2xl:hover:scale-110"
					hiddenLinksDesktop={[4, 5, 6]}
				/>

				<div className="flex items-center gap-4">
					<SocialIconList
						className="hidden md:flex gap-2 xl:gap-3"
						iconClassName="h-6 w-6"
					/>

					<div className="flex items-center gap-4">
						<div className="hidden s:block">
							<CountdownTimer />
						</div>

						<div className="hidden sm:block">
							<ButtonIconDemo />
						</div>

						<MobileMenu />
					</div>
				</div>
			</div>
		</header >
	)
}
