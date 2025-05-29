import type { ISectionWrapper } from "@/utils/types";
import SectionHeader from "@/components/section-header";

export default function SectionWrapper({ id, children, className, badge, title, text }: ISectionWrapper) {
	return (
		<section id={id} className={`w-full py-16 md:py-24 lg:py-32 relative overflow-hidden${className ? ` ${className}` : ''}`}>
			<div className="container px-4 md:px-6 relative">
				<SectionHeader
					id={id}
					badge={badge}
					title={title}
					text={text}
				/>

				{children}
			</div>

			<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
		</section>
	)
}
