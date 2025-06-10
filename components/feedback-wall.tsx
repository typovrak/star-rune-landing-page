import type { IFeedbackWall } from "@/utils/types";
import CardClient from "@/components/card-client";
import { useRef, useEffect, useState } from "react";

export default function FeedbackWall({ items }: IFeedbackWall) {

	const speed = -10;
	const gapX = 24;

	const wrapperRef = useRef(null);
	const floatRef = useRef(null);

	const [childrenArray, setChildrenArray] = useState([0, 1]);

	let floatX = 0;
	let animationFrameId: any = null;
	let childMoved = 0;

	function handleSlide() {
		if (!floatRef.current) return;
		const floatRefCurrent = floatRef.current as HTMLDivElement;

		floatRefCurrent.style.transform = `translate3d(${floatX}px, 0,0)`;
		floatX = floatX + speed;

		animationFrameId = requestAnimationFrame(handleSlide)
	};

	function moveChild(i: number) {
		if (!floatRef.current) return;

		const currentChild = (floatRef.current as HTMLDivElement).children[i] as HTMLDivElement | undefined;
		if (!currentChild) return;

		const childWidth = currentChild.offsetWidth;

		if (childWidth === 0) return;
		const calc = Math.trunc(floatX / childWidth);

		if (calc !== childMoved) {
			currentChild.style.transform = `translate3d(${(childWidth + gapX) * (childrenArray.length - i - 1) + (childWidth + gapX) * Math.abs(calc)}px, 0, 0)`;
			childMoved = calc;
		}
	}

	function generateChildNeeded() {
		if (!floatRef.current) return;

		const currentChild = (floatRef.current as HTMLDivElement).children[0] as HTMLDivElement | undefined;
		if (!currentChild) return;

		if (currentChild.offsetWidth === 0) return;
		let childNeeded = Math.ceil(window.innerWidth / currentChild.offsetWidth) + 1;

		if (childNeeded <= childrenArray.length) return;

		setChildrenArray([...childrenArray, childrenArray.length]);
	}

	useEffect(() => {
		if (!wrapperRef.current) return;

		generateChildNeeded();

		new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					handleSlide();
					return;
				}

				if (animationFrameId) {
					cancelAnimationFrame(animationFrameId);
					animationFrameId = null;
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0
			}
		).observe(wrapperRef.current);
	}, []);

	useEffect(() => {
		if (!floatRef.current) return;

		for (let i = 0; i < childrenArray.length; i++) {
			new IntersectionObserver(
				([e]) => {
					if (!e.isIntersecting) {
						console.log("invisible", i);
						moveChild(i);
						return;
					}

				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0
				}
			).observe((floatRef.current as HTMLDivElement).children[i]);
		}
	}, [childrenArray]);

	return (
		<div
			ref={wrapperRef}
			className="relative w-full"
		>
			<CardClient
				id={items[0].id}
				src={items[0].src}
				names={items[0].names}
				about={items[0].about}
				text={items[0].text}
				source={items[0].source}
				className="opacity-0 pointer-events-none"
			/>

			<div
				ref={floatRef}
				className="absolute flex gap-6 top-0 left-0"
			>
				{childrenArray.map((id) => (
					<div key={id} className="flex gap-6">
						{items.map(({ id, src, names, about, text, source }) => (
							<CardClient
								key={id}
								id={id}
								src={src}
								names={names}
								about={about}
								text={text}
								source={source}
							/>
						))}
					</div>
				))}
			</div>
		</div >
	)
}
