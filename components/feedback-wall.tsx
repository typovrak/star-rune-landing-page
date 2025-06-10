import type { IFeedbackWall } from "@/utils/types";
import CardClient from "@/components/card-client";
import { useRef, useEffect, useState } from "react";

export default function FeedbackWall({ items }: IFeedbackWall) {

	const wrapperRef = useRef(null);
	const floatRef = useRef(null);

	const floatXRef = useRef(0);

	const [childrenArray, setChildrenArray] = useState<{
		id: number,
		observer: IntersectionObserver | null
	}[]>([{
		id: 0,
		observer: null,
	}, {
		id: 1,
		observer: null,
	}]);


	const speed = -10;
	let animationFrameId: any = null;

	function handleSlide() {
		if (!floatRef.current) return;
		const floatRefCurrent = floatRef.current as HTMLDivElement;

		floatRefCurrent.style.transform = `translate3d(${floatXRef.current}px, 0,0)`;
		floatXRef.current = floatXRef.current + speed;

		animationFrameId = requestAnimationFrame(handleSlide)
	};

	const gapX = 24;
	let childMoved = 0;

	function moveChild(i: number) {
		if (!floatRef.current) return;

		const currentChild = (floatRef.current as HTMLDivElement).children[i] as HTMLDivElement | undefined;
		if (!currentChild) return;

		const childWidth = currentChild.offsetWidth;

		if (childWidth === 0) return;
		const calc = Math.trunc(floatXRef.current / childWidth);

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

		const childToAdd = [];
		for (let i = 0; i < childNeeded - childrenArray.length; i++) {
			childToAdd.push({
				id: i + childrenArray.length,
				observer: null,
			});
		}

		setChildrenArray([...childrenArray, ...childToAdd]);
	}

	function handleResize() {
		generateChildNeeded();
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

		window.addEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!floatRef.current) return;

		for (let i = 0; i < childrenArray.length; i++) {
			// can change value from another thread so need to keep the reference in a const
			const previousObserver = childrenArray[i].observer;
			if (previousObserver) previousObserver.disconnect();
			childrenArray[i].observer = null;

			const observer = new IntersectionObserver(
				([e]) => {
					if (!e.isIntersecting) {
						moveChild(i);
						return;
					}

				},
				{
					root: null,
					rootMargin: '0px',
					threshold: 0
				}
			);

			observer.observe((floatRef.current as HTMLDivElement).children[i]);
			childrenArray[i].observer = observer;

			((floatRef.current as HTMLDivElement).children[i] as HTMLElement).style.transform = "translate3d(0,0,0)";
		}

		floatXRef.current = 0;
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
				{childrenArray.map(({ id }) => (
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
