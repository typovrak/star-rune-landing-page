import type { ISVG } from "@/utils/types";

export default function Comet({ className }: ISVG) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" /><path d="M4 4l7 7" /><path d="M9 4l3.5 3.5" /><path d="M4 9l3.5 3.5" /></svg>
	)
}
