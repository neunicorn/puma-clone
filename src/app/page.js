import Banner from "@/components/molecules/Banner";
import Banner1 from "@/assets/images/banner_1.avif";

export default function Home() {
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
      />
    </div>
  );
}
