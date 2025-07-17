import Link from "next/link";

const ListNav = ({ href, content }) => {
  return (
    <li className="peer peer-hover:opacity-50 h-full flex items-center duration-500">
      <Link href={href} className="px-3 ">
        <span className="py-2 hover:border-b-3 hover:border-b-[#ae946d]">
          {content}
        </span>
      </Link>
    </li>
  );
};

export default ListNav;
