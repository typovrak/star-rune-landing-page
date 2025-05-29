import type { ISocialIconList } from "@/utils/types";
import data from "@/utils/data";
import ExternalLink from "@/components/external-link";
import Discord from "@/icons/discord";
import YouTube from "@/icons/you-tube";
import Kickstarter from "@/icons/kickstarter";
import X from "@/icons/x";
import Gmail from "@/icons/gmail";

export default function SocialIconList({ }: ISocialIconList) {

	const iconClassName = "h-6 w-6 fill-red stroke-red";

	const socials = [
		{
			icon: <Discord className={iconClassName} />,
			url: data.url.discord,
			title: "Discord",
			color: "",
		},
		{
			icon: <YouTube className={iconClassName} />,
			url: data.url.youtube,
			title: "YouTube",
			color: "",
		},
		{
			icon: <Kickstarter className={iconClassName} />,
			url: data.url.kickstarter,
			title: "Kickstarter",
			color: "",
		},
		{
			icon: <X className={iconClassName} />,
			url: data.url.x,
			title: "X",
			color: "",
		},
		{
			icon: <Gmail className={iconClassName} />,
			url: `mailto:${data.email}`,
			title: "Email",
			color: "",
		},
	];

	return (
		<ul className="flex items-center gap-3">
			{socials.map(({ icon, url, title }) => (
				<li key={title} className="">
					<ExternalLink href={url} className="group text-muted-foreground" ariaLabel={title}>
						{icon}
					</ExternalLink>
				</li>
			))}
		</ul>
	)
}
