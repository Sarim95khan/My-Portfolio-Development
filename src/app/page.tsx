import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Hero from "../componenets/widgets/Hero";
import Aboutme from "../componenets/widgets/Aboutme";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="snap-y snap-mandatory">
      <Hero />
      <Aboutme />
    </div>
  );
}
