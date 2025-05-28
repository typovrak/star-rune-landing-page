import type { ReactElement, ReactNode } from "react";

export interface ISectionHeader {
	badge: IBadge,
	title: string,
	text: string,
}

export interface IBadge {
	icon: ReactElement<{ className?: string }>,
	title: string | ReactNode,
}

export interface ISectionWrapper extends ISectionHeader {
	children: ReactNode,
	id: string,
	className?: string,
}

export interface IBlockCommunity {
}

export interface IBlockTeam {
}

export interface IBlockTestimonials {
}
