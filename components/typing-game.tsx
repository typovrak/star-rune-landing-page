import { ITypingGame } from "@/utils/types";
import Image from "@/components/image";
import ButtonIcon from "@/components/button-icon";
import Steam from "@/icons/steam";
import World from "@/icons/world";

export default function TypingGame({
  id,
  posterSrc,
  posterAlt,
  url,
  title,
  description,
  buttonType,
  buttonTitle,
  buttonColors,
  cardColors,
  titleColors,
}: ITypingGame) {
  return (
    <article
      className={`border-2 bg-white rounded-lg transition-all duration-300 group/typing-game overflow-hidden hover:shadow-sm flex flex-col ${cardColors}`}
    >
      <Image
        src={`/typing-games/${posterSrc}`}
        alt={posterAlt}
        className="object-cover h-auto w-full group-hover/typing-game:scale-[105%] transition-all duration-300"
        width={460}
        height={215}
      />

      <div className="text-slate-600 p-5 flex flex-col justify-between h-full gap-5">
        <div>
          <h3
            className={`text-slate-600 uppercase font-bold mb-2 text-2xl transition-all duration-300 ${titleColors}`}
          >
            {title}
          </h3>
          <p className="">{description}</p>
        </div>

        <ButtonIcon
          url={url}
          icon={buttonType === "steam" ? <Steam /> : <World />}
          title={buttonTitle}
          className={buttonColors}
          size="big"
        />
      </div>
    </article>
  );
}
