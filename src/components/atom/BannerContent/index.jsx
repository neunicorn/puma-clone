import Link from "next/link";

const BannerContent = ({ title, content, href, button }) => {
  return (
    <div className="w-1/2 px-24 py-8 h-full">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-xl">{content}</p>
      <div className="mt-4">
        <Link href={href} className="text-xl font-bold p-4 mt-4 bg-[#181818]">
          {button}
        </Link>
      </div>
    </div>
  );
};

export default BannerContent;
