"use client";
import Banner from "@/components/molecules/Banner";
import Banner1 from "@/assets/images/banner_1.avif";
import { getProduct } from "@/lib/api/product";
import { useEffect, useState } from "react";
import Carousel from "@/components/molecules/Carousel";

export default function Home() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    const productList = async () => {
      const response = await getProduct();
      const body = await response.json();
      console.log(body);

      setProducts([products, ...body.data]);
      console.log(products);
    };

    productList();
  }, []);
  return (
    <div className="bg-white">
      <Banner
        src_image={Banner1}
        content_absolute={false}
        href={"/next"}
        title={"LAST CALL - END OF SEASON SALE"}
        content={"ENDING IN"}
        button={"SHOP NOW"}
        alignment={"justify-center text-center"}
        content_color={"black"}
        timer_in_second={3600}
      />
      <Carousel data={products} />
    </div>
  );
}
