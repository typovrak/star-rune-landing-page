import type { ISectionWrapper } from "@/utils/types";
import SectionHeader from "@/components/section-header";
import Hr from "@/components/hr";

export default function SectionWrapper({ id, children, className, badge, title, text, h1, removeWrapper }: ISectionWrapper) {
	return (
		<section
			id={id}
			// INFO: if you want to remove some padding on desktop, modify py-16 below to py-14 or less
			className={`group w-full py-16 relative overflow-hidden${className ? ` ${className}` : ''}`}
		>
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
