import Link from "next/link";
import Timer from "../Timer";

const BannerContent = ({
  title,
  content,
  href,
  button,
  color = "white",
  timerInSecond,
}) => {
  const warnaBackground = color === "white" ? "bg-white" : "bg-[#181818]";
  const warnaText = color === "white" ? "text-white" : "text-[#181818]";
  const warnaTextLink = color === "white" ? "text-[#181818]" : "text-white";
  return (
    <div className={`w-1/2 px-24 py-8 h-full`}>
      <h1 className={`font-bold text-2xl  ${warnaText}`}>{title}</h1>
      <p className={`text-xl  ${warnaText}`}>{content}</p>
      {timerInSecond ? (
        <Timer color={warnaText} initialTimerInSecond={timerInSecond} />
      ) : null}
      <div className={`mt-4`}>
        <Link
          href={href}
          className={`text-xl font-bold p-4 mt-4  ${warnaBackground} ${warnaTextLink}`}
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default BannerContent;
