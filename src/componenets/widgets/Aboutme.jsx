import React from "react";
import Wrapper from "../shared/Wrapper";

const Aboutme = () => {
  return (
    <div className="h-screen bg-teal-600 px-16 pt-14 sm:pt-24">
      <Wrapper>
        <div>
          <h3 className="text-3xl font-semibold text-white">About Me:</h3>
          <p className="text-white leading-snug mt-4">
            I am Chemical Engineer and student of AI, IoT and Web 3.0 &
            Metaverse. I am also a self taught Artist. Providing services in the
            field of Web Development as Full Stack Developer. I also provide
            services as a 3D Artist with expertise in 3D Modelling of Game
            Assets and Character Design.
          </p>
        </div>
        <div className="mt-20 flex flex-col md:flex-row justify-between gap-8 ">
          <div className="basis-1/2 space-y-4 bg-white sm:bg-transparent sm:text-white rounded-xl text-black p-4">
            <h3 className="text-3xl ">My Specialities</h3>
            <p className=" ">Artificial Intelligence</p>
            <p className=" ">Internet of Things </p>
            <p className=" ">Web 3.0 & Metaverse </p>
          </div>
          <div className="basis-1/2 space-y-4 bg-white sm:bg-transparent text-black sm:text-white p-4 rounded-xl">
            <h3 className="text-3xl  ">Skills</h3>
            <p className=" ">Photoshop</p>
            <p className=" ">Programming</p>
            <p className=" ">Blender 3D</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Aboutme;
