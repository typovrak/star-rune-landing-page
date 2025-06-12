import type { IIconInvert } from "@/utils/types";

export default function IconInvert({ icon, iconHover }: IIconInvert) {
	return (
		<div className="group-hover/hover:rotate-icon duration-300">
			<div className="group-hover/hover:opacity-0 transition-all duration-300">
				{icon}
			</div>

			<div className="absolute inset-0 opacity-0 group-hover/hover:opacity-100 transition-all duration-300">
				{iconHover}
			</div>
		</div>
	)
}
