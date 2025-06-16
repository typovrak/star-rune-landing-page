"use client";

import type { ICredits } from "@/utils/types";
import Page from "@/layouts/page";
import ExternalLink from "@/components/external-link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ResourcePage from "@/layouts/resource-page";

export default function Credits({ }: ICredits) {
	return (
		<Page className="bg-white">
			<>
				<Header />

				<ResourcePage>
					<h1 className="mt-[var(--header-height)]">Credits</h1>
					<time>Last modification : 2025-06-13</time>

					<h2>Want to see the code source ?</h2>
					<ul>
						<li>
							Made with 💜 by <ExternalLink href="https://github.com/typovrak">typovrak</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://github.com/typovrak/star-rune-landing-page">github.com/typovrak/star-rune-landing-page</ExternalLink>
						</li>
					</ul>

					<h2>Technologies</h2>
					<ul>
						<li>
							<ExternalLink href="https://nextjs.org">nextjs.org</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://www.typescriptlang.org">typescriptlang.org</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://tailwindcss.com">tailwindcss.com</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://radix-ui.com">radix-ui.com</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://lenis.darkroom.engineering/">lenis</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://fkhadra.github.io/react-toastify/introduction/">react-toastify</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://moment.github.io/luxon">luxon</ExternalLink>
						</li>
					</ul>

					<h2>Icons</h2>
					<ul>
						<li>
							<ExternalLink href="https://tabler.io/icons">tabler.io</ExternalLink>
						</li>
						<li>
							<ExternalLink href="https://lucide.dev/icons">lucide.dev</ExternalLink>
						</li>
					</ul>

					<h2>Design</h2>
					<ul>
						<li>
							<ExternalLink href="https://v0.dev">v0.dev</ExternalLink>
							<ExternalLink href="https://dribbble.com/shots/22064357-Testimonials-Animation">dribbble.com</ExternalLink>
							<ExternalLink href="https://dribbble.com/shots/18537944-ClickMagick-Letter-About-us-page">dribbble.com</ExternalLink>
						</li>
					</ul>

					<h2>Servers</h2>
					<ul>
						<li>
							<ExternalLink href="https://vercel.com">vercel.com</ExternalLink>
							<ExternalLink href="https://uptimerobot.com">uptimerobot.com</ExternalLink>
						</li>
					</ul>
				</ResourcePage>

				<Footer />
			</>
		</Page>
	)
}
