import ButtonIcon from "@/components/button-icon";
import MailSpark from "@/icons/mail-spark";
import type { IButtonIconSubscribe } from "@/utils/types";
import data from "@/utils/data";

export default function ButtonIconSubscribe({ title, size = "default" }: IButtonIconSubscribe) {
	return (
		<ButtonIcon
			url={`#`}
			icon={<MailSpark />}
			title={title}
			className="bg-yellow-400 shadow-yellow-400/30 hover:shadow-yellow-400/30"
			size={size}
		/>
	)
}
