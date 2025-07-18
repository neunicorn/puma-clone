import Link from "next/link";

const QuickLink = ({ href, name }) => {
  return (
    <li className="text-[#181818] text-sm w-full py-2 h-10 border-b-1 border-[#eee] hover:bg-[#eee] duration-150 ease-in">
      <Link href={href} className="h-full w-full">
        <span className="w-full">{name}</span>
      </Link>
    </li>
  );
};
export default QuickLink;
