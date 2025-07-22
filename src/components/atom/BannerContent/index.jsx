import Link from "next/link";

const BannerContent = ({ title, content, href, button, color }) => {
  const warna = color === "white" ? "#FFF" : "#181818";
  const warnaText = color === "white" ? "#181818" : "#FFF";
  return (
    <div className={`w-1/2 px-24 py-8 h-full text-[${warna}] `}>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-xl">{content}</p>
      <div className="mt-4">
        <Link
          href={href}
          className={`text-xl font-bold p-4 mt-4 text-[${warnaText}] bg-[${warna}]`}
        >
          {button}
        </Link>
      </div>
    </div>
  );
};

export default BannerContent;
