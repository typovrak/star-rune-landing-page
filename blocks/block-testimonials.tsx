import type { IBlockTestimonials, TItemClient } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import { Quote } from "lucide-react";
import FeedbackWall from "@/components/feedback-wall";

export default function BlockTestimonials({ id }: IBlockTestimonials) {

	const speed = 1;

	const items: TItemClient[] = [
		{
			id: 0,
			src: "nova-profile-picture.png",
			names: "Rowan",
			about: "9 years old",
			text: "This is a great game and will teach so many kids how to type! I learned so much playing it for just 20 minutes.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 1,
			src: "nova-profile-picture.png",
			names: "Ava",
			about: "8 years old",
			text: "I really liked to advance to the next levels & I really liked how it taught me!",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 2,
			src: "nova-profile-picture.png",
			names: "Devin H",
			about: "14 years old",
			text: "Bro this game is actually addicting and I didn’t expect that from a typing game",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 3,
			src: "nova-profile-picture.png",
			names: "Liam",
			about: "9 years old",
			text: "It was a super fun game and it helped me type!",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 4,
			src: "nova-profile-picture.png",
			names: "Mason",
			about: "7 years old",
			text: "It’s a cool game to teach kids to type and teaches skill",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 5,
			src: "nova-profile-picture.png",
			names: "Jude",
			about: "10 years old",
			text: "I love how I get to fight while I type! It’s way cooler than other typing games I’ve tried.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 6,
			src: "nova-profile-picture.png",
			names: "Ella",
			about: "8 years old",
			text: "It makes me feel like I’m doing a real mission and learning at the same time.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 7,
			src: "nova-profile-picture.png",
			names: "Leo",
			about: "9 years old",
			text: "It’s like a battle game but you get smarter.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 8,
			src: "nova-profile-picture.png",
			names: "Sophia",
			about: "11 years old",
			text: "I never liked typing but now I want to keep playing because I want to beat all the levels!",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 9,
			src: "nova-profile-picture.png",
			names: "Lindsey R",
			about: "Mother",
			text: "He kept asking if he could play just one more level. That’s never happened with a learning game in our house.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 10,
			src: "nova-profile-picture.png",
			names: "Megan H",
			about: "Mother",
			text: "I thought he was just button mashing at first, but he’s actually typing. What sorcery is this??",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 11,
			src: "nova-profile-picture.png",
			names: "CoffeeBoi",
			about: "Speed Racers developer",
			text: "THIS IS CRAZY 🔥🔥🔥",
			source: {
				type: "x",
				title: "TODO:",
			},
		},
	]

	const items2: TItemClient[] = [
		{
			id: 0,
			src: "nova-profile-picture.png",
			names: "Hannah Ward, M.Ed.",
			about: "Actual Reading",
			text: "Typing is a lost skill for the iPad generation. Star Rune is such a promising educational project. I’m pleasantly surprised that it’s able to incorporate both research-backed direct instruction elements and high-engagement gameplay. Typing is an essential 21st century literacy skill and Star Rune is an amazing way to teach children.",
			source: {
				type: "x",
				title: "TODO:",
			},
		},
		{
			id: 1,
			src: "nova-profile-picture.png",
			names: "Aaron Craig, Father, Typing Instructor",
			about: "Programmer",
			text: "The really cool thing with this game was he kept talking out loud to himself, asking where this key and that key was. But he would try really hard to remember instead of just look down. In the 30 minutes he played, he actually grew in proficiency significantly. I’ve tried to get him to do typing games in the past, but he lost interest so fast in those. I had to stop him from playing this one, so he could get his chores done.",
			source: {
				type: "discord",
				title: "TODO:",
			},
		},
		{
			id: 2,
			src: "nova-profile-picture.png",
			names: "Hannah Ward, M.Ed.",
			about: "Actual Reading",
			text: "I asked my son if he wants to try any other prototype updates you have and he jumped up and down with excitement",
			source: {
				type: "x",
				title: "TODO:",
			},
		},
		{
			id: 3,
			src: "nova-profile-picture.png",
			names: "Lindsey R.",
			about: "Parent",
			text: "He kept asking if he could play just one more level. That’s never happened with a learning game in our house.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 4,
			src: "nova-profile-picture.png",
			names: "Frankie Hobbins",
			about: "Creator of Squash and Spell",
			text: "Star Rune is really fun! The game feel is so exquisite that while you're taking down enemies, it doesn't feel like you're learning, but then suddenly, your typing has improved! Add in the super cool music and epic boss battles, and this game is going places. Well worth giving it a try.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 5,
			src: "nova-profile-picture.png",
			names: "Vince Boley",
			about: "Father and Teacher",
			text: "YOO this was so cool! Star Rune is an out of this world typing experience. Filled with \"type and slash\" gameplay, every keystroke combines education with excitement as you traverse a side-scrolling intergalactic world conquering evil letters and gaining practical real world skills. I can't wait to use this in my classroom next year and with my own kids at home.",
			source: {
				type: "x",
				title: "TODO:",
			},
		},
		{
			id: 6,
			src: "nova-profile-picture.png",
			names: "p1an0guy",
			about: "Colemak speed typist",
			text: "Star Rune is a great game for kids wanting to learn how to touch type, as well as adults who want to improve their technique. It's unlike any other typing platform I've seen before, and it really feels like I'm playing a video game instead of mashing \"f\" and \"j\" over and over again. The graphics and audio are amazing, and platform gamers will feel right at home.",
			source: {
				type: "discord",
				title: "TODO:",
			},
		},
		{
			id: 7,
			src: "nova-profile-picture.png",
			names: "Xander H",
			about: "11 years old",
			text: "The game is so great!!! You can get really high scores!!! such as 24195!!! The letters talking sound so cool and the F that says: WHAT IS THIS STAR!!!!! WHERE'D HE COME FROM!!! STOP HIM!!!!! Sound's really cool!!! And my favorite part is the lore, the levels, and the treasure chest loot!!! Starrune is an Amazing game!!!! It can be used for all ages!!! And this game is so cool and I Love it!!!! 10000000/10!!!!",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 8,
			src: "nova-profile-picture.png",
			names: "Evie S",
			about: "7 years old",
			text: "I love Star Rune!! Typing used to be hard and boring but now it’s actually fun. I think even like babies could get good at it lol. I hope one day starrune will inspire you! BEST. GAME. EVER!!!!",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
		{
			id: 9,
			src: "nova-profile-picture.png",
			names: "Switchum (Christian)",
			about: "Nerdcore Artists & University Teaching Program 5th Year",
			text: "Star Rune uses fast-paced and addictive gameplay to teach students the foundations of typing, an essential skill in our 21st-century world. Better yet, Star Rune places fun at the forefront of the experience, making learning to type approachable and exciting rather than a chore.",
			source: {
				type: "irl",
				title: "TODO:",
			},
		},
	]

	return (
		<SectionWrapper
			id={id}
			badge={{
				icon: <Quote />,
				title: "Testimonials"
			}}
			title="What people are saying"
			text="Hear from our early players, educators, and supporters"
			className="bg-yellow-50"
			removeWrapper={true}
		>
			<div className="flex flex-col gap-6">
				<FeedbackWall
					items={items}
					speed={speed * -1}
					biggerItemId={0}
				/>

				<FeedbackWall
					items={items2}
					speed={speed / 2}
					biggerItemId={7}
				/>
			</div>
		</SectionWrapper>
	)
}
