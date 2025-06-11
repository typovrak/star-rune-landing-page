import ButtonIcon from "@/components/button-icon";
import MailSpark from "@/icons/mail-spark";
import type { IButtonIconSubscribe } from "@/utils/types";
import data from "@/utils/data";

export default function ButtonIconSubscribe({ title, className, size = "default" }: IButtonIconSubscribe) {
	return (
		<ButtonIcon
			url={`#`}
			icon={<MailSpark />}
			title={title}
			className={`bg-orange-400 shadow-orange-400/30 hover:shadow-orange-400/30${className ? ` ${className}` : ""}`}
			size={size}
		/>
	)
}
