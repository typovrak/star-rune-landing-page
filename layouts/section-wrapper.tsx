import type { ISectionWrapper } from "@/utils/types";
import SectionHeader from "@/components/section-header";
import Hr from "@/components/hr";

export default function SectionWrapper({ id, children, className, badge, title, text, h1 }: ISectionWrapper) {
	return (
		<section id={id} className={`w-full py-16 md:py-24 lg:py-32 relative overflow-hidden${className ? ` ${className}` : ''}`}>
			<div className="container px-4 md:px-6 relative">
				<SectionHeader
					id={id}
					badge={badge}
					title={title}
					text={text}
					h1={h1}
				/>

				{children}
			</div>

			<Hr />
		</section>
	)
}
