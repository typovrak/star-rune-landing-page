import type { IBlockCommunity } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Star } from "lucide-react";
import Newsletter from "@/components/newsletter";
import CardSocial from "@/components/card-social";
import data from "@/utils/data";
import Discord from "@/icons/discord";
import DiscordFill from "@/icons/discord-fill";
import Kickstarter from "@/icons/kickstarter";
import YouTube from "@/icons/you-tube";
import YouTubeFill from "@/icons/you-tube-fill";
import X from "@/icons/x";

export default function BlockCommunity({ id }: IBlockCommunity) {

	const items = [
		{
			icon: <Discord />,
			iconHover: <DiscordFill />,
			title: "Discord",
			text: "Join our Discord server to chat with the community and development team.",
			url: data.url.discord,
			buttonTitle: "Join our server",
			color: "text-discord-500",
			className: "shadow-discord-500/20 hover:shadow-discord-500/20 border-discord-500/50 hover:border-discord-500",
			buttonClassName: "border-discord-500/50 hover:bg-discord-500/5 hover:border-discord-500 hover:shadow-discord-500",
		},
		{
			icon: <YouTube />,
			iconHover: <YouTubeFill />,
			title: "YouTube",
			text: "Discover our tutorials, gameplay and updates on our YouTube channel.",
			url: data.url.youtube,
			buttonTitle: "Watch the channel",
			color: "text-youtube-500",
			className: "shadow-youtube-500/20 hover:shadow-youtube-500/20 border-youtube-500/50 hover:border-youtube-500",
			buttonClassName: "border-youtube-500/50 hover:bg-youtube-500/5 hover:border-youtube-500 hover:shadow-youtube-500",
		},
		{
			icon: <Kickstarter />,
			iconHover: <Kickstarter className="fill-kickstarter-500" />,
			title: "Kickstarter",
			text: "Support our project on Kickstarter and help us reach our goals.",
			url: data.url.kickstarter,
			buttonTitle: "Support the project",
			color: "text-kickstarter-500",
			className: "shadow-kickstarter-500/20 hover:shadow-kickstarter-500/20 border-kickstarter-500/50 hover:border-kickstarter-500",
			buttonClassName: "border-kickstarter-500/50 hover:bg-kickstarter-500/5 hover:border-kickstarter-500 hover:shadow-kickstarter-500",
		},
		{
			icon: <X />,
			iconHover: <X className="fill-x-500" />,
			title: "Known as Twitter",
			text: "Follow the progress of the project on a daily basis.",
			url: data.url.x,
			buttonTitle: "Explore my thoughts",
			color: "text-x-500",
			className: "shadow-x-500/20 hover:shadow-x-500/20 border-x-500/50 hover:border-x-500",
			buttonClassName: "border-x-500/50 hover:bg-x-500/5 hover:border-x-500 hover:shadow-x-500",
		},
	];

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Star />,
				title: "Join us"
			}}
			title="Join our community"
			text="Follow us on social media to stay informed about the latest news and updates"
			className="bg-gradient-to-b from-white to-slate-50"
		>
			<>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
					{items.map(({ icon, iconHover, title, text, url, buttonTitle, color, className, buttonClassName }) => (
						<CardSocial
							key={title}
							icon={icon}
							iconHover={iconHover}
							title={title}
							text={text}
							url={url}
							buttonTitle={buttonTitle}
							color={color}
							className={className}
							buttonClassName={buttonClassName}
						/>
					))}
				</div>

				<div className="mx-auto max-w-md">
					<Newsletter
						title="Subscribe to our Newsletter"
						buttonTitle="Join now"
						size="big"
					/>
				</div>
			</>
		</SectionWrapper>
	)
}
