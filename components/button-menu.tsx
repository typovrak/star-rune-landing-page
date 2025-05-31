import type { IButtonMenu } from "@/utils/types";
import { SheetTrigger } from "@/components/ui/sheet";

export default function ButtonMenu({ icon, title, iconHover }: IButtonMenu) {
	return (
		<SheetTrigger asChild>
			<button className="group bg-yellow-500 h-10 w-10 flex items-center justify-center rounded-lg shadow-lg hover:rotate-icon will-change-transform transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30" title={title} aria-label={title}>
				<div className="relative bg-background p-[0.35rem] rounded-md h-8 w-8 pointer-events-none">
					<div className={iconHover ? `opacity-100 group-hover:opacity-0 transition-all duration-300` : ""}>
						{icon}
					</div>

					{iconHover &&
						<div className="absolute inset-[0.35rem] opacity-0 group-hover:opacity-100 transition-all duration-300">
							{iconHover}
						</div>
					}
				</div>
			</button>
		</SheetTrigger>
	)
}
