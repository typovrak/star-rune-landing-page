import type { ISocialIconList } from "@/utils/types";
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Email from "@/icons/email";
import DiscordFill from "@/icons/discord-fill";
import IconInvert from "@/components/icon-invert";

export default function SocialIconList({ }: ISocialIconList) {

	const socials = [
		{
			icon: <Discord />,
			iconHover: <DiscordFill />,
			url: data.url.discord,
			title: "Discord",
			color: "text-discord-500",
		},
		{
			icon: <YouTube />,
			iconHover: <YouTubeFill />,
			url: data.url.youtube,
			title: "YouTube",
			color: "text-youtube-500",
		},
		{
			icon: <Kickstarter />,
			iconHover: <KickstarterFill />,
			url: data.url.kickstarter,
			title: "Kickstarter",
			color: "text-kickstarter-500",
		},
		{
			icon: <X />,
			iconHover: <XFill />,
			url: data.url.x,
			title: "X",
			color: "text-x-500",
		},
		{
			icon: <Email />,
			iconHover: <EmailFill />,
			url: `mailto:${data.email}`,
			title: "Email",
			color: "text-yellow-600",
		},
	];

	return (
		<ul className="flex items-center gap-3">
			{socials.map(({ icon, iconHover, url, title, color }) => (
				<li key={title} className="">
					<ExternalLink href={url} className={`group relative ${color} h-6 w-6 flex`} title={title}>
						<IconInvert
							icon={icon}
							iconHover={iconHover}
						/>
					</ExternalLink>
				</li>
			))}
		</ul>
	)
}

