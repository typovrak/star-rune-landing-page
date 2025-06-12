import type { IButtonIcon } from "@/utils/types";
import ExternalLink from "@/components/external-link";
import Ping from "@/components/ping";
import Loader from "@/icons/loader";

export default function ButtonIcon({ url, icon, title, className, size = "default", titleClassName, ping, type, loading }: IButtonIcon) {

	const sharedClassName = `relative group text-slate-950 flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-cta will-change-transform duration-300 shadow-lg hover:shadow-xl ${size === "default" ? "h-10 text-sm pl-[3rem] pr-4" : size === "big" ? "h-12 text-base pl-[3.75rem] pr-5" : "h-14 text-lg pl-[5rem] pr-6"}${className ? ` ${className}` : ""}`;

	const childrenContent = (
		<>
			<div className={`absolute left-0 top-0 mt-1 ml-1 bg-background p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 ${size === "default" ? "h-8 w-8" : size === "big" ? "h-10 w-10" : "h-12 w-12"}`}>
				{loading ?
					<>
						<Loader className="animate-spin" />
					</>
					:
					<>
						{icon}
					</>
				}
			</div>

			<div className={titleClassName}>
				{title}
			</div>

			{ping &&
				<Ping
					pingClassName={ping.pingClassName}
					ballClassName={ping.ballClassName}
					size={ping.size}
				/>
			}
		</>
	)

	if (type) {
		return (
			<button
				type={type}
				className={sharedClassName}
			>
				{childrenContent}
			</button>
		)
	}

	return (
		<ExternalLink
			href={url || "#"}
			className={sharedClassName}
		>
			{childrenContent}
		</ExternalLink>
	)
}
