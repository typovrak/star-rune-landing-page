import type { IHeader } from "@/utils/types";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import ButtonIconDemo from "@/components/button-icon-demo";
import QuickLinks from "@/components/quick-links";

export default function Header({ }: IHeader) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between px-4">
				<BrandTitle />

				<QuickLinks
					className="hidden lg:flex text-foreground"
					floatClassName="shadow-xl shadow-yellow-500/30"
					linkClassName="px-2 xl:px-3 hover:scale-105 2xl:hover:scale-110"
					hiddenLinksDesktop={[4, 5, 6]}
				/>

				<div className="flex items-center gap-4">
					<SocialIconList
						className="hidden md:flex gap-2 xl:gap-3"
						iconClassName="h-6 w-6"
					/>

					<div className="flex items-center gap-4">
						<div className="hidden xs:block">
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
