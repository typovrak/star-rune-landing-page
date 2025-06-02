import type { IButtonIconDiscord } from "@/utils/types";
import Discord from "@/icons/discord";
import data from "@/utils/data";
import ButtonIcon from "@/components/button-icon";

export default function ButtonIconDiscord({ size = "default" }: IButtonIconDiscord) {
	return (
		<ButtonIcon
			url={data.url.discord}
			icon={<Discord />}
			title="Join Discord"
			className="bg-discord-500 shadow-discord-500/30 hover:shadow-discord-500/30"
			size={size}
		/>
	)
}
