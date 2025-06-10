import type { ISectionWrapper } from "@/utils/types";
import SectionHeader from "@/components/section-header";
import Hr from "@/components/hr";

export default function SectionWrapper({ id, children, className, badge, title, text, h1, removeWrapper }: ISectionWrapper) {
	return (
		<section id={id} className={`w-full py-16 md:py-24 lg:py-32 relative overflow-hidden${className ? ` ${className}` : ''}`}>
			<div className="container px-4 relative">
				<SectionHeader
					id={id}
					badge={badge}
					title={title}
					text={text}
					h1={h1}
				/>

				{removeWrapper ? null : children}
			</div>

			{removeWrapper ? children : null}

			<Hr />
		</section>
	)
}
