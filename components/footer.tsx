import type { IFooter } from "@/utils/types";
import Link from "next/link";
import data from "@/utils/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import QuickLinks from "@/components/quick-links";

export default function Footer({ }: IFooter) {
	return (
		<footer className="w-full border-t py-8 md:py-12 bg-background">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-6">
						<div className="flex">
							<BrandTitle />
						</div>

						<p className="text-sm text-slate-500">
							The Ultimate Typing Game and the funnest experience typing you've ever had!
						</p>

						<SocialIconList
							className="gap-3"
							iconClassName="h-6 w-6"
						/>
					</div>

					<div>
						<h3 className="font-medium text-center mb-2 uppercase">Quick links</h3>

						<QuickLinks
							className="flex flex-col text-sm mx-auto max-w-[120px]"
							linkClassName="text-slate-500 py-1.5 text-center hover:scale-[120%] hover:text-slate-900"
							aspectColumn={true}
						/>
					</div>

					<div>
						<h3 className="font-medium text-center mb-2 uppercase">Resources</h3>

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
						<h3 className="font-medium text-center mb-4 uppercase">Newsletter</h3>
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
