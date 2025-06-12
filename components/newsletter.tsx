import type { INewsletter } from "@/utils/types";
import Input from "@/components/input";
import ButtonIconSubscribe from "@/components/button-icon-subscribe";
import data from "@/utils/data";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Newsletter({ title, buttonTitle, size = "default" }: INewsletter) {

	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: any) {
		e.preventDefault();

		const formData = new FormData();
		formData.append("fields[email]", email);

		try {
			setLoading(true);
			const res = await fetch(data.url.newsletter, {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: formData,
			});

			const jsonRes = await res.json();

			if (jsonRes.success) {
				toast.success("You are now subscribed !");
				setEmail("");

				setLoading(false);
				return;
			}


			toast.error(jsonRes.errors.fields.email[0]);

			setLoading(false);
			return;
		} catch (e: any) {
			toast.error(e.errors.fields.email[0]);

			setLoading(false);
			return;
		}
	}

	return (
		<>
			<h3 className={`text-center${size === "default" ? " uppercase font-medium text-slate-900 mb-2" : " text-2xl font-bold text-slate-700 mb-4"}`}>{title}</h3>

			<p className={`text-sm text-slate-500 mb-4 text-center${size === "default" ? " text-balance" : ""}`}>Receive the latest news and updates directly in your inbox.</p>

			<form
				className={`mb-4${size === "default" ? " space-y-3" : " flex gap-2 flex-wrap s:flex-nowrap"}`}
				onSubmit={handleSubmit}
			>
				<Input
					type="email"
					placeholder="Your address email"
					state={email}
					setState={setEmail}
				/>

				<ButtonIconSubscribe
					title={buttonTitle}
					className={`w-full${size === "big" ? " s:w-auto" : ""}`}
					loading={loading}
				/>
			</form>

			<p className="text-xs text-center text-balance text-slate-500">
				We respect your privacy. You can unsubscribe at any time.
			</p>
		</>
	)
}
