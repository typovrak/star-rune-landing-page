import type { IBlockTestimonials } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Quote } from "lucide-react";
import TestimonialsSection from "@/components/testimonials-section";

export default function BlockTestimonials({ }: IBlockTestimonials) {
	return (
		<SectionWrapper
			id="testimonials"
			badge={{
				icon: <Quote />,
				title: "Testimonials"
			}}
			title="What people are saying"
			text="Hear from our early players, educators, and supporters"
			className="bg-yellow-500/5"
		>

			<TestimonialsSection />
		</SectionWrapper>
	)

}
