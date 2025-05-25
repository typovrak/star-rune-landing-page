import Badge from "@/components/badge";

export default function SectionHeader({ badge, title, text }: { badge: { icon: ReactElement, title: string | ReactNode }, title: string, text: string }) {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 text-center">
			<Badge icon={badge.icon} title={badge.title} />

			<div className="space-y-2 max-w-3xl">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">{title}</h2>
				<p className="text-muted-foreground md:text-xl/relaxed lg:text-xl/relaxed max-w-[85%] mx-auto">{text}</p>
			</div>
		</div>
	)
}
