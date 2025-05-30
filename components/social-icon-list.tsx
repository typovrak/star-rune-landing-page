import type { ISocialIconList } from "@/utils/types";
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Discord from "@/icons/discord";
import DiscordFill from "@/icons/discord-fill";
import YouTube from "@/icons/you-tube";
import YouTubeFill from "@/icons/you-tube-fill";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Email from "@/icons/email";
import EmailFill from "@/icons/email-fill";
import IconInvert from "@/components/icon-invert";

export default function SocialIconList({ className, iconClassName }: ISocialIconList) {

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
			iconHover: <Kickstarter className="fill-kickstarter-500" />,
			url: data.url.kickstarter,
			title: "Kickstarter",
			color: "text-kickstarter-500",
		},
		{
			icon: <X />,
			iconHover: <X className="fill-x-500" />,
			url: data.url.x,
			title: "X",
			color: "text-x-500",
		},
		{
			icon: <Email />,
			iconHover: <EmailFill />,
			url: `mailto:${data.email}`,
			title: "Email",
			color: "text-yellow-500",
		},
	];

	return (
		<ul className={`flex items-center${className ? ` ${className}` : ""}`}>
			{socials.map(({ icon, iconHover, url, title, color }) => (
				<li key={title}>
					<ExternalLink href={url} className={`group relative ${color} flex${iconClassName ? ` ${iconClassName}` : ""}`} title={title}>
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

