"use client";
import Card from "@/components/atom/Card";
import { useState } from "react";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => prev + (1 % data.length));
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1) % data.length);

  return (
    <section className="pt-15 pb-30">
      <div className="relative">
        <button className="absolute top-1/2 right-0" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z"></path>
          </svg>
        </button>
        <button className="absolute top-1/2 left-0" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z"></path>
          </svg>
        </button>

        <div
          className="overflow-hidden transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <div className="flex gap-4">
            {props.data?.map((product) => {
              <Card product={product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
