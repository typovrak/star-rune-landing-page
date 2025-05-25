import Link from "next/link";

export default function ExternalLink({ href, className, children, ariaLabel }: { href: string, className?: string, children: ReactNode, ariaLabel?: string }) {
	return (
		<Link href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
			{children}
		</Link>
	)
}
