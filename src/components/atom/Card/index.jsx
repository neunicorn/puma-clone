import Image from "next/image";
import Link from "next/link";

const Card = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="mx-1 cursor-pointer">
      <Link href={`/${product.name}`}>
        <div className="relative w-[340px] h-[340px]">
          <Image
            src={image}
            className="w-full h-full"
            alt={"product"}
            width={340}
            height={340}
          />
          {product.discount ? (
            <span className="absolute text-xs text-white bg-[#ba2026] w-11 h-3 -left-1 top-4 shadow">
              {product.discount_persentage} % OFF
            </span>
          ) : null}
          {product.status ? (
            <span className="absolute border-l-1 border-l-black py-[3px] px-[9px] font-normal text-xs left-0 -bottom-[1px] text-black uppercase">
              {product.status}
            </span>
          ) : null}
        </div>
        <div className="flex p-[10px] justify-between text-base leading-6">
          <div className="text-[#181818] pr-[10px] font-bold">{name}</div>
          <div className="flex flex-col text-right">
            {product.discount ? (
              <>
                <div className="text-[#ba2026] font-bold">
                  {product.price.discount}
                </div>
                <div className="text-[#666] font-normal line-through">
                  {product.price}
                </div>
              </>
            ) : (
              <div className="text-[#181818] font-bold">{price}</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
