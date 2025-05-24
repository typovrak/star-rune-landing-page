import Link from "next/link";
import headerCss from "@/styles/components/header.module.css";
import IconStar from "@/icons/Star";

export default function Header() {
	return (
		<header className={headerCss.header}>
			<div className={headerCss.wrapper}>
				<Link href="/" className={headerCss.logo}>
					<div>
						<IconStar/>
					</div>

					<strong>Star Rune</strong>
				</Link>
			</div>
		</header>
	)
}
