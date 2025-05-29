import type { IBlockGallery } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { ImageIcon } from "lucide-react";
import data from "@/utils/data";
import GallerySection from "@/components/gallery-section";

export default function BlockGallery({ id }: IBlockGallery) {

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <ImageIcon />,
				title: "Gallery"
			}}
			title="Game screenshots"
			text={`Take a visual tour of the ${data.brand} universe`}
			className="bg-gradient-to-b from-white to-yellow-50 dark:from-background dark:to-yellow-950/20"
		>
			<GallerySection />
		</SectionWrapper>
	)
}
