import AnimationContainer from "@/utils/AnimationContainer";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="section-space-sm w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className=" font-semibold lg:font-bold text-2xl lg:text-4xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0">
          Md Mizanur Rahman
        </h1>

        <p className="flex items-center gap-2 mb-8 mx-auto lg:mx-0">
          <span className="font-semibold">Frontend Web</span>Developer
        </p>
      </AnimationContainer>

      <AnimationContainer customClassName="w-[110px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="mizanur rahman"
          height={176}
          width={176}
          src="/assets/images/mizanur.jpg"
          sizes="30vw"
          priority
          className="rounded-[8px] filter grayscale hover:grayscale-0 transition ease"
        />
      </AnimationContainer>
    </div>
  );
};
