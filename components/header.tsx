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
						<Link key={id} href={`#${id}`} prefetch={false} className="group relative duration-300 transition-all will-change-transform">
							<span className="absolute -inset-x-3 -inset-y-1 bg-yellow-500 skew-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-1"></span>
							<span className="relative text-base">
								{title}
							</span>
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
