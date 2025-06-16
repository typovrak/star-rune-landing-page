import type { IResourcePage } from "@/utils/types";

export default function ResourcePage({ children }: IResourcePage) {
	return (
		<section className="container mt-[var(--header-height)]">
			{children}
		</section>
	)
}
