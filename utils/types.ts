import type { ReactElement, ReactNode } from "react";

export interface ISectionHeader {
	id: string;
	badge: IBadge;
	title: string;
	text: string;
	h1?: boolean;
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
	size?: "default" | "big";
	handleCloseMobileMenu?: () => void;
}

export interface ISocialIconList {
	className?: string;
	iconClassName?: string;
}

export interface ISVG {
	className?: string;
}

export type TExternalLinkEvent = (e: any) => void;

export interface IExternalLink {
	href: string;
	className?: string;
	children: ReactNode;
	title?: string;
	onMouseEnter?: TExternalLinkEvent;
	onMouseOut?: TExternalLinkEvent;
	onTouchStart?: TExternalLinkEvent;
	onTouchEnd?: TExternalLinkEvent;
	onClick?: TExternalLinkEvent;
}

export interface IIconInvert {
	icon: ReactElement;
	iconHover: ReactElement;
}

export type TButtonIconSize = "default" | "big" | "bigger";

export interface IButtonIcon {
	url: string;
	icon: ReactElement;
	title: string;
	className?: string;
	size?: TButtonIconSize;
	titleClassName?: string;
	ping?: IPing;
}

export interface IButtonIconDemo {
	size?: TButtonIconSize;
	ping?: IPing;
}

export interface IButtonIconKickstarter {
	size?: TButtonIconSize;
}

export interface IButtonIconDiscord {
	size?: TButtonIconSize;
}

export interface IButtonIconSubscribe {
	title: string;
	size?: TButtonIconSize;
}

export interface IQuickLinks {
	className?: string;
	floatClassName?: string;
	linkClassName?: string;
	aspectColumn?: boolean;
	hiddenLinksDesktop?: number[];
	handleCloseMobileMenu?: () => void;
	externalLinks?: {
		url: string;
		title: string;
	}[];
}

export interface IButtonMenu {
	icon: ReactElement;
	title: string;
	iconHover?: ReactElement;
}

export interface IScrollIndicator {
	url: string;
	title: string;
	className?: string;
}

export interface ICardSellingPoint {
	icon: ReactElement;
	iconHover: ReactElement;
	iconColor: string;
	title: string;
	text: string;
	className?: string;
}

export interface IPing {
	pingClassName: string;
	ballClassName: string;
	size?: TButtonIconSize;
}

export interface ICardFeature {
	icon: ReactElement;
	iconHover: ReactElement;
	title: string;
	content: ReactNode;
	className?: string;
	iconClassName?: string;
}

export interface IInput {
	type: "email";
	placeholder: string;
	className?: string;
}

export interface IHr {
}

export interface INewsletter {
	title: string;
	buttonTitle: string;
	size?: "default" | "big";
}

export interface ICardSocial {
	icon: ReactElement;
	iconHover: ReactElement;
	title: string;
	text: string;
	url: string;
	buttonTitle: string;
}
