import type { IBrandTitle } from "@/utils/types";
import data from "@/utils/data";
import Link from "next/link";
import { Star } from "lucide-react";

export default function BrandTitle({ }: IBrandTitle) {
	return (
		<Link href="/" className="flex items-center space-x-2 group">
			<div className="relative top-[-2px]">
				<Star className="h-6 w-6 fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[72deg]" />
			</div>

			<strong className="text-lg font-primary font-semibold">
				{data.brand}
			</strong>
		</Link>
	)
}


