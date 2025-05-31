import type { IBrandTitle } from "@/utils/types";
import data from "@/utils/data";
import Link from "next/link";
import { Star } from "lucide-react";
import { type SyntheticEvent } from "react";

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
		<Link href="/" className="flex items-center space-x-2 group hover:rotate-text transition-all duration-300 will-change-transform uppercase" onClick={backToTop}>
			<div className="relative top-[-2px]">
				<Star className={`${size === "default" ? "h-7 w-7" : "h-9 w-9"} fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-[115%] group-hover:rotate-[72deg]`} />
			</div>

			<strong className={`${size === "default" ? "text-lg" : "text-xl"} font-primary font-semibold`}>
				{data.brand}
			</strong>
		</Link>
	)
}


