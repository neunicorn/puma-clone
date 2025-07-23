import Image from "next/image";

const Card = (props) => {
  return (
    <div className="mx-1 cursor-pointer">
      <Link href={`/${product_name}`}>
        <div className="relative w-[340px] h-[340px]">
          <Image src={product_image_src} className="w-full h-full" />
          {product_discount ? (
            <span className="absolute text-xs text-white bg-[#ba2026] w-11 h-3 -left-1 top-4 shadow">
              {discount_discount_persentage} % OFF
            </span>
          ) : null}
          {product_status ? (
            <span className="absolute border-l-1 border-l-black py-[3px] px-[9px] font-normal text-xs left-0 -bottom-[1px] text-black uppercase">
              {product_status}
            </span>
          ) : null}
        </div>
        <div className="flex p-[10px] justify-between text-base leading-6">
          <div className="text-[#181818] pr-[10px] font-bold">
            {product_name}
          </div>
          <div className="flex flex-col text-right">
            {product_discount ? (
              <>
                <div className="text-[#ba2026] font-bold">
                  {product_price_discount}
                </div>
                <div className="text-[#666] font-normal line-through">
                  {product_price}
                </div>
              </>
            ) : (
              <div className="text-[#181818] font-bold">{product_price}</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
