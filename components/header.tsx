import type { IHeader } from "@/utils/types";
import Link from "next/link";
import data from "@/utils/data";
import { Keyboard } from "lucide-react";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import ButtonIcon from "@/components/button-icon";

export default function Header({ }: IHeader) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<BrandTitle />

				<nav className="hidden md:flex gap-6">
					{data.homeLinks.map(({ id, title }) => (
						<Link key={id} href={`#${id}`} prefetch={false} className="group relative text-base hover:text-yellow-700 duration-300 transition-all hover:rotate-text will-change-transform">
							{title}
							<span className="absolute bottom-0 h-[1px] w-0 group-hover:w-full transition-all duration-300 left-0 bg-foreground group-hover:bg-yellow-700"></span>
						</Link>
					))}
				</nav>


				<div className="flex items-center gap-4">
					<SocialIconList />

					<div className="flex items-center gap-4">
						<div className="hidden sm:block">
							<CountdownTimer />
						</div>

						<ButtonIcon
							url={data.url.demo}
							icon={<Keyboard />}
							title="Play demo"
						/>

						<MobileMenu />
					</div>
				</div>
			</div>
		</header >
	)
}
