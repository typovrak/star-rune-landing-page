import type { IFeedbackWall } from "@/utils/types";
import CardClient from "@/components/card-client";
import { useRef, useEffect, useState } from "react";

export default function FeedbackWall({ items, speed }: IFeedbackWall) {

	const direction = speed > 0 ? 1 : -1;

	const wrapperRef = useRef(null);
	const floatRef = useRef(null);

	const floatXRef = useRef(0);
	const animationFrameId = useRef<number | null>(null);

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
	const [winW, setWinW] = useState(0);

	function handleSlide() {
		if (!floatRef.current) return;
		const floatRefCurrent = floatRef.current as HTMLDivElement;

		floatRefCurrent.style.transform = `translate3d(${floatXRef.current}px, 0,0)`;
		floatXRef.current = floatXRef.current + speed;

		animationFrameId.current = requestAnimationFrame(handleSlide)
	};

	const gapX = 24;
	let childMoved = 0;
	let loop = 0;

	function moveChild(i: number) {
		if (!floatRef.current) return;

		const currentChild = (floatRef.current as HTMLDivElement).children[i] as HTMLDivElement | undefined;
		if (!currentChild) return;

		const childWidth = currentChild.offsetWidth;

		if (childWidth === 0) return;

		const calc = Math.trunc(floatXRef.current / childWidth);

		// when speed/direction is -
		if (direction === -1) {
			if (calc !== childMoved) {
				currentChild.style.transform = `translate3d(${(childWidth + gapX) * (childrenArray.length - i - 1) + (childWidth + gapX) * Math.abs(calc)}px, 0, 0)`;
				childMoved = calc;
			}

			return;
		}

		// when speed/direction is +
		currentChild.style.transform = `translate3d(${(childWidth + gapX) * -1 * childrenArray.length * (1 + loop)}px,0,0)`;
		if (i === 0) loop++;
	}

	function generateChildNeeded() {
		if (!floatRef.current) return;

		const currentChild = (floatRef.current as HTMLDivElement).children[0] as HTMLDivElement | undefined;
		if (!currentChild) return;

		if (currentChild.offsetWidth === 0) return;
		let childNeeded = Math.ceil(window.innerWidth / currentChild.offsetWidth) + 1;

		// no update on childrenArray needed
		if (childNeeded === childrenArray.length) return;

		// need more children
		if (childNeeded > childrenArray.length) {
			const childToAdd = [];
			for (let i = 0; i < childNeeded - childrenArray.length; i++) {
				childToAdd.push({
					id: i + childrenArray.length,
					observer: null,
				});
			}

			setChildrenArray([...childrenArray, ...childToAdd]);
			return;
		}

		// need less children
		for (let i = 0; i < childrenArray.length - childNeeded; i++) {
			const childToRemove = childNeeded + i;
			childrenArray[childToRemove].observer?.disconnect();
			childrenArray[childToRemove].observer = null;
		}

		setChildrenArray([...childrenArray.slice(0, childNeeded)]);
	}

	function handleResize() {
		setWinW(window.innerWidth);
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

				console.log(animationFrameId.current)
				if (animationFrameId.current) {
					cancelAnimationFrame(animationFrameId.current);
					animationFrameId.current = null;
				}
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0
			}
		).observe(wrapperRef.current);


		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, []);

	useEffect(() => {
		generateChildNeeded();
	}, [winW]);

	useEffect(() => {
		if (!wrapperRef.current || !floatRef.current) return;

		floatXRef.current = 0;

		for (let i = 0; i < childrenArray.length; i++) {
			const currentChild = (floatRef.current as HTMLDivElement).children[i] as HTMLElement | undefined;
			if (!currentChild) continue;

			childrenArray[i].observer?.disconnect();
			childrenArray[i].observer = null;

			const observer = new IntersectionObserver(
				([e]) => {
					if (!e.isIntersecting) {
						moveChild(i);
						return;
					}

				},
				{
					root: wrapperRef.current,
					rootMargin: '0px',
					threshold: 0
				}
			);

			observer.observe(currentChild);
			childrenArray[i].observer = observer;

			if (direction === -1 || i !== childrenArray.length - 1) {
				currentChild.style.transform = "translate3d(0,0,0)";
			} else {
				// only for the last element when speed/direction is +
				const childWidth = currentChild.offsetWidth;
				currentChild.style.transform = `translate3d(${(childWidth + gapX) * -1 * childrenArray.length}px,0,0)`;
			}
		}

		childMoved = 0;
		loop = 0;
	}, [childrenArray, winW]);

	return (
		<div
			ref={wrapperRef}
			className="relative w-full"
		>
			<div className="absolute top-0 left-0 h-full w-[64px] s:w-[128px] 2xl:w-[256px] bg-gradient-to-r from-yellow-50 to-transparent z-10 transition-all duration-300"></div>
			<div className="absolute top-0 right-0 h-full w-[64px] s:w-[128px] 2xl:w-[256px] bg-gradient-to-r from-yellow-50 to-transparent z-10 rotate-180 transition-all duration-300"></div>

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
				{childrenArray.map((child) => (
					<div key={child.id} className="flex gap-6">
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
