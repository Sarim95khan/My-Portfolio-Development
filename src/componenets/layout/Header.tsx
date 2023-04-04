"use client";
import Link from "next/link";
import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../widgets/Button";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <Wrapper>
      <header className="h-20 bg-white shadow-lg flex justify-between items-center sticky top-0 left-0 px-16 ">
        <motion.h1
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="text-xl font-semibold"
        >
          S.A.K
        </motion.h1>
        <motion.ul
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="hidden sm:flex lg:gap-10 sm:gap-6"
        >
          <Button>
            <Link href="/">
              <li>Home</li>
            </Link>
          </Button>
          <Button>
            <Link href={"/portfolio"}>
              <li>Portfolio</li>
            </Link>
          </Button>
          <Button>
            <Link href={"/resume"}>
              <li>Resume</li>
            </Link>
          </Button>
          <Button>
            <Link href={"/contact"}>
              <li>Contact</li>
            </Link>
          </Button>
        </motion.ul>

        <div className="sm:hidden">
          <AiOutlineMenu />
        </div>
      </header>
    </Wrapper>
  );
};

export default Header;
