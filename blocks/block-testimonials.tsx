import type { IBlockTestimonials, TItemClient } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Quote } from "lucide-react";
import FeedbackWall from "@/components/feedback-wall";

export default function BlockTestimonials({ id }: IBlockTestimonials) {

	const speed = 1;

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
			className="bg-yellow-50"
			removeWrapper={true}
		>
			<div className="flex flex-col gap-6">
				<FeedbackWall
					items={items}
					speed={speed * -1}
				/>

				<FeedbackWall
					items={items}
					speed={speed}
				/>
			</div>
		</SectionWrapper>
	)
}
