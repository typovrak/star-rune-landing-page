import type { IBlockTypingGames, TTypingGameButtonType } from "@/utils/types";
import SectionWrapper from "@/layouts/section-wrapper";
import data from "@/utils/data";
import Verified from "@/icons/verified";
import TypingGame from "@/components/typing-game";

export default function BlockTypingGames({ id }: IBlockTypingGames) {
  const games = [
    {
      id: 0,
      poster: {
        src: "isekat-poster.webp",
        alt: "Isekat typing game preview",
      },
      url: "https://store.steampowered.com/app/3737990/Isekat_Crushed_by_a_Computer_My_Beloved_Kitten_is_Transported_to_a_Fantasy_World_where_its_Typing_Skills_Save_the_Kingdom/",
      title: "Isekat",
      description:
        "A typing game where you play as a <strong>cat</strong>, crushed by a computer and transported to a <strong>fantasy world</strong> of swords, magic, catgirls and furries! As the hero summoned from another world, venture forth with your trusty keyboard, defeat foes and <strong>save the cat kingdom</strong>!",
      button: {
        type: "steam",
        title: "Try the free demo",
        colors: "bg-pink-400 shadow-pink-500/30 hover:shadow-pink-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
      strongColor: "oklch(65.6% 0.241 354.308)",
    },
    {
      id: 1,
      poster: {
        src: "glyphica-typing-survival-poster.webp",
        alt: "Glyphica: Typing Survival game preview",
      },
      url: "https://store.steampowered.com/app/2400160/Glyphica_Typing_Survival/",
      title: "Glyphica: Typing Survival",
      description:
        "<strong>Weaponize your WPM</strong>. Glyphica: Typing Survival is a single-player <strong>roguelite</strong> horde survival typing game that lets you mow down <strong>hordes of enemies</strong> in a minimalistic arena using your finger dexterity, your choice of weapons loadout, and sheer determination.",
      button: {
        type: "steam",
        title: "Play the demo now",
        colors: "bg-slate-400 shadow-slate-500/30 hover:shadow-slate-500/30",
      },
      cardColors:
        "border-slate-500/50 hover:border-slate-500 hover:shadow-slate-500",
      titleColors: "group-hover/typing-game:text-slate-500",
      strongColor: "oklch(55.4% 0.046 257.417)",
    },
    {
      id: 2,
      poster: {
        src: "keys-of-fury-poster.webp",
        alt: "Keys of Fury typing game preview",
      },
      url: "https://store.steampowered.com/app/1546690/Keys_of_Fury_Typing_Action/",
      title: "Keys of Fury",
      description:
        "Keys of Fury is a retro-style <strong>Beat `em up</strong> typing game. Focus on <strong>typing perfection</strong> as you battle your way to becoming a master of <strong>key fu</strong>.",
      button: {
        type: "steam",
        title: "Get the game on Steam",
        colors: "bg-orange-400 shadow-orange-500/30 hover:shadow-orange-500/30",
      },
      cardColors:
        "border-orange-500/50 hover:border-orange-500 hover:shadow-orange-500",
      titleColors: "group-hover/typing-game:text-orange-500",
      strongColor: "oklch(70.5% 0.213 47.604)",
    },
    {
      id: 3,
      poster: {
        src: "rhythm-typer-poster.webp",
        alt: "Rythm Typer typing game preview",
      },
      url: "https://rhythm-typer.web.app/",
      title: "Rhythm Typer",
      description:
        "<strong>Free</strong> browser typing <strong>rhythm</strong> game!",
      button: {
        type: "web",
        title: "Play instantly online",
        colors: "bg-purple-400 shadow-purple-500/30 hover:shadow-purple-500/30",
      },
      cardColors:
        "border-purple-500/50 hover:border-purple-500 hover:shadow-purple-500",
      titleColors: "group-hover/typing-game:text-purple-500",
      strongColor: "oklch(62.7% 0.265 303.9)",
    },
    {
      id: 4,
      poster: {
        src: "squash-and-spell-poster.webp",
        alt: "Squash and Spell game preview",
      },
      url: "https://store.steampowered.com/app/3387970/Squash_and_Spell__Kids_Typing/",
      title: "Squash and Spell",
      description:
        "A fun & friendly way for <strong>children</strong> to <strong>learn</strong> about letters, words, <strong>keyboards</strong> and writing!",
      button: {
        type: "steam",
        title: "Discover the game",
        colors: "bg-green-400 shadow-green-500/30 hover:shadow-green-500/30",
      },
      cardColors:
        "border-green-500/50 hover:border-green-500 hover:shadow-green-500",
      titleColors: "group-hover/typing-game:text-green-500",
      strongColor: "oklch(72.3% 0.219 149.579)",
    },
    {
      id: 5,
      poster: {
        src: "type-caster-poster.webp",
        alt: "Type Caster typing game preview",
      },
      url: "https://store.steampowered.com/app/3975280/TypeCaster/",
      title: "TypeCaster",
      description:
        "ABRA KABRA DABRA! Type your way into the top, harness powerful <strong>spells</strong>, uncover <strong>treasures</strong>, and lift that stupid <strong>curse</strong> of yours!",
      button: {
        type: "steam",
        title: "Test the magic for free",
        colors: "bg-zinc-400 shadow-zinc-500/30 hover:shadow-zinc-500/30",
      },
      cardColors:
        "border-zinc-500/50 hover:border-zinc-500 hover:shadow-zinc-500",
      titleColors: "group-hover/typing-game:text-zinc-500",
      strongColor: "oklch(55.2% 0.016 285.938)",
    },
    {
      id: 6,
      poster: {
        src: "zombie-typing-poster.webp",
        alt: "Zombie Typing game preview",
      },
      url: "https://store.steampowered.com/app/3949700/Zombie_Typing/",
      title: "Zombie Typing",
      description:
        "Zombie Typing is a tense survival game where <strong>every action</strong>: moving, looting, reloading, and fighting off the <strong>undead</strong>, relies on your typing skills. Type fast and stay sharp, because one wrong key could mean the difference between <strong>survival<strong> and being devoured!",
      button: {
        type: "steam",
        title: "Play the survival demo",
        colors: "bg-red-400 shadow-red-500/30 hover:shadow-red-500/30",
      },
      cardColors: "border-red-500/50 hover:border-red-500 hover:shadow-red-500",
      titleColors: "group-hover/typing-game:text-red-500",
      strongColor: "oklch(63.7% 0.237 25.331)",
    },
    {
      id: 7,
      poster: {
        src: "star-rune-poster.webp",
        alt: `${data.brand} typing game preview`,
      },
      url: data.url.demo,
      title: data.brand,
      description:
        "Star Rune is the <strong>ultimate typing game</strong> and the funnest experience typing you've ever had! <strong>Slash and dash</strong> through hordes of cookies and evil letters. 力. 速. 志. Unleash the true power of a <strong>super star</strong>!",
      button: {
        type: "demo",
        title: "Play instantly in your browser",
        colors: "bg-yellow-400 shadow-yellow-500/30 hover:shadow-yellow-500/30",
      },
      cardColors:
        "border-yellow-500/50 hover:border-yellow-500 hover:shadow-yellow-500",
      titleColors: "group-hover/typing-game:text-yellow-500",
      strongColor: "oklch(79.5% 0.184 86.047)",
    },
  ];

  return (
    <SectionWrapper
      id={id}
      badge={{
        icon: <Verified />,
        title: "Top notch typing games",
      }}
      title="Need more typing games ?"
      text={`Discover a curated selection of unique typing games across Steam and the web.
      Whether you want action, adventure, learning or pure chaos, here are the games that ${data.brand} proudly supports.`}
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
        {games.map(
          ({
            id,
            poster,
            url,
            title,
            description,
            button,
            cardColors,
            titleColors,
            strongColor,
          }) => (
            <TypingGame
              key={id}
              id={id}
              posterSrc={poster.src}
              posterAlt={poster.alt}
              url={url}
              title={title}
              description={description}
              buttonType={button.type as TTypingGameButtonType}
              buttonTitle={button.title}
              buttonColors={button.colors}
              cardColors={cardColors}
              titleColors={titleColors}
              strongColor={strongColor}
            />
          ),
        )}
      </div>
    </SectionWrapper>
  );
}
