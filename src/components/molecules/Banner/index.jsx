import BannerContent from "@/components/atom/BannerContent";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  alignment,
  src_image,
  href,
  title,
  content,
  button,
  content_absolute,
  content_color,
}) => {
  const absolute = content_absolute
    ? "absolute top:0 right:0 left:0 bottom:0"
    : "block";

  return (
    <section className="pb-5 relative">
      <div>
        {/* media */}
        <div className="w-full h-116">
          <Link href={href} className="h-full">
            <Image src={src_image} alt="Banner" sizes="100vw" height={464} />
          </Link>
        </div>
        {/* content */}
        {/* {alignment ? ( */}
        <div className={`flex flex-nowrap  ${alignment}`}>
          <BannerContent
            href={href}
            title={title}
            content={content}
            button={button}
            color={content_color}
          />
        </div>
        {/* ) : null} */}
      </div>
    </section>
  );
};

export default Banner;
