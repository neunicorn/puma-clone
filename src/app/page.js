"use client";
import Banner from "@/components/molecules/Banner";
import Banner1 from "@/assets/images/banner_1.avif";
import RoseBanner from "@/assets/images/rose.avif";
import { getProduct } from "@/lib/api/product";
import { useEffect, useState } from "react";
import Carousel from "@/components/molecules/Carousel";
import Header from "@/components/atom/Header";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      product: {
        name: "Sepatu Sneaker Scuderia Ferrari HP Speedcat Unisex",
        price: "1.799.000",
        image: "/images/product1/sepatu1.avif",
      },
    },
  ]);

  useEffect(() => {
    const productList = async () => {
      const response = await getProduct();
      const body = await response.json();

      setProducts(body.data);
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
        button={"BELANJA SEKARANG"}
        alignment={"justify-center text-center"}
        content_color={"black"}
        timer_in_second={3600}
      />
      <Banner
        src_video={"/video/rose.webm"}
        content_absolute={false}
        href={"/rose"}
        title={"SPEED CAT"}
        content={"FULL THROTTLE FASHION"}
        button={"BELANJA SEKARANG"}
        alignment={"justify-center text-center"}
        content_color={"black"}
      />
      <Carousel data={products} />
      <Banner
        src_image={RoseBanner}
        content_absolute={true}
        href={"/rose"}
        title={"SPEED CAT"}
        content={"FULL THROTTLE FASHION"}
        button={"BELANJA SEKARANG"}
        alignment={"flex-col justify-center items-center text-center"}
        content_color={"white"}
      />
      <Header txt={"STYLE IT WITH SPEEDCAT"} />
    </div>
  );
}
