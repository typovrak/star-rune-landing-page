export default function SectionWrapper({ id, children, className }: { id: string, children: ReactNode, className?: string }) {
	return (
		<section id={id} className={``}>
			{children}
			{/* TODO: insert bottom border */}
		</section>
	)
}
