import { cloneElement, isValidElement } from "react";
import { Badge as BadgeUI } from "@/components/ui/badge";
import clsx from "clsx";
import type { IBadge } from "@/utils/types";

export default function Badge({ icon, title }: IBadge) {

	let iconCloned = icon;
	if (isValidElement(icon)) {
		iconCloned = cloneElement(icon, {
			className: clsx("mr-1 h-4 w-4", 'className' in icon.props ? ` ${icon.props.className}` : ''),
		});
	}

	return (
		<BadgeUI
			variant="outline"
			className={`border-yellow-500/50 bg-background text-yellow-500 px-4 py-1.5 group-hover/hover:bg-yellow-500 transition-all duration-300 group-hover/hover:text-background group-hover/hover:rotate-cta group-hover/hover:bg-yellow-500 group-hover/hover:text-background group-hover/hover:rotate-cta shadow-sm shadow-yellow-500 hover:shadow-xl group-hover/hover:shadow-yellow-500/30 group-hover/hover:shadow-xl group-hover/hover:shadow-yellow-500/30`}
		>
			{iconCloned}
			{title}
		</BadgeUI>
	)
}
