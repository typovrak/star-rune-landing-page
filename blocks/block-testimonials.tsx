import type { IBlockTestimonials, TItemClient } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Quote } from "lucide-react";
import FeedbackWall from "@/components/feedback-wall";

export default function BlockTestimonials({ id }: IBlockTestimonials) {

	const items: TItemClient[] = [
		{
			id: 0,
			src: "profile.png",
			names: "Sarah Johnson",
			about: "Parent & Elementary Teacher",
			text: "Star Rune is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.",
			source: {
				type: "irl",
				title: "Beta tester",
			},
		},
		{
			id: 1,
			src: "profile.png",
			names: "Sarah Johnson",
			about: "Parent & Elementary Teacher",
			text: "Star Rune is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.",
			source: {
				type: "discord",
				title: "Beta tester",
				url: "https://mscholz.dev",
			},
		},
		{
			id: 2,
			src: "profile.png",
			names: "Sarah Johnson",
			about: "Parent & Elementary Teacher",
			text: "Star Rune is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.",
			source: {
				type: "youtube",
				title: "Beta tester",
				url: "https://mscholz.dev",
			},
		},
		{
			id: 3,
			src: "profile.png",
			names: "Sarah Johnson",
			about: "Parent & Elementary Teacher",
			text: "Star Rune is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.",
			source: {
				type: "kickstarter",
				title: "Beta tester",
				url: "https://mscholz.dev",
			},
		},
		{
			id: 4,
			src: "profile.png",
			names: "Sarah Johnson",
			about: "Parent & Elementary Teacher",
			text: "Star Rune is the most engaging typing game I've ever played. My kids are learning to type without even realizing it! After just 3 weeks, my 9-year-old's typing speed improved from 15 to 35 WPM.",
			source: {
				type: "x",
				title: "Beta tester",
				url: "https://mscholz.dev",
			},
		},
	];

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Quote />,
				title: "Testimonials"
			}}
			title="What people are saying"
			text="Hear from our early players, educators, and supporters"
			className="bg-yellow-500/5"
			removeWrapper={true}
		>
			<FeedbackWall
				items={items}
			/>
		</SectionWrapper>
	)

}
