import type { INewsletter } from "@/utils/types";
import Input from "@/components/input";
import ButtonIconSubscribe from "@/components/button-icon-subscribe";
import data from "@/utils/data";

export default function Newsletter({ title, buttonTitle, size = "default" }: INewsletter) {
	return (
		<>
			<h3 className={`text-center${size === "default" ? " uppercase font-medium text-slate-900 mb-2" : " text-2xl font-bold text-slate-700 mb-4"}`}>{title}</h3>

			<p className={`text-sm text-slate-500 mb-4 text-center${size === "default" ? " text-balance" : ""}`}>Receive the latest news and updates directly in your inbox.</p>

			<form
				action={data.url.newsletter}
				method="post"
				data-code
				target="_blank"
				className={`mb-4${size === "default" ? " space-y-3" : " flex gap-2 flex-wrap s:flex-nowrap"}`}
			>
				<Input
					type="email"
					placeholder="Your address email"
				/>

				<ButtonIconSubscribe
					title={buttonTitle}
					className={`w-full${size === "big" ? " s:w-auto" : ""}`}
				/>
			</form>

			<p className="text-xs text-center text-balance text-slate-500">
				We respect your privacy. You can unsubscribe at any time.
			</p>
		</>
	)
}
