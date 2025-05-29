import type { ISocialIconList } from "@/utils/types";
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Email from "@/icons/email";

export default function SocialIconList({ }: ISocialIconList) {

	const socials = [
		{
			icon: <Discord />,
			url: data.url.discord,
			title: "Discord",
			color: "text-discord-500",
		},
		{
			icon: <YouTube />,
			url: data.url.youtube,
			title: "YouTube",
			color: "text-youtube-500",
		},
		{
			icon: <Kickstarter />,
			url: data.url.kickstarter,
			title: "Kickstarter",
			color: "text-kickstarter-500",
		},
		{
			icon: <X />,
			url: data.url.x,
			title: "X",
			color: "text-x-500",
		},
		{
			icon: <Email />,
			url: `mailto:${data.email}`,
			title: "Email",
			color: "text-yellow-600",
		},
	];

	return (
		<ul className="flex items-center gap-3">
			{socials.map(({ icon, url, title, color }) => (
				<li key={title} className="">
					<ExternalLink href={url} className={`group ${color} h-6 w-6 flex`} title={title}>
						{icon}
					</ExternalLink>
				</li>
			))}
		</ul>
	)
}
