import type { ISVG } from "@/utils/types";

export default function Nova({ className }: ISVG) {
	return (
		<svg
			xmlnsXlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100 100"
			className={className}
		>
			<defs>
				<linearGradient id="b">
					<stop offset={0} stopColor="#000" stopOpacity={1} />
					<stop offset={1} stopColor="#000" stopOpacity={0.75117373} />
				</linearGradient>
				<linearGradient id="a">
					<stop offset={0.454386} stopColor="#f7ff00" stopOpacity={1} />
					<stop offset={1} stopColor="#fffeab" stopOpacity={1} />
				</linearGradient>
				<linearGradient
					xlinkHref="#a"
					id="c"
					x1={-1.6337852}
					y1={18.525164}
					x2={82.035367}
					y2={18.525164}
					gradientUnits="userSpaceOnUse"
				/>
				<linearGradient
					xlinkHref="#b"
					id="d"
					x1={-1.6337852}
					y1={18.525163}
					x2={40.200792}
					y2={18.525163}
					gradientUnits="userSpaceOnUse"
				/>
			</defs>
			<g paintOrder="stroke fill markers">
				<path
					d="M40.2-21.262l14.631 23.85 27.204 6.545-18.161 21.284 2.182 27.895-25.855-10.695-25.855 10.695 2.182-27.895L-1.634 9.133 25.57 2.588z"
					transform="translate(10.03 30.954)"
					opacity={1}
					fill="url(#c)"
					fillOpacity={1}
					strokeWidth={0.264999}
				/>
				<path
					transform="translate(10.03 30.954)"
					d="M40.2-21.262c-6.073 52.69 0 68.879 0 68.879L14.347 58.312l2.182-27.895L-1.634 9.133 25.57 2.588z"
					strokeWidth={0.264999}
					fill="url(#d)"
				/>
				<path
					d="M37.066 25.162h25.782l4.075 9.318H32.756z"
					opacity={1}
					fill="#fff"
					strokeWidth={0.264999}
				/>
				<path
					d="M61.591 51.903c-.392 8.587-1.252 9.716-2.7 9.716-1.449 0-2.623-.717-2.544-9.716.043-4.956 1.174-8.974 2.622-8.974s2.848 4.023 2.622 8.974z"
					opacity={1}
					strokeWidth={0.248573}
					fill="#222"
					fillOpacity={1}
				/>
				<path
					d="M52.179 44.454l14.407-4.1 2.216 5.208-16.623 2.106z"
					opacity={1}
					strokeWidth={0.264999}
				/>
				<path
					d="M56.993 49.15a.883 1.81 0 01.885-1.686.883 1.81 0 01.878 1.704.883 1.81 0 01-.774 1.903.883 1.81 0 01-.976-1.462l.868-.335z"
					opacity={1}
					fill="#fff"
					fillOpacity={1}
					strokeWidth={0.0235676}
				/>
			</g>
		</svg>
	)
}
