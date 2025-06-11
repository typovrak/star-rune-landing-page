import type { IHeader } from "@/utils/types";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import ButtonIconDemo from "@/components/button-icon-demo";
import QuickLinks from "@/components/quick-links";

export default function Header({ }: IHeader) {
	return (
		<header className="fixed top-0 z-50 h-header w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80">
			<div className="container h-full flex items-center justify-between px-4">
				<BrandTitle />

				<QuickLinks
					className="hidden lg:flex"
					linkClassName="text-slate-900 px-2 xl:px-3 hover:scale-105 2xl:hover:scale-110"
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
