import Image from "next/image";
import React from "react";
import img from "../public/imgs/pak_map1.png";
import CloudIcon from "@mui/icons-material/Cloud";
import { useInView } from "react-intersection-observer";

type Props = {};

export const Landing = (props: Props) => {
  const heading = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <div className="flex items-end justify-between mx-2 sm:mx-5 lg:mx-[10%] xl:[15%] 2xl:[18%]">
      <div
        ref={heading.ref}
        className={`odd:flex flex-col transition-all duration-[2000ms] ${
          heading.inView
            ? "translate-y-[0] opacity-100"
            : "opacity-0 translate-y-[100px]"
        } items-center pt-10 pb-10 self-center md:w-auto w-full`}
      >
        <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold md:text-left text-center ">
          Al-Qamar Travels
        </h1>
        <p className="w-full  md:px-0 md:max-w-[530px]  text-sm font-medium text-primary/70 leading-7 my-5 md:text-justify text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ipsa
          vitae nesciunt temporibus aspernatur, repellendus cupiditate ab porro
          atque impedit, minima maiores perferendis a voluptatem iusto. Hic
          minus provident rerum.
        </p>
        <button className="md:self-start w-fit py-2 hover:scale-110 transition-all px-6 text-sm md:text-md lg:text-lg rounded-2xl my-5 bg-secondary border-2 border-white hover:bg-secondaryLighter text-white font-medium">
          <a href="#heading">Visit Now</a>
        </button>
      </div>
      <div className="hidden md:block w-1/2 h-1/2">
        <Image
          style={{ height: "auto" }}
          objectFit="contain"
          layout="responsive"
          src={img}
        />
      </div>
    </div>
  );
};
