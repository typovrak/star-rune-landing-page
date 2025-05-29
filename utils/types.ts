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

export interface IBlockFeatures {
}

export interface IBlockResume {
}

export interface IBlockAbilities {
}

export interface IBlockGallery {
}

export interface IBlockHero {
}

export interface IHeader {
}

export interface IFooter {
}

export interface IBlockConversion {
}

export interface IBrandTitle {
}
