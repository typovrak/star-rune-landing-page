import { cloneElement, isValidElement } from "react";
import { Badge as BadgeUI } from "@/components/ui/badge";
import clsx from "clsx";
import type { IBadge } from "@/utils/types";

export default function Badge({ icon, title }: IBadge) {

	let iconCloned = icon;

	if (isValidElement(icon)) {
		iconCloned = cloneElement(icon, {
			className: clsx("mr-1 h-3 w-3", 'className' in icon.props ? ` ${icon.props.className}` : ''),
		});
	}

	return (
		<BadgeUI
			variant="outline"
			className="border-yellow-500/50 text-yellow-500 px-4 py-1"
		>
			{iconCloned}
			{title}
		</BadgeUI>
	)
}
