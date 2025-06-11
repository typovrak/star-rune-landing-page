import type { IInput } from "@/utils/types";
import { Input as InputUI } from "@/components/ui/input";

export default function Input({ type, placeholder, className, state, setState }: IInput) {
	// TODO: faire en sorte que le placeholder enlève chaque lettre une par une, une en haut, une en bas.
	return (
		<InputUI
			type={type}
			placeholder={placeholder}
			className={`border-2 border-orange-400 placeholder:text-slate-900 hover:rotate-cta transition-all duration-300 focus:transition-all${className ? ` ${className}` : ""}`}
			autoComplete={type}
			aria-required={true}
			aria-invalid={false}
			value={state}
			onChange={(e) => setState(e.target.value)}
		/>
	)
}
