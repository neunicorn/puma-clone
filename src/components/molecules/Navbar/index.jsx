import ListNav from "@/components/atom/ListNav";
import Image from "next/image";
import Puma from "@/assets/images/puma.svg";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white w-full top-0 left-0 text-slate-900 px-10 text-[1rem] font-medium h-18">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          {/* wrapperr logo */}
          <Link href="/" className="flex items-center h-full p-3">
            <Image src={Puma} alt="Puma Logo" width={50} height={50} />
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
          <div className="h-13 relative">
            <form className="h-full">
              <input
                className="h-full font-medium text-[14px] focus:border-gray-500 hover:border-gray-500 focus:outline-none border-1 py-2  pr-8 pl-12 border-gray-700"
                placeholder="Cari Produk Puma.com"
              />
              <button className="absolute top-3 start-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            </form>
          </div>
          &nbsp;
          <button className="group flex items-center px-4 transition-colors duration-300 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black group-hover:fill-slate-700 transition-colors duration-300"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
            </svg>
          </button>
          <button className="group flex items-center px-4 transition-colors duration-300 h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-black group-hover:fill-slate-700 transition-colors duration-300"
              fill="#0f172b"
              viewBox="0 0 256 256"
            >
              <path d="M152,80a8,8,0,0,1,8-8h88a8,8,0,0,1,0,16H160A8,8,0,0,1,152,80Zm96,40H160a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16Zm0,48H184a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
