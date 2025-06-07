import type { IButtonCircle } from "@/utils/types";

export default function ButtonCircle({ icon, title, onClick, className, iconClassName }: IButtonCircle) {
	return (
		<button
			className={`group/button-circle border-2 flex items-center justify-center bg-slate-600 hover:bg-slate-700 transition-all duration-300 rounded-full h-10 w-10 shadow-lg hover:shadow-xl${className ? ` ${className}` : ""}`}
			title={title}
			onClick={onClick}
		>
			<div className={`text-white transition-all duration-300${iconClassName ? ` ${iconClassName}` : ""}`}>
				{icon}
			</div>
		</button>
	)
}
