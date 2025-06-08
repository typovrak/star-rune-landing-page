import type { IFeedbackWall } from "@/utils/types";
import CardClient from "@/components/card-client";
import { useRef, useEffect } from "react";

export default function FeedbackWall({ items }: IFeedbackWall) {

	const speed = -5;

	const wrapperRef = useRef(null);
	const floatRef = useRef(null);

	let floatX = 0;
	let animationFrameId: any = null;
	let childMoved = 0;

	function handleSlide() {
		if (!floatRef.current) return;
		const floatRefCurrent = floatRef.current as HTMLDivElement;

		floatRefCurrent.style.transform = `translate3d(${floatX}px, 0,0)`;
		floatX = floatX + speed;

		// si le premier élément n'est plus visibe : le mettre après son frère.
		// sinon, faire cela pour le second

		const child1 = floatRefCurrent.children[0] as HTMLDivElement | undefined;
		if (!child1) return;

		const child2 = floatRefCurrent.children[1] as HTMLDivElement | undefined;
		if (!child2) return;


		const childWidth = child1.offsetWidth;
		const calc = Math.trunc(floatX / childWidth);
		console.log(calc, childMoved, calc % 2)

		if (calc !== childMoved && Math.abs(calc % 2) === 1) {
			console.log("enter child1")
			// TODO: ajouter le gap en séparation et faire en sorte que le changement de translation se fait au milieu du calc car sinon sur pc on le voit
			child1.style.transform = `translate3d(${child2.offsetLeft + childWidth * Math.abs(calc)}px, 0, 0)`;
			childMoved = calc;
		}

		if (calc !== childMoved && Math.abs(calc % 2) === 0) {
			console.log("enter child1")
			child2.style.transform = `translate3d(${childWidth * Math.abs(calc)}px, 0, 0)`;
			childMoved = calc;
		}

		animationFrameId = requestAnimationFrame(handleSlide)
	};

	useEffect(() => {
		if (!wrapperRef.current) return;

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
				<div className="flex gap-6">
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

				<div className="flex gap-6">
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
			</div>
		</div>
	)
}
