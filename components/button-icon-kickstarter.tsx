import type { IButtonIconKickstarter } from "@/utils/types";
import ButtonIcon from "@/components/button-icon";
import Kickstarter from "@/icons/kickstarter";
import data from "@/utils/data";

export default function ButtonIconKickstarter({ size = "default" }: IButtonIconKickstarter) {
	return (
		<ButtonIcon
			url={data.url.kickstarter}
			icon={<Kickstarter />}
			title="Support on Kickstarter"
			className="bg-kickstarter-500 shadow-kickstarter-500/30 hover:shadow-kickstarter-500/30"
			size={size}
		/>
	)
}
