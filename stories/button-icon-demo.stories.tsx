import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from "storybook/test";
import ButtonIconDemo from '@/components/button-icon-demo';
import data from "@/utils/data";

const meta = {
	component: ButtonIconDemo,
} satisfies Meta<typeof ButtonIconDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

async function playFunction({ canvas }: any) {
	const link = canvas.getByRole("link");
	expect(link).toHaveAttribute("href", data.url.demo);
	expect(link).toHaveAttribute("target", "_blank");
	expect(link).toHaveAttribute("rel", "noopener noreferrer");
}

export const Default: Story = {
	args: {
		size: "default",
	},
	play: playFunction
};

export const Big: Story = {
	args: {
		size: "big",
	},
	play: playFunction
};

export const Bigger: Story = {
	args: {
		size: "bigger",
	},
	play: playFunction
};
