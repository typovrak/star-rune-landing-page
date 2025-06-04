import type { IHr } from "@/utils/types";

export default function Hr({ }: IHr) {
	return (
		<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
	)
}
