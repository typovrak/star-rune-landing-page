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
        "A typing game where you play as a cat, crushed by a computer and transported to a fantasy world of swords, magic, catgirls and furries! As the hero summoned from another world, venture forth with your trusty keyboard, defeat foes and save the cat kingdom!",
      button: {
        type: "steam",
        title: "Test it for free",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
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
        "Weaponize your WPM. Glyphica: Typing Survival is a single-player roguelite horde survival typing game that lets you mow down hordes of enemies in a minimalistic arena using your finger dexterity, your choice of weapons loadout, and sheer determination.",
      button: {
        type: "steam",
        title: "Test it for free",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
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
        "Keys of Fury is a retro-style Beat `em up typing game. Focus on typing perfection as you battle your way to becoming a master of key fu.",
      button: {
        type: "steam",
        title: "Buy it now",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
    },
    {
      id: 3,
      poster: {
        src: "rhythm-typer-poster.webp",
        alt: "Rythm Typer typing game preview",
      },
      url: "https://rhythm-typer.web.app/",
      title: "Rhythm Typer",
      description: "Free browser typing rhythm game!",
      button: {
        type: "web",
        title: "Play in your browser now",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
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
        "A fun & friendly way for children to learn about letters, words, keyboards and writing!",
      button: {
        type: "steam",
        title: "Buy it now",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
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
        "ABRA KABRA DABRA! Type your way into the top, harness powerful spells, uncover treasures, and lift that stupid curse of yours!",
      button: {
        type: "steam",
        title: "Test it for free",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
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
        "Zombie Typing is a tense survival game where every action: moving, looting, reloading, and fighting off the undead, relies on your typing skills. Type fast and stay sharp, because one wrong key could mean the difference between survival and being devoured!",
      button: {
        type: "steam",
        title: "Test it for free",
        colors: "bg-steam-500 shadow-steam-500/30 hover:shadow-steam-500/30",
      },
      cardColors:
        "border-pink-500/50 hover:border-pink-500 hover:shadow-pink-500",
      titleColors: "group-hover/typing-game:text-pink-500",
    },
  ];

  return (
    <SectionWrapper
      id={id}
      badge={{
        icon: <Verified />,
        title: "Practice while playing",
      }}
      title="Need more typing games ?"
      text={`There is others interesting typing games, free, with a demo and more available across Steam and the web. Here is a list of games that ${data.brand} support`}
      className="bg-white"
    >
      <div className="grid grid-cols-2 gap-6 max-w-[1000px] mx-auto">
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
            />
          ),
        )}
      </div>
    </SectionWrapper>
  );
}
