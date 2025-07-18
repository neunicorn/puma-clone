import ListNav from "@/components/atom/ListNav";
import Image from "next/image";
import Puma from "@/assets/images/puma.svg";
import PumaWhite from "@/assets/images/puma_white.svg";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import InputSearch from "./InputSearch";
import UserAction from "./UserAction";

const Navbar = () => {
  return (
    <header className="text-white w-full z-10 top-0 left-0 px-10 text-[1rem] font-medium h-15">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          {/* wrapperr logo */}
          <Link href="/" className="flex items-center h-full p-3">
            <Image src={PumaWhite} alt="Puma Logo" width={39} height={39} />
          </Link>
          <nav className="h-full">
            <ul className="group flex h-full items-center">
              <ListNav href={"/"} content={"Produk Terbaru"} />
              <ListNav href={"/"} content={"Wanita"} />
              <ListNav href={"/"} content={"Pria"} />
              <ListNav href={"/"} content={"Anak-anak"} />
              <ListNav href={"/"} content={"Speedcat"} />
              <ListNav href={"/"} content={"Koleksi"} />
              <ListNav href={"/"} content={"Olahraga"} />
              <ListNav href={"/"} content={"Outlet"} />
            </ul>
          </nav>
        </div>
        <div className="flex items-center h-full">
          <InputSearch />
          &nbsp;
          <button className="group flex items-center px-4 transition-colors duration-300 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-black group-hover:fill-[#CCCCCC] transition-colors duration-300"
              fill="#fff"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
          </button>
          <UserAction />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
