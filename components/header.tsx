import type { IHeader } from "@/utils/types";
import Link from "next/link";
import ExternalLink from "@/components/external-link";
import data from "@/utils/data";
import { Keyboard } from "lucide-react";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";

export default function Header({ }: IHeader) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<BrandTitle />

				<nav className="hidden md:flex gap-6">
					{data.homeLinks.map(({ id, title }) => (
						<Link key={id} href={`#${id}`} prefetch={false} className="group relative text-base hover:text-yellow-700 duration-300 hover:scale-105 transition-all">
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
						<Button
							asChild
							variant="default"
							className="bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30"
						>
							<ExternalLink href={data.url.demo}>
								<Keyboard className="mr-2 h-4 w-4" />
								Play Demo
							</ExternalLink>
						</Button>
						<MobileMenu />
					</div>
				</div>
			</div>
		</header >
	)
}
