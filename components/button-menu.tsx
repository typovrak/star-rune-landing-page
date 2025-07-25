import type { IButtonMenu } from "@/utils/types";
import { SheetTrigger } from "@/components/ui/sheet";

export default function ButtonMenu({ icon, title, iconHover }: IButtonMenu) {
	return (
		<SheetTrigger asChild>
			<button className="group/hover bg-yellow-400 h-10 w-10 flex items-center justify-center rounded-lg shadow-lg hover:rotate-icon will-change-transform transition-all duration-300 hover:shadow-xl shadow-yellow-400/30 hover:shadow-yellow-400/30" title={title} aria-label={title}>
				<div className="relative transition-all duration-300 bg-white group-[.dark]:bg-black p-[0.35rem] rounded-md h-8 w-8 pointer-events-none">
					<div className={iconHover ? `opacity-100 text-slate-950 group-[.dark]:text-white group-hover/hover:opacity-0 transition-all duration-300` : ""}>
						{icon}
					</div>

					{iconHover &&
						<div className="absolute inset-[0.35rem] opacity-0 text-slate-950 group-hover/hover:opacity-100 transition-all duration-300 group-[.dark]:text-white">
							{iconHover}
						</div>
					}
				</div>
			</button>
		</SheetTrigger>
	)
}
