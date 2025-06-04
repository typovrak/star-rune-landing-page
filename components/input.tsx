import type { IInput } from "@/utils/types";
import { Input as InputUI } from "@/components/ui/input";

export default function Input({ type, placeholder, className }: IInput) {
	// TODO: faire en sorte que le placeholder enlève chaque lettre une par une, une en haut, une en bas.
	return (
		<InputUI
			type={type}
			placeholder={placeholder}
			className={`border-2 border-yellow-400 placeholder:text-slate-900 hover:rotate-cta transition-all duration-300 focus:transition-all${className ? ` ${className}` : ""}`}
		/>
	)
}
