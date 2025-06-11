import type { IScrollIndicator } from "@/utils/types";
import Link from "next/link";
import Mouse from "@/icons/mouse";
import { ChevronsDown } from "lucide-react";

export default function ScrollIndicator({ url, title, className }: IScrollIndicator) {
	return (
		<Link
			href={url}
			className={`group animate-bounce flex flex-col items-center${className ? ` ${className}` : ""}`}
			title={title}
			aria-label={title}
		>
			<Mouse className="h-10 w-10 xs:h-14 xs:w-14 md:h-16 md:w-16 text-background group-hover:text-yellow-500 transition-all duration-300 fill-background/15" />
			<ChevronsDown className="h-6 w-6 xs:h-10 xs:w-10 text-background group-hover:text-yellow-500 transition-all duration-300" />
		</Link>
	)
}
