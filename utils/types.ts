import type { ReactElement, ReactNode } from "react";

export interface ISectionHeader {
	id: string;
	badge: IBadge;
	title: string;
	text: string;
}

export interface IBadge {
	icon: ReactElement<{ className?: string }>;
	title: string | ReactNode;
}

export interface ISectionWrapper extends ISectionHeader {
	children: ReactNode;
	className?: string;
}

export interface IBlockCommunity {
	id: string;
}

export interface IBlockTeam {
	id: string;
}

export interface IBlockTestimonials {
	id: string;
}

export interface IBlockFeatures {
	id: string;
}

export interface IBlockResume {
	id: string;
}

export interface IBlockAbilities {
	id: string;
}

export interface IBlockGallery {
	id: string;
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

export interface ISocialIconList {
}

export interface ISVG {
	className?: string;
}

export interface IExternalLink {
	href: string;
	className?: string;
	children: ReactNode;
	title?: string;
}

export interface IIconInvert {
	icon: ReactElement;
	iconHover: ReactElement;
}

export interface IButtonIcon {
	url: string;
	icon: ReactElement;
	title: string;
}
