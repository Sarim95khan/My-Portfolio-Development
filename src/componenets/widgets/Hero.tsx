import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "./Button";
import Image from "next/image";
import Sarim from "../../../public/images/Sarim.jpeg";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <Image src={Sarim} className="h-64 w-64 rounded-full" alt="sarim" />
      <h1 className="text-4xl sm:text-6xl font-semibold mt-6">
        Hi! I'm Sarim Khan
      </h1>
      <p className="text-gray-600 mt-2">
        Experience Engineer, a Developer and an Artist
      </p>
      <div className="flex justify-between items-center gap-8 mt-4">
        <Button>
          <span className="">Check my Resume</span>
        </Button>
        <span className="cursor-pointer">Contact me</span>
      </div>
    </div>
  );
};

export default Hero;
