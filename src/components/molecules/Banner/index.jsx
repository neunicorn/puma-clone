import BannerContent from "@/components/atom/BannerContent";
import VideoPlayer from "@/components/atom/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  alignment,
  src_image,
  src_video,
  href,
  title,
  content,
  button,
  content_absolute,
  content_color,
  timer_in_second = 3600,
}) => {
  const absolute = content_absolute
    ? "absolute top-0 right-0 left-0 bottom-0"
    : "block";

  return (
    <section className="pb-5 relative">
      <div>
        {/* media */}
        <div className="w-full h-116">
          <Link href={href} className="h-full">
            {src_image ? (
              <Image
                src={src_image}
                alt="Banner"
                height={464}
                className="w-full"
              />
            ) : (
              <VideoPlayer src={src_video} />
            )}
          </Link>
        </div>
        {/* content */}
        {/* {alignment ? ( */}
        <div className={`${absolute} flex flex-nowrap  ${alignment}`}>
          <BannerContent
            href={href}
            title={title}
            content={content}
            button={button}
            color={content_color}
            timerInSecond={timer_in_second}
          />
        </div>
        {/* ) : null} */}
      </div>
    </section>
  );
};

export default Banner;
