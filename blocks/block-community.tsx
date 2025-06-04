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
			buttonTitle: "Join server",
		},
		{
			icon: <YouTube />,
			iconHover: <YouTubeFill />,
			title: "YouTube",
			text: "Discover our tutorials, gameplay and updates on our YouTube channel.",
			url: data.url.youtube,
			buttonTitle: "Watch channel",
		},
		{
			icon: <Kickstarter />,
			iconHover: <Kickstarter className="fill-kickstarter-500" />,
			title: "Kickstarter",
			text: "Support our project on Kickstarter and help us reach our goals.",
			url: data.url.kickstarter,
			buttonTitle: "Support project",
		},
		{
			icon: <X />,
			iconHover: <X className="fill-x-500" />,
			title: "Known as Twitter",
			text: "Follow the progress of the project on a daily basis.",
			url: data.url.x,
			buttonTitle: "Explore my thoughts",
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
			className="bg-gradient-to-b from-background to-muted"
		>
			<>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8 transition-all duration-1000 opacity-100 translate-y-0">
					{items.map(({ icon, iconHover, title, text, url, buttonTitle }) => (
						<CardSocial
							icon={icon}
							iconHover={iconHover}
							title={title}
							text={text}
							url={url}
							buttonTitle={buttonTitle}
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
