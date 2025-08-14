import type { ICardClient, TItemClientSource } from "@/utils/types";
import Message from "@/icons/message";
import MessageFill from "@/icons/message-fill";
import IconInvert from "@/components/icon-invert";
import Discord from "@/icons/discord";
import DiscordFill from "@/icons/discord-fill";
import Kickstarter from "@/icons/kickstarter";
import YouTube from "@/icons/you-tube";
import YouTubeFill from "@/icons/you-tube-fill";
import X from "@/icons/x";
import Reddit from "@/icons/reddit";
import ExternalLink from "@/components/external-link";
import Image from "@/components/image";

export default function CardClient({ src, names, about, text, source, className }: ICardClient) {

	const types = {
		"irl": {
			icon: <Message />,
			iconHover: <MessageFill />,
			border: "border-pink-500/50 hover:border-pink-500",
			shadow: "hover:shadow-pink-500",
			text: "text-pink-500",
		},
		"discord": {
			icon: <Discord />,
			iconHover: <DiscordFill />,
			border: "border-discord-500/50 hover:border-discord-500",
			shadow: "hover:shadow-discord-500",
			text: "text-discord-500",
		},
		"kickstarter": {
			icon: <Kickstarter />,
			iconHover: <Kickstarter className="fill-kickstarter-500" />,
			border: "border-kickstarter-500/50 hover:border-kickstarter-500",
			shadow: "hover:shadow-kickstarter-500",
			text: "text-kickstarter-500",
		},
		"youtube": {
			icon: <YouTube />,
			iconHover: <YouTubeFill />,
			border: "border-youtube-500/50 hover:border-youtube-500",
			shadow: "hover:shadow-youtube-500",
			text: "text-youtube-500",
		},
		"x": {
			icon: <X />,
			iconHover: <X className="fill-x-500" />,
			border: "border-x-500/50 hover:border-x-500",
			shadow: "hover:shadow-x-500",
			text: "text-x-500",
		},
		"reddit": {
			icon: <Reddit />,
			iconHover: <Reddit />,
			border: "border-reddit-500/50 hover:border-reddit-500",
			shadow: "hover:shadow-reddit-500",
			text: "text-reddit-500",
		}
	};

	const Wrapper = source.url
		? ({ children, className }: { children: React.ReactNode; className: string }) => (
			<ExternalLink
				href={source.url!}
				className={className}
			>
				{children}
			</ExternalLink>
		)
		: ({ children, className }: { children: React.ReactNode; className: string }) => (
			<article className={className}>
				{children}
			</article>
		);

	function handleDefaultTitle(source: TItemClientSource) {
		if (source.title) {
			return source.title
		}

		switch (source.type) {
			case "irl":
				return "Local event";

			case "discord":
				return "Discord server";

			case "youtube":
				return "YouTube comment";

			case "kickstarter":
				return "Kickstarter contributor";

			case "x":
				return "Tweet";

			case "reddit":
				return "Reddit";
		}
	}

	return (
		<Wrapper
			className={`border-2 bg-white hover:rotate-cta rounded-lg p-6 transition-all duration-300 hover:shadow-sm flex flex-col w-card-client-mobile md:w-card-client gap-6 group group/hover justify-between ${types[source.type].border} ${types[source.type].shadow}${className ? ` ${className}` : ""}`}
		>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4 items-center">
					<div className={`relative h-10 w-10 transition-all duration-300 group-hover:scale-125 ${types[source.type].text}`}>
						<IconInvert
							icon={types[source.type].icon}
							iconHover={types[source.type].iconHover}
						/>
					</div>

					<p className={`${types[source.type].text} font-semibold group-hover:translate-x-2 transition-all duration-300`}>{handleDefaultTitle(source)}</p>
				</div>

				<p className="text-slate-900 text-balance">{text}</p>
			</div>

			<div className="flex items-center gap-4">
				<Image
					src={`/${src}`}
					alt={`Profile picture of ${names}`}
					className="h-12 w-12 rounded-full"
					height={48}
					width={48}
				/>

				<div>
					<p className={`font-bold font-primary text-lg ${types[source.type].text}`}>{names}</p>

					<p className="text-slate-500 group-hover:text-slate-600 transition-all duration-300">{about}</p>
				</div>
			</div>
		</Wrapper>
	)
}
