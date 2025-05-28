import type { IBlockCommunity } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import SocialLinks from "@/components/social-links";
import NewsletterForm from "@/components/newsletter-form";
import { Star } from "lucide-react";

export default function BlockCommunity({ }: IBlockCommunity) {
	return (
		<SectionWrapper
			id="community"
			badge={{
				icon: <Star />,
				title: "Join us"
			}}
			title="Join our community"
			text="Follow us on social media to stay informed about the latest news and updates"
			className="bg-gradient-to-b from-background to-muted"
		>
			<>
				<SocialLinks />

				<div className="mx-auto max-w-md space-y-6 py-12">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
							<p className="text-muted-foreground">Receive the latest news and updates directly in your inbox</p>
						</div>
					</div>

					<NewsletterForm />
				</div>
			</>
		</SectionWrapper>
	)
}
