import type { IFooter } from "@/utils/types";
import data from "@/utils/data";
import BrandTitle from "@/components/brand-title";
import SocialIconList from "@/components/social-icon-list";
import QuickLinks from "@/components/quick-links";
import Hr from "@/components/hr";
import Newsletter from "@/components/newsletter";
import CountdownTimer from "@/components/countdown-timer";
import ExternalLink from "@/components/external-link";

export default function Footer({ }: IFooter) {

	return (
		<footer className="w-full bg-white py-8 md:py-12">
			<div className="container px-4">
				<div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-4 gap-8">
					<div className="space-y-6 s:order-1">
						<div className="flex">
							<BrandTitle />
						</div>

						<p className="text-sm text-slate-500">
							The Ultimate Typing Game and the funnest experience typing you've ever had!
						</p>

						<div>
							<CountdownTimer />
						</div>

						<SocialIconList
							className="gap-3"
							iconClassName="h-6 w-6"
						/>
					</div>

					<div className="s:order-3 md:order-2">
						<h3 className="font-medium text-center text-slate-900 mb-2 uppercase">Quick links</h3>

						<QuickLinks
							className="flex flex-col text-sm mx-auto max-w-[150px]"
							linkClassName="text-slate-500 py-1.5 text-center hover:scale-[120%] hover:text-slate-900"
							aspectColumn={true}
						/>
					</div>

					<div className="s:order-4 md:order-3">
						<h3 className="font-medium text-center text-slate-900 mb-2 uppercase">Resources</h3>

						<QuickLinks
							className="flex flex-col text-sm mx-auto max-w-[150px]"
							linkClassName="text-slate-500 py-1.5 text-center hover:scale-[120%] hover:text-slate-900"
							aspectColumn={true}
							resourceLinks={data.resourceLinks}
						/>
					</div>

					<div className="s:order-2 md:order-4">
						<Newsletter
							title="Newsletter"
							buttonTitle="Subscribe"
						/>
					</div>
				</div>


				<div className="relative mt-8 pt-8 text-center text-base text-slate-500">
					<Hr />

					<p>
						Made with 💜 by <ExternalLink
							href={data.developer.url}
							className="text-purple-500 capitalize"
						>
							{data.developer.name}
						</ExternalLink>
					</p>
				</div>
			</div>
		</footer>
	)
}
