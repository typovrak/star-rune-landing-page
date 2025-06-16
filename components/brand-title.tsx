import type { IBrandTitle } from "@/utils/types";
import data from "@/utils/data";
import Link from "next/link";
import { type SyntheticEvent } from "react";
import Nova from "@/icons/nova";

export default function BrandTitle({ size = "default", handleCloseMobileMenu }: IBrandTitle) {

	function backToTop(e: SyntheticEvent) {
		e.preventDefault();

		if (typeof handleCloseMobileMenu !== "undefined") {
			handleCloseMobileMenu();
		}

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});

		history.replaceState(null, "", "/");
	}

	return (
		<Link
			href="/"
			className="flex items-center space-x-2 group/hover hover:rotate-text transition-all duration-300 will-change-transform uppercase"
			onClick={backToTop}
		>
			<div className="relative top-[-2px]">
				<Nova className={`${size === "default" ? "h-9 w-9" : "h-11 w-11"} group-hover/hover:rotate-text transition-transform duration-300 group-hover/hover:scale-[115%]`} />
			</div>

			<strong className={`${size === "default" ? "text-lg" : "text-xl"} group-[.dark]:text-white text-slate-900 font-primary font-semibold transition-all duration-300`}>
				{data.brand}
			</strong>
		</Link>
	)
}
