import Link from "next/link";

export default function ExternalLink({ href, className, children }: { href: string, className?: string, children: ReactNode }) {
	return (
		<Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
			{children}
		</Link>
	)
}
