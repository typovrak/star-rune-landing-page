import type { ILegalNotice } from "@/utils/types";
import Page from "@/layouts/page";
import data from "@/utils/data";
import Link from "next/link";
import ExternalLink from "@/components/external-link";

export default function LegalNotice({ }: ILegalNotice) {
	return (
		<Page className="bg-white">
			<>
				<h1>Legal notice</h1>
				<time>Last modification : 2025-06-13</time>

				<h2>General information</h2>
				<ul>
					<li>
						<b>Website name :</b> {data.brand}
					</li>
					<li>
						<b>Website URL :</b> <Link href="/">https://{data.domain}</Link>
					</li>
					<li>
						<b>Owner :</b> {data.owner}
					</li>
					<li>
						<b>Address :</b> XXXXX
					</li>
					<li>
						<b>Email :</b> <ExternalLink href={`mailto:${data.email}`}>{data.email}</ExternalLink>
					</li>
					<li>
						<b>Phone :</b> <ExternalLink href={`tel:XXXXX`}>XXXXX</ExternalLink>
					</li>
					<li>
						<b>Developer :</b> <ExternalLink href={data.developer.url}>{data.developer.name}</ExternalLink>
					</li>
				</ul>

				<h2>Host</h2>
				<ul>
					<li>
						<b>Host name :</b> Vercel Inc.
					</li>
					<li>
						<b>Address :</b> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
					</li>
					<li>
						<b>Website name :</b> Vercel
					</li>
					<li>
						<b>Website URL :</b> <ExternalLink href="https://vercel.com">vercel.com</ExternalLink>
					</li>
				</ul>

				<h2>Intellectual property</h2>
				<p>
					All content on this site, including, but not limited to, graphics, images, text, videos, animations, sounds, logos, gifs and icons as well as their formatting are the exclusive property of {data.brand} with the exception of trademarks, logos or content belonging to other partner companies or authors.
				</p>

				<h2>Protection of personal data</h2>
				<p>
					In accordance with the provisions of law no. 78-17 of 6 January 1978 as amended relating to data processing, files and freedoms, the site is subject to a declaration with the National Commission for Data Processing and Freedoms (<ExternalLink href="https://cnil.fr">cnil.fr</ExternalLink>).
				</p>

				<h2>Cookies</h2>
				<p>
					The <Link href="/">{data.domain}</Link> website may ask you to accept cookies for statistical and display purposes. A cookie is information stored on your hard disk by the server of the site you are visiting. It contains several data that are stored on your computer in a simple text file accessed by a server to read and record information.
				</p>

				<h2>Hypertext links</h2>
				<p>
					The <Link href="/">{data.domain}</Link> website may contain hypertext links to other sites on the Internet. Links to these other resources take you away from the <Link href="/">{data.domain}</Link> website. It is possible to create a link to the presentation page of this site without the express permission of {data.owner}. No authorization or request for prior information may be required by the webmaster in respect of a site that wishes to establish a link to the webmaster’s site. However, it is appropriate to display this site in a new browser window.
				</p>

				<h2>Limitations of liability</h2>
				<p>
					The information contained on this site is as accurate as possible and the site is periodically updated, but may nevertheless contain inaccuracies, omissions or shortcomings. If you notice a gap, error or what appears to be a malfunction, please kindly report it by email to <ExternalLink href={`mailto:${data.email}`}>{data.email}</ExternalLink> describing the problem as precisely as possible (page causing problem, triggering action, type of computer and browser used, etc).
				</p>
				<p>
					All downloaded content is done at the user’s own risk and under his sole responsibility. Accordingly, {data.owner} cannot be held liable for any damage to the user’s computer or any loss of data resulting from downloading.
				</p>
				<p>
					The photos are non-contractual.
				</p>

				<h2>Applicable law and relevant laws</h2>
				<p>
					Subject to French law, the <Link href="/">{data.domain}</Link> website is governed by Law No. 2004-575 of 21 June 2004 on confidence in the digital economy, Article L.335-2 of the Intellectual Property Code and the Data Protection and Freedoms Act of 6 January 1978 as amended.
				</p>
			</>
		</Page>
	)
}
