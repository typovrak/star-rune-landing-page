import type { IFeedbackWall } from "@/utils/types";
import CardClient from "@/components/card-client";
import { useRef, useEffect } from "react";

export default function FeedbackWall({ items }: IFeedbackWall) {

	const speed = -1;

	const wrapperRef = useRef(null);
	const floatRef = useRef(null);

	let floatX = 0;
	let animationFrameId: any = null;

	function handleSlide() {
		if (!floatRef.current) return;

		(floatRef.current as HTMLDivElement).style.transform = `translate3d(${floatX}px, 0,0)`;
		floatX = floatX + speed;

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
				<div>
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

				<div>
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
