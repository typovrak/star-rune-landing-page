import type { IPing } from "@/utils/types";

export default function Ping({ pingClassName, ballClassName, size = "default" }: IPing) {

	const commonClasses = ` ${size === "default" ? "h-3 w-3 -top-1 -right-1" : size === "big" ? "h-4 w-4 -top-1.5 -right-1.5" : "h-5 w-5 -top-2 -right-2"}`;
	return (
		<>
			<div className={`${commonClasses} absolute flex rounded-full animate-ping opacity-75${pingClassName ? ` ${pingClassName}` : ""}`}></div>
			<div className={`${commonClasses} absolute flex rounded-full scale-[90%] ${ballClassName ? ` ${ballClassName}` : ""}`}></div>
		</>
	)
}
