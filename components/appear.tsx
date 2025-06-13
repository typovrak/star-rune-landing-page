import type { IAppear } from "@/utils/types";
import { useEffect } from "react";

export default function Appear({ }: IAppear) {

	useEffect(() => {
		const appearClassName = "appear";

		const items = document.querySelectorAll('[data-appear]');
		if (!items.length) return;
		// data-appear
		// data-appear-timeout
		// data-appear-once
		// data-appear-threshold

		function observeOnce(observer: IntersectionObserver, target: Element) {
			if (!Boolean(target.getAttribute('data-appear-once'))) return;

			observer.unobserve(target);
		}

		for (let i = 0; i < items.length; i++) {
			const observer = new IntersectionObserver(
				([e]) => {
					// @ts-ignore
					const timeout = Math.trunc(+items[i].getAttribute('data-appear-timeout') * 1000) || null;

					if (e.isIntersecting) {
						if (!timeout) {
							items[i].classList.add(appearClassName);
							observeOnce(observer, items[i]);
							return;
						}

						setTimeout(() => {
							items[i].classList.add(appearClassName);
							observeOnce(observer, items[i]);
						}, timeout);
						return;
					}

					if (!timeout) {
						items[i].classList.remove(appearClassName);
						return;
					}

					setTimeout(() => {
						items[i].classList.remove(appearClassName);
					}, timeout);
				},
				{
					root: null,
					rootMargin: '0px',
					// @ts-ignore
					threshold: +items[i].getAttribute('data-appear-threshold') || 0
				}
			);

			observer.observe(items[i]);
		}
	}, []);

	return (
		<>
		</>
	)
}
