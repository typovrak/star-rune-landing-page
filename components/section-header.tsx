import Badge from "@/components/badge";

export default function SectionHeader({ badge, title, text }: { badge: { icon: ReactElement, title: string | ReactNode }, title: string, text: string }) {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 text-center">
			<Badge icon={badge.icon} title={badge.title} />

			<div className="space-y-2 max-w-3xl">
				<h2 className="leading-[1.25] sm:leading-[1.25] md:leading-[1.25] lg:leading-[1.25] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">{title}</h2>
				<p className="text-muted-foreground md:text-xl lg:text-xl max-w-[900px] mx-auto">{text}</p>
			</div>
		</div>
	)
}
