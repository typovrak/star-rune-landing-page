import { cloneElement } from "react";
import { Badge as BadgeUI} from "@/components/ui/badge";

export default function Badge({ icon, title }: { icon: ReactElement, title: string | ReactNode }) {

	const iconCloned = cloneElement(icon, {
		className: `mr-1 h-3 w-3${` ${icon.props.className}` ?? ""}`
	});

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
