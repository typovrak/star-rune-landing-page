import type { IButtonIconDemo } from "@/utils/types";
import ButtonIcon from "@/components/button-icon";
import data from "@/utils/data";
import { Keyboard } from "lucide-react";

export default function ButtonIconDemo({ size = "default" }: IButtonIconDemo) {
	return (
		<ButtonIcon
			url={data.url.demo}
			icon={<Keyboard />}
			title="Play demo"
			className="bg-yellow-400 hover:shadow-yellow-500/30"
			size={size}
		/>
	)
}
