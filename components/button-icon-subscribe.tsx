import ButtonIcon from "@/components/button-icon";
import MailSpark from "@/icons/mail-spark";
import type { IButtonIconSubscribe } from "@/utils/types";

export default function ButtonIconSubscribe({ title, className, size = "default" }: IButtonIconSubscribe) {
	return (
		<ButtonIcon
			icon={<MailSpark />}
			title={title}
			className={`bg-orange-400 shadow-orange-400/30 hover:shadow-orange-400/30${className ? ` ${className}` : ""}`}
			size={size}
			type="submit"
		/>
	)
}
