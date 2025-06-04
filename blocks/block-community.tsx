import type { IBlockCommunity } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import SocialLinks from "@/components/social-links";
import { Star } from "lucide-react";
import Newsletter from "@/components/newsletter";

export default function BlockCommunity({ id }: IBlockCommunity) {
	return (
		<SectionWrapper
			id={id}
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

				<div className="mx-auto max-w-md">
					<Newsletter
						title="Subscribe to our Newsletter"
						buttonTitle="Join now"
						size="big"
					/>
				</div>
			</>
		</SectionWrapper>
	)
}
