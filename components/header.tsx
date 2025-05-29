import type { IHeader } from "@/utils/types";
import Link from "next/link";
import ExternalLink from "@/components/external-link";
import data from "@/utils/data";
import { Keyboard } from "lucide-react";
import Discord from "@/icons/discord";
import Gmail from "@/icons/gmail";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import CountdownTimer from "@/components/countdown-timer";
import MobileMenu from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import BrandTitle from "@/components/brand-title";

export default function Header({ }: IHeader) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between">
				<BrandTitle />

				<nav className="hidden md:flex gap-6">
					<Link href="#about" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						About
					</Link>
					<Link href="#features" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						Features
					</Link>
					<Link href="#gameplay" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						Gameplay
					</Link>
					<Link href="#gallery" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						Gallery
					</Link>
					<Link href="#team" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						Team
					</Link>
					<Link href="#faq" className="text-sm font-medium hover:text-yellow-500 transition-colors">
						FAQ
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-4">
						<div className="hidden md:flex items-center gap-3 mr-2">
							<ExternalLink
								href={data.url.discord}
								className="text-muted-foreground hover:text-indigo-500 transition-colors duration-200 group"
								ariaLabel="Discord"
							>
								<div className="relative">
									<Discord className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									<div className="absolute inset-0 bg-indigo-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
								</div>
							</ExternalLink>
							<ExternalLink
								href={data.url.youtube}
								className="text-muted-foreground hover:text-red-500 transition-colors duration-200 group"
								ariaLabel="YouTube"
							>
								<div className="relative">
									<YouTube className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									<div className="absolute inset-0 bg-red-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
								</div>
							</ExternalLink>
							<ExternalLink
								href={data.url.kickstarter}
								className="text-muted-foreground hover:text-green-500 transition-colors duration-200 group"
								ariaLabel="Kickstarter"
							>
								<div className="relative">
									<Kickstarter className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									<div className="absolute inset-0 bg-green-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
								</div>
							</ExternalLink>
							<ExternalLink
								href={data.url.x}
								className="text-muted-foreground hover:text-green-500 transition-colors duration-200 group"
								ariaLabel="X"
							>
								<div className="relative">
									<X className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									<div className="absolute inset-0 bg-green-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
								</div>
							</ExternalLink>
							<ExternalLink
								href={`mailto:${data.email}`}
								className="text-muted-foreground hover:text-green-500 transition-colors duration-200 group"
								ariaLabel="Email"
							>
								<div className="relative">
									<Gmail className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
									<div className="absolute inset-0 bg-green-500/20 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
								</div>
							</ExternalLink>
						</div>
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
		</header>
	)
}
