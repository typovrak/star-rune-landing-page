import type { IPage } from "@/utils/types";

export default function Page({ children, className }: IPage) {
	return (
		<main className={`flex flex-col min-h-screen${className ? ` ${className}` : ""}`}>
			{children}
		</main>
	)
}
