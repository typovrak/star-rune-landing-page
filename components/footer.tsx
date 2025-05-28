import type { IFooter } from "@/utils/types";
import Link from "next/link";
import { Star } from "lucide-react";
import ExternalLink from "@/components/external-link";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Discord from "@/icons/discord";
import data from "@/utils/data";
import Gmail from "@/icons/gmail";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer({ }: IFooter) {
	return (
		<footer className="w-full border-t py-8 md:py-12 bg-background">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-2">
							<Star className="h-6 w-6 text-yellow-400" />
							<span className="font-bold text-lg">{data.brand}</span>
						</Link>
						<p className="text-sm text-muted-foreground">
							The Ultimate Typing Game and the funnest experience typing you've ever had!
						</p>
						<div className="flex space-x-4">
							<ExternalLink
								href={data.url.discord}
								className="text-muted-foreground hover:text-yellow-500 transition-colors"
							>
								<Discord className="h-5 w-5" />
							</ExternalLink>
							<ExternalLink
								href={data.url.youtube}
								className="text-muted-foreground hover:text-yellow-500 transition-colors"
							>
								<YouTube className="h-5 w-5" />
							</ExternalLink>
							<ExternalLink
								href={data.url.kickstarter}
								className="text-muted-foreground hover:text-yellow-500 transition-colors"
							>
								<Kickstarter className="h-5 w-5" />
							</ExternalLink>
							<ExternalLink
								href={data.url.x}
								className="text-muted-foreground hover:text-yellow-500 transition-colors"
							>
								<X className="h-5 w-5" />
							</ExternalLink>
							<ExternalLink
								href={`mailto:${data.email}`}
								className="text-muted-foreground hover:text-yellow-500 transition-colors"
							>
								<Gmail className="h-5 w-5" />
							</ExternalLink>
						</div>
					</div>
					<div>
						<h3 className="font-medium text-sm mb-4">Quick Links</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#about" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link href="#features" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Features
								</Link>
							</li>
							<li>
								<Link href="#gameplay" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Gameplay
								</Link>
							</li>
							<li>
								<Link href="#gallery" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Gallery
								</Link>
							</li>
							<li>
								<Link href="#team" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Team
								</Link>
							</li>
							<li>
								<Link href="#faq" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									FAQ
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-medium text-sm mb-4">Resources</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Press Kit
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-medium text-sm mb-4">Newsletter</h3>
						<p className="text-sm text-muted-foreground mb-4">Subscribe to receive updates about {data.brand}</p>
						<form className="space-y-2">
							<Input
								type="email"
								placeholder="Your email address"
								className="bg-muted/50 border-yellow-500/20 focus:border-yellow-500/50"
							/>
							<Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
								Subscribe
							</Button>
						</form>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
					<p>© 2025 {data.brand}. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}
